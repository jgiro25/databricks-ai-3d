// Full step-by-step explanations (drawer content). Steps 0–4.
// Names verified against Databricks docs on Nov 2, 2026.
const C = 'main.provider_ops';
export const DEEP_A = [
  // ───────────────────────── 0 · NEED → SOLUTION
  {
    lead: 'Every AI project starts with a business problem. This step turns the analyst’s problem into a technical design. Each later step builds one piece of that design.',
    happens: [
      '<b>The business side.</b> A provider-operations analyst gets questions like “What is the timely-filing limit for out-of-network claims?” The answer is in one of ~600 contract and policy PDFs, on a page nobody remembers. Today they search folders and skim PDFs. That takes 20–40 minutes, and two analysts can give two different answers.',
      '<b>The developer side.</b> The developer turns each business wish into a technical requirement (see the table below), then picks a Databricks component for each one.',
      '<b>The design has two paths.</b> An <b>offline path</b> prepares the documents ahead of time (steps 02–05: ingest, parse + chunk, embed, index). It runs on a schedule, whenever PDFs change. An <b>online path</b> runs for every question (steps 06–07: retrieve, generate) and takes a few seconds.',
      '<b>Quality and production wrap around both.</b> Step 08 measures answer quality with a test set before anyone relies on it. Step 09 deploys the agent with permissions, rate limits and logs.',
    ],
    concepts: [
      { t: 'RAG (Retrieval-Augmented Generation)', d: 'An LLM never saw your contracts during training. If you ask it directly, it guesses. RAG first <b>retrieves</b> the relevant passages from your documents, then asks the LLM to <b>generate</b> an answer using only those passages. The model is not retrained. It just reads the right pages first.' },
      { t: 'Why not fine-tune a model?', d: 'Fine-tuning bakes knowledge into model weights. It is expensive, it goes stale when a contract changes, and it cannot cite a page. RAG reads the current document at question time, so updates show up after the next sync and every answer can point to its source.' },
      { t: 'Unity Catalog', d: 'Databricks’ governance layer. Every file, table, index, model and app gets a three-part name like <code>main.provider_ops.chunks</code> (catalog.schema.object), plus permissions and lineage. That is how “only authorised staff see contract X” is enforced in one place.' },
    ],
    compare: {
      title: 'From business need to technical design',
      cols: ['Business need', 'Technical requirement', 'Databricks component'],
      rows: [
        ['Answers must come from our documents', 'Ground the LLM on retrieved passages', 'AI Search + prompt template'],
        ['“Show me where it says that”', 'Keep source file + page on every chunk', 'ai_parse_document → ai_prep_search metadata'],
        ['Only allowed staff see a contract', 'Central access control on files, tables, index', 'Unity Catalog grants'],
        ['New contracts arrive every week', 'Incremental processing, no full rebuilds', 'Delta tables + Delta Sync index'],
        ['It has to be trustworthy', 'Measured quality on a fixed test set', 'MLflow 3 evaluation + LLM judges'],
        ['Usable from a browser, at scale', 'Authenticated, rate-limited endpoint', 'Agent Runtime on Databricks Apps + Unity Gateway'],
      ],
    },
    code: [
      { label: 'The whole solution in 8 lines', lang: 'py', src: `# Each line is one step of this walkthrough (illustrative outline)
files  = "/Volumes/${C.replace('.', '/')}/contracts/"          # 02 Ingest: governed folder
parsed = "ai_parse_document(content)"                          # 03 Parse: bytes -> structured text
chunks = "ai_prep_search(parsed)"                              # 03 Chunk: text -> passages
index  = client.create_delta_sync_index(...)                   # 04-05 Embed + index
hits   = index.similarity_search(query_text=q, num_results=5)  # 06 Retrieve
answer = llm.chat(prompt(q, hits))                             # 07 Generate
mlflow.genai.evaluate(data, predict_fn, scorers=[...])         # 08 Evaluate
# $ agentbricks deploy provider-ops                            # 09 Deploy` },
    ],
    io: [
      { title: 'Today vs with the agent', cols: ['Question', 'Today', 'With the agent'], rows: [
        ['Timely-filing limit, out-of-network?', '~35 min, 2 PDFs opened', '~6 s · cites Contract §4.2, Claims Policy p.7'],
        ['Is Dr. Lee’s group credentialed for telehealth?', 'Email to credentialing team', '~5 s · cites Credentialing Policy §2.1'],
        ['Fee for CPT 99214 in the 2026 schedule?', 'Open spreadsheet export', '~5 s · cites Fee Schedule table 3'],
      ] },
    ],
    why: 'Starting from the need keeps the build honest. Every component exists because a business requirement asked for it, and step 08 checks that the requirement is actually met.',
    pitfalls: [
      'Starting with the model instead of the question set. Collect 30–50 real analyst questions with known answers first; they become the evaluation set in step 08.',
      'Copying PDFs to laptops or ungoverned buckets “just to test”. Put them in a Unity Catalog Volume from day one so permissions carry through.',
      'Scope creep: “answer anything about anything”. Start with one document family (provider contracts + claims policy) and expand.',
    ],
    objects: ['analyst', 'pdfStack', 'clock', 'volume', 'deltaTable', 'aiParse', 'embedModel', 'index', 'llm', 'judges', 'app'],
  },
  // ───────────────────────── 1 · GOAL
  {
    lead: 'This is the finished experience you are building toward. Watch what happens between the question and the answer; each later step zooms into one part of it.',
    happens: [
      'The analyst types a question in the app: <i>“What’s the timely-filing limit for out-of-network claims?”</i>',
      'The agent sends the question text to the AI Search index. The index embeds it with the same model used for the documents, then returns the 5 most similar passages with their file, section and page.',
      'The agent builds one prompt: an instruction (“answer only from the context, cite sources”), the 5 passages, and the question.',
      'The LLM reads that prompt and writes: <i>“90 days from date of service [1][2]”</i>. The app turns [1] and [2] into links to <i>Contract §4.2</i> and <i>Claims Policy p.7</i>.',
      'In production, every step is recorded as an MLflow <b>trace</b>, so you can later see exactly which passages produced which answer.',
    ],
    concepts: [
      { t: 'Grounding', d: 'Forcing the model to answer from supplied text instead of memory. The prompt says “If the context does not contain the answer, say you don’t know.” This is the main defence against made-up answers (hallucinations).' },
      { t: 'Citation', d: 'Each passage carries its <code>source_uri</code> and page number from ingestion. The LLM is asked to tag each claim with the passage number it came from, so the app can show the original page.' },
      { t: 'Context window', d: 'The maximum amount of text an LLM can read at once. Retrieval keeps the prompt small (5 short passages instead of 600 PDFs), which is faster, cheaper and more accurate.' },
    ],
    code: [
      { label: 'What the agent does per question (Python)', lang: 'py', src: `def answer(question: str) -> dict:
    hits = index.similarity_search(            # step 06
        query_text=question,
        columns=["chunk_id", "chunk_to_retrieve", "source_uri", "page"],
        num_results=5)
    prompt = build_prompt(question, hits)      # step 07
    reply = llm.chat.completions.create(
        model="databricks-meta-llama-3-3-70b-instruct",
        messages=prompt, temperature=0)
    return {"answer": reply.choices[0].message.content,
            "sources": [h["source_uri"] for h in hits]}` },
    ],
    io: [
      { title: 'Input', cols: ['field', 'value'], rows: [['question', 'What’s the timely-filing limit for out-of-network claims?'], ['user', 'analyst@plan.org (Unity Catalog identity)']] },
      { title: 'Output', cols: ['field', 'value'], rows: [['answer', '90 days from date of service [1][2]'], ['[1]', 'provider_contract_acme.pdf · §4.2 · p.12'], ['[2]', 'claims_policy_2026.pdf · p.7']] },
    ],
    why: 'Citations change the analyst’s job from searching to verifying. They can trust the answer because they can click through to the exact clause.',
    pitfalls: [
      'Questions the documents don’t answer. Design the prompt to say “I can’t find this in the contracts” instead of guessing.',
      'Ambiguous questions (“what’s the limit?”). Let the agent ask a follow-up, or retrieve more passages and list the options.',
    ],
    objects: ['analyst', 'question', 'ragAgent', 'answer', 'citation'],
  },
  // ───────────────────────── 2 · INGEST
  {
    lead: '“Copy the PDF to a Volume, then to a Delta table” sounds abstract. Concretely it is two moves: (1) put the <b>files</b> in a governed folder, and (2) create a <b>table with one row per file</b> that holds the file’s path, size, date and raw bytes. No text is extracted yet.',
    happens: [
      '<b>Create the governed folder.</b> <code>CREATE VOLUME main.provider_ops.contracts</code>. A Volume is a real folder in your cloud object storage (S3, ADLS or GCS) that Unity Catalog manages. Its path is <code>/Volumes/main/provider_ops/contracts/</code>.',
      '<b>Copy the files in.</b> Drag and drop in Catalog Explorer, run <code>databricks fs cp</code> from a laptop, or schedule a job or connector that pulls from SharePoint. The PDF bytes are copied as-is. A PDF in a Volume is still a normal PDF you could download and open.',
      '<b>Read every file as a row.</b> <code>READ_FILES(path, format =&gt; \'binaryFile\')</code> scans the folder and returns one row per file with four columns: <code>path</code>, <code>modificationTime</code>, <code>length</code> (bytes) and <code>content</code> (the whole file as a BINARY value).',
      '<b>Save those rows as a Delta table.</b> <code>CREATE TABLE … AS SELECT</code> writes them to <code>main.provider_ops.raw_docs</code>. On disk, Delta stores the rows in <b>Parquet</b> files (columnar, compressed) plus a <code>_delta_log/</code> folder. Each write adds a numbered JSON commit to that folder, recording which Parquet files were added or removed.',
      '<b>Next time, only new files.</b> With Auto Loader (<code>cloudFiles</code>), Databricks remembers which files it already ingested (checkpoint). Next week’s run appends only the new PDFs.',
    ],
    concepts: [
      { t: 'So what does “copy to a Delta table” really mean?', d: 'It means <b>wrapping</b> each PDF as a row: metadata columns plus the bytes in a <code>content</code> column. The PDF is not converted, yet. Once files are rows you get SQL, permissions per table, history (“what did the table look like last Tuesday?”), and a reliable way for every later step to process only what changed.' },
      { t: 'Parquet + transaction log = Delta', d: 'Parquet files hold the data. The <code>_delta_log</code> holds the truth about which Parquet files form the current version. Readers consult the log, so they never see half-written data (ACID). Old versions stay readable for a retention period (“time travel”).' },
      { t: 'BINARY column', d: 'A column type that holds raw bytes. A PDF’s bytes start with <code>25 50 44 46</code>, which is ASCII for “%PDF”. Storing bytes in a table lets <code>ai_parse_document</code> read them with plain SQL in the next step.' },
      { t: 'Do I need both?', d: 'Strictly, no. Step 03 can parse straight from <code>READ_FILES</code>, and the Databricks examples do exactly that. The <code>raw_docs</code> table is worth it at scale: an audit trail of what was ingested, and incremental re-processing.' },
    ],
    compare: {
      title: 'Volume vs Delta table',
      cols: ['', 'Unity Catalog Volume', 'Delta table'],
      rows: [
        ['Holds', 'Files (PDF, images, CSV…)', 'Rows & columns'],
        ['Unit', 'One file', 'One row (here: one row per PDF)'],
        ['Address', '/Volumes/main/provider_ops/contracts/…', 'main.provider_ops.raw_docs'],
        ['You use it with', 'File APIs, READ_FILES, Auto Loader', 'SQL, PySpark, AI Functions'],
        ['On disk', 'The files themselves', 'Parquet files + _delta_log/ JSON commits'],
        ['Governance', 'READ VOLUME / WRITE VOLUME grants', 'SELECT / MODIFY grants, row filters, lineage'],
        ['History', 'File overwrite = gone', 'Versioned (DESCRIBE HISTORY, time travel)'],
      ],
    },
    code: [
      { label: 'SQL · one-off load', lang: 'sql', src: `-- 1) A governed home for the files
CREATE SCHEMA IF NOT EXISTS ${C};
CREATE VOLUME IF NOT EXISTS ${C}.contracts;

-- 2) Upload (UI drag-and-drop, or from a terminal):
--    databricks fs cp ./pdfs dbfs:/Volumes/main/provider_ops/contracts/ --recursive

-- 3) One row per PDF: metadata + raw bytes
CREATE OR REPLACE TABLE ${C}.raw_docs AS
SELECT path, modificationTime, length, content
FROM READ_FILES('/Volumes/main/provider_ops/contracts/*.pdf',
                format => 'binaryFile');

-- 4) Look at what you just made
SELECT path, length, modificationTime FROM ${C}.raw_docs LIMIT 5;
DESCRIBE HISTORY ${C}.raw_docs;` },
      { label: 'PySpark · incremental with Auto Loader', lang: 'py', src: `(spark.readStream.format("cloudFiles")
    .option("cloudFiles.format", "binaryFile")
    .option("pathGlobFilter", "*.pdf")
    .load("/Volumes/main/provider_ops/contracts/")
    .writeStream
    .option("checkpointLocation", "/Volumes/main/provider_ops/_chk/raw_docs")
    .trigger(availableNow=True)          # process new files, then stop
    .toTable("${C}.raw_docs"))` },
    ],
    io: [
      { title: 'Input · files in the Volume', cols: ['file', 'size'], rows: [['provider_contract_acme.pdf', '2.4 MB'], ['claims_policy_2026.pdf', '1.1 MB'], ['fee_schedule_2026.pdf', '3.8 MB'], ['… 597 more', '']] },
      { title: 'Output · main.provider_ops.raw_docs', cols: ['path', 'modificationTime', 'length', 'content'], rows: [
        ['…/contracts/provider_contract_acme.pdf', '2026-10-28 09:14', '2,516,402', '25 50 44 46 2D 31…'],
        ['…/contracts/claims_policy_2026.pdf', '2026-10-30 16:02', '1,148,770', '25 50 44 46 2D 31…'],
        ['…/contracts/fee_schedule_2026.pdf', '2026-11-01 08:47', '3,981,055', '25 50 44 46 2D 31…'],
      ], note: 'content is BINARY: the actual file bytes. “25 50 44 46” = “%PDF”.' },
    ],
    why: 'Everything downstream (parsing, chunks, the index, the app) inherits permissions and lineage from here. If a contract is restricted in Unity Catalog, it stays restricted all the way to the answer.',
    pitfalls: [
      'Files larger than 100 MB or longer than 500 pages exceed <code>ai_parse_document</code> limits. Split them, or use the <code>pageRange</code> option.',
      'Duplicates and old versions. Keep a version or effective-date convention in the file path, or dedupe on a hash of <code>content</code>.',
      'Granting access only to the table, not the Volume (or vice versa). Readers of the pipeline need <code>READ VOLUME</code> on the files and <code>SELECT</code> on the tables.',
      'Storing bytes twice (Volume and table) costs storage. For very large corpora, keep only path + metadata in the table and parse directly from the Volume.',
    ],
    objects: ['pdf', 'volume', 'readFiles', 'deltaTable'],
  },
  // ───────────────────────── 3 · PARSE + CHUNK
  {
    lead: 'A PDF is a set of drawing instructions (“put glyph ‘9’ at x,y”), not text. Two AI Functions turn it into clean, search-sized passages: <code>ai_parse_document</code> reads the layout, and <code>ai_prep_search</code> cuts it into chunks.',
    happens: [
      '<b>Parse.</b> <code>ai_parse_document(content)</code> takes the BINARY bytes from <code>raw_docs</code>. A Databricks-hosted model reads every page and returns a <b>VARIANT</b> (structured JSON-like value) with pages, elements (title, section header, paragraph, table, figure, caption, footer), their text, and their page and bounding box. Tables come out as HTML, so rows and columns survive. Scanned pages are OCR’d.',
      '<b>Store the parse.</b> Results go to <code>parsed_docs</code> (one row per PDF), so you never pay to parse the same file twice.',
      '<b>Chunk.</b> <code>ai_prep_search(parsed)</code> splits each document into semantic chunks, keeping paragraphs and tables whole, and enriches each one. You get <code>chunk_to_retrieve</code> (the clean text the LLM will read) and <code>chunk_to_embed</code> (the same text plus document title, section header, page number, a one-sentence document summary and, for tables, a summary and related questions).',
      '<b>Explode to rows.</b> <code>ai_prep_search</code> returns one VARIANT per document with an array <code>document.contents</code>. <code>variant_explode</code> turns that array into <b>one row per chunk</b> in <code>main.provider_ops.chunks</code>.',
      '<b>Prepare for syncing.</b> The table gets <code>delta.enableChangeDataFeed = true</code>, so step 05 can sync only rows that changed.',
    ],
    concepts: [
      { t: 'Why chunk at all?', d: 'Search works best on passages about one idea. A whole 40-page contract matches everything a little; a 300-word clause on timely filing matches one question strongly. Small chunks also keep the LLM prompt short.' },
      { t: 'chunk_to_embed vs chunk_to_retrieve', d: 'The <b>embed</b> text is what gets turned into a vector. The extra context (“Document: Acme Provider Agreement · Section 4 Claims”) makes it findable. The <b>retrieve</b> text is the clean passage shown to the LLM and the user.' },
      { t: 'VARIANT', d: 'A Databricks column type for semi-structured data (like JSON), queried with paths: <code>result:document.contents</code>, then cast with <code>::STRING</code>.' },
      { t: 'Beta status', d: '<code>ai_prep_search</code> is in Beta and needs Databricks Runtime 18.2+ (on serverless, environment version 3+). Its only options are <code>version</code> and <code>schema</code>; chunk size is chosen for you.' },
    ],
    code: [
      { label: 'SQL · parse once, store the result', lang: 'sql', src: `CREATE OR REPLACE TABLE ${C}.parsed_docs AS
SELECT path, ai_parse_document(content) AS parsed
FROM ${C}.raw_docs;` },
      { label: 'SQL · chunk and explode to one row per chunk', lang: 'sql', src: `CREATE OR REPLACE TABLE ${C}.chunks
TBLPROPERTIES (delta.enableChangeDataFeed = true) AS
WITH prepped AS (
  SELECT path, ai_prep_search(parsed) AS result
  FROM ${C}.parsed_docs
)
SELECT
  chunk.value:chunk_id::STRING          AS chunk_id,
  chunk.value:chunk_position::INT       AS chunk_position,
  chunk.value:chunk_to_retrieve::STRING AS chunk_to_retrieve,
  chunk.value:chunk_to_embed::STRING    AS chunk_to_embed,
  chunk.value:pages[0]:page_id::INT     AS page,
  prepped.path                          AS source_uri
FROM prepped,
  LATERAL variant_explode(prepped.result:document.contents) AS chunk;` },
    ],
    io: [
      { title: 'Input · parsed_docs (excerpt of the VARIANT)', cols: ['element', 'page', 'content'], rows: [['section_header', '12', '4. Claims Submission'], ['text', '12', '4.2 Provider shall submit claims within ninety (90) days…'], ['table', '13', '&lt;table&gt;&lt;tr&gt;&lt;th&gt;Claim type&lt;/th&gt;…']] },
      { title: 'Output · main.provider_ops.chunks', cols: ['chunk_id', 'page', 'chunk_to_retrieve', 'chunk_to_embed (start)'], rows: [
        ['acme_…_17', '12', '4.2 Provider shall submit claims within ninety (90) days of the date of service…', 'Document Title: Acme Provider Agreement · Section Header: 4. Claims Submission · Page Number: 12 …'],
        ['acme_…_18', '13', 'Out-of-network claims are subject to the limits in Exhibit B…', 'Document Title: Acme Provider Agreement · Section Header: 4. Claims …'],
        ['claims_…_04', '7', 'Timely filing: 90 calendar days from DOS unless contract states otherwise.', 'Document Title: Claims Policy 2026 · Page Number: 7 …'],
      ] },
    ],
    why: 'Retrieval quality is decided here. Clean structure (tables intact, headers attached, page numbers kept) is what makes the right clause findable and citable later.',
    pitfalls: [
      'Digitally signed PDFs may parse inaccurately. Spot-check a few, and keep the originals in the Volume.',
      'Re-parsing everything on every run is slow and costs money. Parse only new rows (incremental pipeline or <code>MERGE</code>).',
      'Treating headers/footers as content (“Confidential – Page 7 of 42” in every chunk). <code>ai_prep_search</code> separates them into labelled fields.',
      'Forgetting Change Data Feed on <code>chunks</code>. A Delta Sync index needs it.',
    ],
    objects: ['pdfPage', 'aiParse', 'layout', 'chunk', 'aiPrep'],
  },
  // ───────────────────────── 4 · EMBED
  {
    lead: 'Search engines match words; we want to match <b>meaning</b>. An embedding model turns each chunk into a list of 1,024 numbers (a vector). Texts that mean similar things get similar numbers.',
    happens: [
      'Each <code>chunk_to_embed</code> string is sent to the Foundation Model API endpoint <code>databricks-gte-large-en</code>.',
      'The model (a transformer) reads up to 8,192 tokens and outputs a vector of 1,024 floating-point numbers, e.g. <code>[0.0123, -0.0831, 0.0412, …]</code>.',
      'You usually don’t call it yourself. When the index in step 05 is created with <code>embedding_source_column="chunk_to_embed"</code> and <code>embedding_model_endpoint_name="databricks-gte-large-en"</code>, AI Search calls the model for every new or changed row and stores the vectors.',
      'At question time the <b>same</b> model embeds the question, so questions and chunks live in the same “meaning space”.',
    ],
    concepts: [
      { t: 'Vector / embedding', d: 'A point in a 1,024-dimensional space. You can’t picture 1,024 dimensions, so the 3D cloud in step 05 is a projection, but distance works the same way: close = similar meaning. “Submit claims within 90 days” lands near “timely-filing limit”, even though they share no words.' },
      { t: 'Foundation Model APIs', d: 'Databricks-hosted models you call by endpoint name, pay-per-token, with no servers to manage. Through Unity Gateway the same model is also addressable as a model service: <code>system.ai.gte-large-en</code>.' },
      { t: 'Managed vs self-managed embeddings', d: '<b>Managed</b> (used here): you give the index a text column and a model; it embeds for you. <b>Self-managed</b>: you compute vectors yourself and store them in an <code>ARRAY&lt;FLOAT&gt;</code> column. Use that only if you need a custom model.' },
    ],
    code: [
      { label: 'Python · what the index does for you (one call)', lang: 'py', src: `from databricks_openai import DatabricksOpenAI
client = DatabricksOpenAI()

resp = client.embeddings.create(
    model="system.ai.gte-large-en",       # model service behind databricks-gte-large-en
    input=["Document Title: Acme Provider Agreement\\nSection Header: 4. Claims\\n"
           "Content: 4.2 Provider shall submit claims within ninety (90) days…"])
vec = resp.data[0].embedding
print(len(vec), vec[:4])   # 1024 [0.0123, -0.0831, 0.0412, 0.0067]` },
      { label: 'SQL · same thing with an AI Function', lang: 'sql', src: `SELECT chunk_id,
       ai_query('databricks-gte-large-en', chunk_to_embed) AS embedding
FROM ${C}.chunks
LIMIT 3;` },
    ],
    io: [
      { title: 'Input', cols: ['chunk_id', 'chunk_to_embed'], rows: [['acme_…_17', 'Document Title: Acme Provider Agreement … Content: 4.2 Provider shall submit claims within ninety (90) days…']] },
      { title: 'Output', cols: ['chunk_id', 'embedding (1,024 floats)'], rows: [['acme_…_17', '[0.0123, -0.0831, 0.0412, 0.0067, … ]']] },
    ],
    why: 'Embeddings let the system find the right clause when the analyst’s words differ from the contract’s words. That is the main reason RAG beats keyword search on legal text.',
    pitfalls: [
      'Using one model for documents and another for questions. Vectors from different models are not comparable.',
      'Changing the embedding model later means re-embedding everything (a full index re-sync). Choose deliberately. Newer Databricks examples also use <code>databricks-qwen3-embedding-0-6b</code>.',
      'Embedding the bare passage without context. The enriched <code>chunk_to_embed</code> retrieves noticeably better.',
    ],
    objects: ['chunk', 'embedModel', 'vector'],
  },
];
