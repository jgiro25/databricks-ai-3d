// "Read the full explanation" drawers for use case 02 · Inside RAG.
// Values marked "illustrative" are made up for teaching; schemas and API names are real.
const S = 'main.provider_ops';
const ILL = 'Illustrative values, not real output.';

export const DEEP_RX = [
  // ───────────────────────── 0 · QUESTIONS
  {
    lead: 'Use case 01 followed a question from the user to the answer. This deep dive stays on the developer side and follows <b>one PDF</b> through every place it is stored, until a question can find the right passage by meaning. Each step answers one of five concrete questions.',
    happens: [
      '<b>Is the PDF’s text saved in the Delta table?</b> Not at first. The first table (bronze) stores the file’s <b>bytes</b> in a BINARY column. The text appears in a second table (silver), only after a parser reads those bytes.',
      '<b>How are chunks created and vectorized?</b> Code cuts the silver text into overlapping passages of a few hundred tokens. An embedding model turns each passage into 1,024 numbers (a vector).',
      '<b>How is the question vectorized?</b> With the <b>same</b> embedding model, at query time, so the question and the chunks live in the same “meaning space”.',
      '<b>Where does the search look for the right chunk?</b> In the <b>AI Search index</b> (formerly Vector Search), a separate structure synced from the chunks table. It does not scan the Delta table.',
      '<b>Where is everything stored?</b> Volume (file) → bronze (bytes) → silver (text) → chunks (passages) → index (vectors). Models compute but store nothing. Unity Catalog governs all of it.',
    ],
    concepts: [
      { t: 'Build path vs query path', d: 'The <b>build path</b> (steps 01–06) runs offline whenever a PDF is added or changed. The <b>query path</b> (steps 07–08) runs for every question, in about a second.' },
      { t: 'Medallion layers', d: 'A naming habit: <b>bronze</b> = raw as ingested, <b>silver</b> = cleaned and structured, <b>gold</b> = ready for a use case (here: the chunks table).' },
      { t: 'Running example', d: 'The same as use case 01: <code>acme_provider_agreement.pdf</code> in <code>' + S + '</code>, and the question “What’s the timely-filing limit for out-of-network claims?”' },
    ],
    compare: { title: 'What exists after each step', cols: ['Step', 'New thing', 'Contains text?', 'Contains vectors?'], rows: [
      ['01 Volume', 'PDF file', 'inside the file, compressed', 'no'],
      ['02 Bronze', 'bronze_docs row', 'no (bytes only)', 'no'],
      ['03 Parse', 'silver_doc_elements rows', '<b>yes</b>', 'no'],
      ['04 Chunk', 'chunks rows', 'yes, in passages', 'no (unless self-managed)'],
      ['05–06 Embed + index', 'chunks_index', 'synced copy', '<b>yes</b>'],
    ] },
    why: 'Most RAG bugs come from not knowing which copy of the data you are looking at: fixing text in silver doesn’t change an index that hasn’t synced, and a scanned PDF produces empty chunks if nobody checked the parser output.',
    pitfalls: [
      'Assuming the LLM “reads the PDF”. It only ever sees the few chunks your code pastes into the prompt.',
      'Assuming the chatbot queries the Delta table. It queries the index, which may be behind the table until it syncs.',
    ],
    objects: ['developer', 'q_text', 'q_chunk', 'q_query', 'q_where', 'q_store', 'dataPath'],
  },
  // ───────────────────────── 1 · VOLUME
  {
    lead: 'Before anything is a table, the PDF is a <b>file</b>. It is uploaded to a Unity Catalog <b>Volume</b>, a governed folder in your cloud object storage.',
    happens: [
      '<b>Create the volume.</b> <code>CREATE VOLUME ' + S + '.raw_docs</code>. A managed volume stores files under the schema’s storage location; an external volume points at an existing bucket path.',
      '<b>Upload.</b> Through Catalog Explorer, the Databricks CLI, the Files REST API, or a job that copies files from SharePoint or S3.',
      '<b>Stored as-is.</b> The file is kept byte for byte. Nothing is parsed or indexed yet.',
      '<b>Governed.</b> Reading needs <code>READ VOLUME</code>, writing needs <code>WRITE VOLUME</code>, plus <code>USE CATALOG</code> / <code>USE SCHEMA</code>.',
    ],
    concepts: [
      { t: 'Volume', d: 'A Unity Catalog object for non-tabular files. Path format: <code>/Volumes/&lt;catalog&gt;/&lt;schema&gt;/&lt;volume&gt;/&lt;file&gt;</code>.' },
      { t: 'Object storage', d: 'S3, ADLS or GCS. Cheap, durable storage for files. Tables in Databricks are also files in object storage (Parquet + a log).' },
      { t: 'Why a PDF is not text', d: 'A PDF is a binary container of compressed drawing instructions and fonts. The visible words are not stored as a simple string, and scanned pages contain only images.' },
    ],
    code: [
      { label: 'Create + grant', lang: 'sql', src: `CREATE VOLUME IF NOT EXISTS ${S}.raw_docs;\nGRANT READ VOLUME ON VOLUME ${S}.raw_docs TO \`rag-pipeline\`;` },
      { label: 'Upload (CLI)', lang: 'sh', src: 'databricks fs cp ./acme_provider_agreement.pdf \\\n  dbfs:/Volumes/main/provider_ops/raw_docs/\n\ndatabricks fs ls dbfs:/Volumes/main/provider_ops/raw_docs/' },
      { label: 'List (Python)', lang: 'py', src: 'for f in dbutils.fs.ls("/Volumes/main/provider_ops/raw_docs/"):\n    print(f.name, f.size)' },
    ],
    io: [{ title: 'Volume listing', cols: ['name', 'size (bytes)'], rows: [['acme_provider_agreement.pdf', '2,481,337'], ['claims_policy_2026.pdf', '1,204,880'], ['fee_schedule_amend_3.pdf', '318,442']], note: ILL }],
    why: 'The volume is the source of truth. Every downstream table and the index can be rebuilt from these files, and Unity Catalog lineage starts here.',
    pitfalls: [
      'Uploading to a personal workspace folder instead of a volume. You lose governance and jobs can’t read it reliably.',
      'Replacing a file with the same name but forgetting that downstream tables and the index must be refreshed.',
    ],
    objects: ['ucPath', 'objectStore', 'volume', 'pdfFile', 'volumeLs'],
  },
  // ───────────────────────── 2 · BRONZE
  {
    lead: 'The first Delta table, <b>bronze</b>, stores the PDF as <b>one row of bytes</b>. This answers the first question directly: at this stage the text is <b>not</b> in the table in any readable form.',
    happens: [
      '<b>Read as binary.</b> Spark’s <code>binaryFile</code> source reads each file in the volume as one row, without understanding the format.',
      '<b>Four columns.</b> <code>path</code>, <code>modificationTime</code>, <code>length</code> and <code>content</code> (BINARY, the entire file).',
      '<b>Write to Delta.</b> The rows are saved as <code>' + S + '.bronze_docs</code>: Parquet files plus a <code>_delta_log</code>.',
      '<b>Incremental.</b> In production, Auto Loader (<code>cloudFiles</code>) picks up only new files, so re-runs don’t re-read everything.',
    ],
    concepts: [
      { t: 'BINARY column', d: 'A column of raw bytes. SQL can store, copy and pass it to functions, but can’t search words inside it.' },
      { t: 'Delta table', d: 'Parquet data files + a transaction log. Gives ACID writes, versions (time travel) and Change Data Feed.' },
      { t: 'Auto Loader', d: '<code>spark.readStream.format("cloudFiles")</code> with <code>cloudFiles.format = "binaryFile"</code>. Tracks which files it already ingested.' },
    ],
    code: [
      { label: 'binaryFile (batch)', lang: 'py', src: `df = (spark.read.format("binaryFile")\n      .option("pathGlobFilter", "*.pdf")\n      .load("/Volumes/main/provider_ops/raw_docs/"))\n\ndf.printSchema()\n# path: string, modificationTime: timestamp,\n# length: long, content: binary\n\ndf.write.mode("overwrite").saveAsTable("${S}.bronze_docs")` },
      { label: 'SQL (read_files)', lang: 'sql', src: `CREATE OR REPLACE TABLE ${S}.bronze_docs AS\nSELECT path, modificationTime, length, content\nFROM read_files(\n  '/Volumes/main/provider_ops/raw_docs/',\n  format => 'binaryFile');` },
      { label: 'Auto Loader', lang: 'py', src: `(spark.readStream.format("cloudFiles")\n   .option("cloudFiles.format", "binaryFile")\n   .option("pathGlobFilter", "*.pdf")\n   .load("/Volumes/main/provider_ops/raw_docs/")\n   .writeStream\n   .option("checkpointLocation", "/Volumes/main/provider_ops/chk/bronze")\n   .trigger(availableNow=True)\n   .toTable("${S}.bronze_docs"))` },
      { label: 'Proof: no text', lang: 'sql', src: `-- searching the bytes for words finds nothing\nSELECT count(*) FROM ${S}.bronze_docs\nWHERE CAST(content AS STRING) LIKE '%timely filing%';\n-- 0` },
    ],
    io: [{ title: S + '.bronze_docs', cols: ['path', 'modificationTime', 'length', 'content (BINARY)'], rows: [
      ['…/raw_docs/acme_provider_agreement.pdf', '2026-10-28 14:02', '2481337', '<code>25 50 44 46 2D 31 2E 37 0A 25 E2 E3 …</code>'],
      ['…/raw_docs/claims_policy_2026.pdf', '2026-10-28 14:02', '1204880', '<code>25 50 44 46 2D 31 2E 36 0A …</code>'],
    ], note: '<code>25 50 44 46</code> is “%PDF”, the header every PDF starts with. The rest is compressed. ' + ILL }],
    why: 'Keeping an exact binary copy in Delta means parsing can be re-run with a better parser later without going back to the source systems, and you have a versioned record of which file version was ingested.',
    pitfalls: [
      'Expecting <code>content</code> to be searchable text. It isn’t: casting it to STRING gives garbage.',
      'Very large files: bronze rows can be tens of MB. Filter with <code>pathGlobFilter</code> and keep only files you need.',
      'Dropping <code>modificationTime</code>. You need it to detect changed files and refresh downstream tables.',
    ],
    objects: ['pdfFile', 'binaryReader', 'bronzeTable', 'deltaFiles', 'contentCell', 'noText'],
  },
  // ───────────────────────── 3 · PARSE
  {
    lead: '<b>Parsing</b> is the step that turns the bytes into words. <code>ai_parse_document</code> reads the BINARY content and returns the document’s text, tables and headings. Written to a <b>silver</b> table, this is the first place the PDF’s text exists as text in Delta.',
    happens: [
      '<b>Call the parser.</b> <code>ai_parse_document(content)</code> runs layout-aware AI models over every page.',
      '<b>OCR included.</b> Scanned or image-only pages are read visually, so they also produce text.',
      '<b>Structured output.</b> It returns a VARIANT: <code>document.pages[]</code> and <code>document.elements[]</code>. Each element has a <code>type</code> (title, section_header, text, table, figure, page_header, page_footer…), <code>content</code> and a <code>bbox</code> with its page.',
      '<b>Flatten to rows.</b> <code>variant_explode</code> turns the element list into one row per element in <code>' + S + '.silver_doc_elements</code>.',
      '<b>Clean.</b> Drop page headers, footers and page numbers; keep section headers to help chunking.',
    ],
    concepts: [
      { t: 'ai_parse_document', d: 'A Databricks AI Function. Input: BINARY. Output: VARIANT. Needs DBR 17.3+ or serverless SQL; up to 500 pages and 100 MB per document.' },
      { t: 'VARIANT', d: 'A column type for semi-structured JSON-like data. Query fields with <code>parsed:document:elements</code>.' },
      { t: 'Tables in PDFs', d: 'Table elements come back as HTML, so rows and columns survive. Plain text extraction would scramble them.' },
    ],
    compare: { title: 'Parser options', cols: ['', 'ai_parse_document', 'pypdf / pdfminer', 'unstructured / Docling'], rows: [['Scanned pages (OCR)', 'yes', 'no', 'with extra setup'], ['Tables', 'HTML', 'flattened text', 'yes'], ['Runs as', 'SQL function', 'Python UDF', 'Python UDF / library'], ['Element types', 'yes', 'no', 'yes']] },
    code: [
      { label: 'Parse (SQL)', lang: 'sql', src: `CREATE OR REPLACE TABLE ${S}.silver_parsed AS\nSELECT path,\n       ai_parse_document(content) AS parsed\nFROM ${S}.bronze_docs;` },
      { label: 'Explode to silver', lang: 'sql', src: `CREATE OR REPLACE TABLE ${S}.silver_doc_elements AS\nSELECT\n  regexp_extract(p.path, '([^/]+)\\\\.pdf$', 1)        AS doc_id,\n  e.pos                                             AS element_pos,\n  e.value:bbox[0]:page_id::INT + 1                  AS page,\n  e.value:type::STRING                              AS element_type,\n  e.value:content::STRING                           AS text\nFROM ${S}.silver_parsed p,\n  LATERAL variant_explode(p.parsed:document:elements) AS e\nWHERE e.value:type::STRING NOT IN ('page_header','page_footer','page_number');` },
      { label: 'Check errors', lang: 'sql', src: `SELECT path, parsed:error_status\nFROM ${S}.silver_parsed\nWHERE parsed:error_status IS NOT NULL;` },
    ],
    io: [
      { title: 'parser output (VARIANT, shortened)', cols: ['field', 'value'], rows: [['document.elements[7].type', '"section_header"'], ['document.elements[7].content', '"4. Timely filing"'], ['document.elements[8].type', '"text"'], ['document.elements[8].content', '"Out-of-network claims must be submitted within ninety (90) days…"'], ['document.elements[8].bbox[0].page_id', '11']], note: ILL },
      { title: S + '.silver_doc_elements', cols: ['doc_id', 'element_pos', 'page', 'element_type', 'text'], rows: [
        ['acme_provider_agreement', '7', '12', 'section_header', '4. Timely filing'],
        ['acme_provider_agreement', '8', '12', 'text', 'Out-of-network claims must be submitted within ninety (90) days of the date of service…'],
        ['acme_provider_agreement', '9', '12', 'table', '&lt;table&gt;&lt;tr&gt;&lt;th&gt;Claim type&lt;/th&gt;…'],
      ], note: ILL },
    ],
    why: 'Retrieval quality is capped by parsing quality. If the parser misses a scanned page or garbles a table, no embedding model can find what isn’t there.',
    pitfalls: [
      'Not checking <code>error_status</code>: password-protected or corrupt PDFs silently produce no elements.',
      'Keeping headers and footers: “Confidential · Page 12 of 48” repeated in every chunk pollutes search.',
      'Re-parsing everything on every run. Parse only new or changed bronze rows; parsing is the most expensive step.',
    ],
    objects: ['pdfFile', 'parser', 'elements', 'ocr', 'silverTable', 'variantOut'],
  },
  // ───────────────────────── 4 · CHUNK
  {
    lead: 'A 48-page contract is too long to be one search result. <b>Chunking</b> cuts the silver text into passages of a few hundred tokens, with a small <b>overlap</b>, so each passage is precise enough to be a good answer and small enough to paste into a prompt.',
    happens: [
      '<b>Join per section.</b> Concatenate silver elements in reading order, ideally per section_header, so chunks don’t straddle unrelated sections.',
      '<b>Split.</b> A recursive splitter tries <code>"\\n\\n"</code> (paragraphs) first, then lines, then sentences, then words, until each piece is ≤ <code>chunk_size</code> tokens.',
      '<b>Overlap.</b> Each chunk repeats the last <code>chunk_overlap</code> tokens of the previous one, so a sentence on a boundary is complete somewhere.',
      '<b>Keep metadata.</b> Each chunk gets a stable <code>chunk_id</code>, its <code>doc_id</code> and <code>page</code> for citations and filters.',
      '<b>Save + enable CDF.</b> Write <code>' + S + '.chunks</code> and turn on Change Data Feed so the index can sync incrementally.',
    ],
    concepts: [
      { t: 'Token', d: 'A word piece the model reads. ≈ ¾ of an English word. Sizes are counted in tokens because models have token limits.' },
      { t: 'chunk_size / chunk_overlap', d: 'Typical: 300–800 tokens with 10–15% overlap. Illustrative here: 512 / 64.' },
      { t: 'Section-aware chunking', d: 'Starting a new chunk at each heading and prefixing the heading to the text (“4. Timely filing — …”) gives chunks that make sense on their own.' },
      { t: 'ai_prep_search (Beta)', d: 'A Databricks function that does parse output → chunks in SQL, returning <code>chunk_to_embed</code> (with context) and <code>chunk_to_retrieve</code>. Beta, DBR 18.2+.' },
    ],
    compare: { title: 'Chunk size trade-off', cols: ['', 'Small (≈128)', 'Medium (≈512)', 'Large (≈2,000)'], rows: [['Precision', 'high', 'good', 'low (mixed topics)'], ['Context per chunk', 'too little', 'good', 'a lot'], ['Prompt cost for k=3', 'tiny', 'moderate', 'high']] },
    code: [
      { label: 'Chunk (Python)', lang: 'py', src: `import tiktoken\nfrom langchain_text_splitters import RecursiveCharacterTextSplitter\n\nenc = tiktoken.get_encoding("cl100k_base")\nsplitter = RecursiveCharacterTextSplitter.from_tiktoken_encoder(\n    encoding_name="cl100k_base", chunk_size=512, chunk_overlap=64,\n    separators=["\\n\\n", "\\n", ". ", " "])\n\nels = spark.table("${S}.silver_doc_elements").toPandas()\nrows = []\nfor (doc, page), g in els.groupby(["doc_id", "page"]):\n    text = "\\n\\n".join(g.sort_values("element_pos").text)\n    doc_type = "policy" if doc.startswith("claims_policy") else "contract"\n    for i, c in enumerate(splitter.split_text(text)):\n        chunk_id = f"{doc}-p{page:03d}-{i:02d}"      # stable id\n        rows.append((chunk_id, doc, doc_type, int(page), c, len(enc.encode(c))))\n\n(spark.createDataFrame(rows,\n    "chunk_id string, doc_id string, doc_type string, page int, chunk_text string, n_tokens int")\n  .write.mode("overwrite").saveAsTable("${S}.chunks"))` },
      { label: 'ai_prep_search (Beta)', lang: 'sql', src: `-- Beta · DBR 18.2+\nCREATE OR REPLACE TABLE ${S}.chunks AS\nSELECT\n  c.value:chunk_id::STRING          AS chunk_id,\n  p.path                            AS doc_id,\n  c.value:chunk_to_embed::STRING    AS chunk_text,\n  c.value:chunk_to_retrieve::STRING AS display_text\nFROM ${S}.silver_parsed p,\n  LATERAL variant_explode(ai_prep_search(p.parsed):document:contents) AS c;` },
      { label: 'Enable CDF', lang: 'sql', src: `ALTER TABLE ${S}.chunks\nSET TBLPROPERTIES (delta.enableChangeDataFeed = true);` },
    ],
    io: [{ title: S + '.chunks', cols: ['chunk_id', 'doc_id', 'page', 'chunk_text', 'n_tokens'], rows: [
      ['acme_pa-0041', 'acme_provider_agreement', '12', '4. Timely filing. Out-of-network claims must be submitted within ninety (90) days of the date of service. <b>Claims received after this period will be denied</b>…', '498'],
      ['acme_pa-0042', 'acme_provider_agreement', '12', '<b>Claims received after this period will be denied</b> unless the provider shows good cause, such as…', '505'],
      ['acme_pa-0043', 'acme_provider_agreement', '13', '…corrected claims must be resubmitted within 60 days of the original denial…', '471'],
    ], note: 'Bold = the overlap repeated across two chunks. Chunk ids and counts are illustrative; the code builds longer, stable ids such as acme_provider_agreement-p012-00.' }],
    why: 'The chunk is the unit of everything downstream: one chunk = one vector = one search hit = one block of prompt text. Bad cuts give answers that are half-right.',
    pitfalls: [
      'No overlap: the key sentence gets split and neither half matches the question well.',
      'Unstable chunk_ids (e.g. random UUIDs on each run): every re-run looks like delete-all + insert-all, so the index re-embeds everything.',
      'Forgetting CDF: <code>create_delta_sync_index</code> fails on a table without Change Data Feed.',
    ],
    objects: ['sourceText', 'splitter', 'chunkCards', 'overlap', 'tokenRuler', 'chunksTable', 'cdf'],
  },
  // ───────────────────────── 5 · EMBED
  {
    lead: 'An <b>embedding model</b> turns each chunk’s text into a fixed list of numbers (a <b>vector</b>) that captures its meaning. Chunks that mean similar things get vectors that are close together, even with different words.',
    happens: [
      '<b>Input.</b> The chunk text (optionally prefixed with the document title and section).',
      '<b>Model call.</b> A request to a model serving endpoint, here <code>databricks-gte-large-en</code>.',
      '<b>Output.</b> 1,024 floating-point numbers, e.g. <code>[0.0123, -0.0831, 0.0452, … 1,021 more]</code> (illustrative).',
      '<b>Meaning as distance.</b> “90 days to file out-of-network claims” and “timely-filing limit” land near each other; “credentialing requirements” lands far away.',
      '<b>Where vectors are stored</b> depends on who computes them: managed (inside the index) or self-managed (a column in your Delta table, then copied to the index).',
    ],
    concepts: [
      { t: 'Embedding', d: 'A learned mapping from text to a point in a high-dimensional space. It does not store the words; you can’t read the text back from the vector.' },
      { t: 'Dimension', d: 'The length of the vector. gte-large-en: 1,024. All vectors in one index must have the same dimension and come from the same model.' },
      { t: 'Similarity', d: 'How close two vectors are. AI Search uses L2 distance under the hood; for normalized vectors this gives the same ranking as cosine similarity.' },
    ],
    compare: { title: 'Managed vs self-managed embeddings', cols: ['', 'Managed', 'Self-managed'], rows: [
      ['Who calls the model', 'AI Search, during sync and at query time', 'your code (ai_query, a job, a UDF)'],
      ['Chunks table has', 'text only', 'text + <code>embedding ARRAY&lt;FLOAT&gt;</code>'],
      ['Vectors stored in', '<b>the index</b> (+ optional writeback table)', '<b>your Delta table and the index</b>'],
      ['Index parameters', '<code>embedding_source_column</code>, <code>embedding_model_endpoint_name</code>', '<code>embedding_vector_column</code>, <code>embedding_dimension</code>'],
      ['Query with', '<code>query_text</code>', '<code>query_vector</code> (you embed the question)'],
    ] },
    code: [
      { label: 'One embedding (SQL)', lang: 'sql', src: `SELECT ai_query('databricks-gte-large-en',\n  'Out-of-network claims must be submitted within ninety (90) days…') AS v;\n-- [0.0123, -0.0831, 0.0452, …]  (ARRAY<FLOAT>, 1024 values)` },
      { label: 'Self-managed column', lang: 'sql', src: `CREATE OR REPLACE TABLE ${S}.chunks_vec\nTBLPROPERTIES (delta.enableChangeDataFeed = true) AS\nSELECT *, ai_query('databricks-gte-large-en', chunk_text) AS embedding\nFROM ${S}.chunks;` },
      { label: 'Python (SDK)', lang: 'py', src: `from mlflow.deployments import get_deploy_client\nclient = get_deploy_client("databricks")\nr = client.predict(endpoint="databricks-gte-large-en",\n                   inputs={"input": ["Out-of-network claims must be submitted within 90 days…"]})\nvec = r["data"][0]["embedding"]\nprint(len(vec))   # 1024` },
    ],
    io: [{ title: 'chunk → vector', cols: ['chunk_id', 'chunk_text', 'embedding (first 4 of 1,024)'], rows: [['acme_pa-0041', '4. Timely filing. Out-of-network claims must be submitted within ninety (90) days…', '[0.0123, -0.0831, 0.0452, 0.0017, …]'], ['acme_pa-0042', 'Claims received after this period will be denied unless…', '[0.0098, -0.0790, 0.0511, -0.0042, …]']], note: ILL + ' Neighbouring chunks have similar numbers because they mean similar things.' }],
    why: 'Embeddings are what let the search find “90 days” when the user typed “timely-filing limit”. Keyword search alone would miss many such matches.',
    pitfalls: [
      'Mixing models: chunks embedded with model A and questions with model B give meaningless distances.',
      'Changing the embedding model means re-embedding every chunk (a full index rebuild).',
      'Embedding very long chunks: meaning gets averaged out and matches get fuzzy.',
    ],
    objects: ['chunkIn', 'embedModel', 'vectorStrip', 'meaningSpace', 'managedOpt', 'selfOpt'],
  },
  // ───────────────────────── 6 · INDEX
  {
    lead: 'The vectors go into a <b>Databricks AI Search index</b> (formerly Vector Search): a separate, search-optimized copy of the chunks that lives on an AI Search endpoint. It is <b>synced</b> from the chunks Delta table, but it is not the Delta table.',
    happens: [
      '<b>Create an endpoint.</b> The compute that hosts indexes: <code>STANDARD</code> or <code>STORAGE_OPTIMIZED</code>.',
      '<b>Create a Delta Sync index.</b> Point it at <code>' + S + '.chunks</code>, name the primary key, the text column and the embedding model.',
      '<b>Initial sync.</b> AI Search reads every row, calls the embedding model (managed mode), and builds an ANN graph (HNSW) of all vectors.',
      '<b>Incremental sync.</b> Afterwards it reads the table’s Change Data Feed: inserts are embedded and added, updates re-embedded, deletes removed.',
      '<b>Copied columns.</b> The index stores the vectors, the primary key and every column in <code>columns_to_sync</code> (e.g. chunk_text, doc_id, page), so it can return them without reading Delta.',
    ],
    concepts: [
      { t: 'ANN / HNSW', d: 'Approximate Nearest Neighbour search over a Hierarchical Navigable Small World graph: layers of linked vectors that let a search find close neighbours by checking only a small fraction of all vectors.' },
      { t: 'Delta Sync index', d: 'An index that follows a Delta table automatically. The alternative, a Direct Vector Access index, is written to with your own upsert/delete API calls.' },
      { t: 'pipeline_type', d: '<code>TRIGGERED</code>: updates when you call <code>sync()</code>. <code>CONTINUOUS</code>: streams changes within seconds (costs more). Storage-optimized endpoints support triggered only.' },
      { t: 'Unity Catalog object', d: 'The index has a three-part name (<code>' + S + '.chunks_index</code>) and needs <code>SELECT</code> to query, like a table.' },
    ],
    compare: { title: 'Delta table vs AI Search index', cols: ['', 'chunks (Delta)', 'chunks_index (AI Search)'], rows: [['Built for', 'storage, SQL, updates', 'nearest-neighbour search'], ['Holds', 'rows of text', 'vectors + synced columns'], ['Lives in', 'your cloud storage', 'the AI Search endpoint'], ['Read at query time?', '<b>no</b>', '<b>yes</b>'], ['Updated by', 'your pipeline', 'Delta Sync from the table']] },
    code: [
      { label: 'Endpoint', lang: 'py', src: `%pip install databricks-ai-search   # formerly databricks-vectorsearch\nfrom databricks.ai_search.client import AISearchClient\n\nclient = AISearchClient()\nclient.create_endpoint(name="provider-ops-search", endpoint_type="STANDARD")` },
      { label: 'Delta Sync index', lang: 'py', src: `index = client.create_delta_sync_index(\n    endpoint_name="provider-ops-search",\n    source_table_name="${S}.chunks",\n    index_name="${S}.chunks_index",\n    pipeline_type="TRIGGERED",\n    primary_key="chunk_id",\n    embedding_source_column="chunk_text",              # managed embeddings\n    embedding_model_endpoint_name="databricks-gte-large-en",\n    columns_to_sync=["chunk_id", "chunk_text", "doc_id", "page", "doc_type"],\n)` },
      { label: 'Sync + status', lang: 'py', src: `index = client.get_index(index_name="${S}.chunks_index")\nindex.sync()                      # TRIGGERED: pull new CDF changes now\nprint(index.describe()["status"]) # e.g. ONLINE, indexed_row_count` },
      { label: 'Self-managed variant', lang: 'py', src: `client.create_delta_sync_index(\n    endpoint_name="provider-ops-search",\n    source_table_name="${S}.chunks_vec",\n    index_name="${S}.chunks_vec_index",\n    pipeline_type="TRIGGERED",\n    primary_key="chunk_id",\n    embedding_vector_column="embedding",\n    embedding_dimension=1024,\n)` },
    ],
    io: [{ title: 'What the index holds per chunk', cols: ['chunk_id (pk)', 'vector', 'chunk_text', 'doc_id', 'page'], rows: [['acme_pa-0041', '[0.0123, -0.0831, … ×1024]', '4. Timely filing. Out-of-network claims…', 'acme_provider_agreement', '12'], ['acme_pa-0042', '[0.0098, -0.0790, … ×1024]', 'Claims received after this period…', 'acme_provider_agreement', '12']], note: ILL }],
    why: 'Searching millions of 1,024-number vectors by brute force on every question would be slow. The index pre-organizes them so a query takes milliseconds, and Delta Sync keeps it consistent with your table without custom code.',
    pitfalls: [
      'Forgetting to call <code>sync()</code> on a TRIGGERED index after the pipeline runs: the chatbot keeps answering from old chunks.',
      'Leaving a column out of <code>columns_to_sync</code>, then trying to filter or return it.',
      'Assuming “I updated the Delta table” means “the answer changed”. Check the index status and last sync time.',
    ],
    objects: ['chunksSrc', 'cdfPipe', 'syncEmbed', 'endpoint', 'hnsw', 'syncMode', 'writeback'],
  },
  // ───────────────────────── 7 · QUERY
  {
    lead: 'At question time the same idea runs in reverse: the question is turned into a vector with the <b>same model</b>, and the <b>index</b> returns the chunks whose vectors are closest. This is where “the right chunk” is found, and it is not in the Delta table.',
    happens: [
      '<b>Question in.</b> “What’s the timely-filing limit for out-of-network claims?”',
      '<b>Embed.</b> AI Search sends <code>query_text</code> to <code>databricks-gte-large-en</code> (managed mode) and gets a 1,024-number query vector.',
      '<b>Walk the graph.</b> The HNSW search enters the top layer, moves towards the query vector, drops layer by layer, and collects the nearest chunk vectors at the bottom.',
      '<b>Hybrid (optional).</b> <code>query_type="HYBRID"</code> also runs a keyword search and merges both rankings with Reciprocal Rank Fusion. Helps with exact terms like codes or names.',
      '<b>Filter + top-k.</b> Filters restrict candidates (e.g. only contracts); <code>num_results</code> sets k. The index returns the synced columns plus a score.',
    ],
    concepts: [
      { t: 'Top-k', d: 'How many nearest chunks to return. Typical 3–10. More = more context and cost; fewer = risk of missing the answer.' },
      { t: 'Score', d: 'Higher = closer meaning. Use it to rank and to drop weak matches, not as an absolute probability.' },
      { t: 'Query types', d: '<code>ANN</code> (default, vectors only), <code>HYBRID</code> (vectors + keywords), <code>FULL_TEXT</code> (keywords only, Beta).' },
      { t: 'Reranker (optional)', d: 'A second model re-scores the top results by reading question and chunk together. More accurate, a little slower.' },
    ],
    code: [
      { label: 'similarity_search', lang: 'py', src: `index = client.get_index(index_name="${S}.chunks_index")\n\nres = index.similarity_search(\n    query_text="What's the timely-filing limit for out-of-network claims?",\n    columns=["chunk_id", "chunk_text", "doc_id", "page"],\n    num_results=3,\n    query_type="HYBRID",                # or "ANN"\n    filters={"doc_type": "contract"},   # standard endpoint: dict filter\n)` },
      { label: 'Result (JSON)', lang: 'py', src: `# illustrative output\n{"manifest": {"columns": [{"name": "chunk_id"}, {"name": "chunk_text"},\n                          {"name": "doc_id"}, {"name": "page"}, {"name": "score"}]},\n "result": {"row_count": 3, "data_array": [\n   ["acme_pa-0041", "4. Timely filing. Out-of-network claims must be submitted within ninety (90) days…", "acme_provider_agreement", 12, 0.89],\n   ["claims_policy-0107", "Timely filing: unless a contract says otherwise, claims are due within 90 days…", "claims_policy_2026", 7, 0.81],\n   ["acme_pa-0043", "…corrected claims must be resubmitted within 60 days of the original denial…", "acme_provider_agreement", 13, 0.62]]}}` },
      { label: 'Self-managed query', lang: 'py', src: `from mlflow.deployments import get_deploy_client\nqv = get_deploy_client("databricks").predict(endpoint="databricks-gte-large-en",\n        inputs={"input": [question]})["data"][0]["embedding"]\nres = vec_index.similarity_search(query_vector=qv,\n        columns=["chunk_id", "chunk_text"], num_results=3)` },
      { label: 'SQL', lang: 'sql', src: `SELECT *\nFROM vector_search(\n  index => '${S}.chunks_index',\n  query_text => 'What''s the timely-filing limit for out-of-network claims?',\n  num_results => 3);` },
    ],
    io: [{ title: 'Top-3 candidates', cols: ['rank', 'chunk_id', 'page', 'score', 'why it matched'], rows: [['1', 'acme_pa-0041', '12', '0.89', 'same topic, states the 90-day rule'], ['2', 'claims_policy-0107', '7', '0.81', 'general policy, also 90 days'], ['3', 'acme_pa-0043', '13', '0.62', 'related (resubmission), weaker']], note: 'Scores are illustrative. Note the question never says “ninety” or “90”; the match is by meaning.' }],
    why: 'This step answers “where does the model look for the right chunk?”: the embedding model only makes the query vector, the AI Search index does the looking, and the LLM is not involved yet.',
    pitfalls: [
      'Querying with a different embedding model than the index uses (self-managed mode).',
      'Filtering on a column that isn’t in <code>columns_to_sync</code>.',
      'Trusting rank 3 blindly: low-score chunks can mislead the LLM. Consider a score cutoff or a reranker.',
    ],
    objects: ['question', 'sameModel', 'queryVector', 'annWalk', 'topK', 'filters', 'noScan'],
  },
  // ───────────────────────── 8 · PROMPT
  {
    lead: 'The retrieved chunks are <b>pasted as text into the prompt</b>. The LLM then reads that prompt and writes the answer. It never searches the index or the tables itself.',
    happens: [
      '<b>Retrieve.</b> Your retriever code calls <code>similarity_search</code> (step 07) and gets 3 chunks with ids and pages.',
      '<b>Assemble.</b> Build a prompt: instructions (“answer only from the context, cite [n]”), the chunks labelled [1] [2] [3], then the question.',
      '<b>Generate.</b> Send it to a chat endpoint, here <code>databricks-meta-llama-3-3-70b-instruct</code>.',
      '<b>Cite.</b> The answer’s [n] markers map back to chunk_id → doc → page, so the user can verify.',
    ],
    concepts: [
      { t: 'Context window', d: 'The maximum prompt length a model accepts. 3 chunks × ~500 tokens + instructions ≈ 2,000 tokens, far below typical limits.' },
      { t: 'Grounding', d: 'Instructing the model to answer only from the supplied context and to say “I don’t know” otherwise. Reduces made-up answers.' },
      { t: 'Retriever tool', d: 'In agent frameworks the retrieval call is wrapped as a tool, e.g. <code>VectorSearchRetrieverTool</code> in <code>databricks-langchain</code>. The agent decides to call it, but the search still runs in the index.' },
    ],
    code: [
      { label: 'Assemble + call', lang: 'py', src: `from openai import OpenAI   # Databricks endpoints are OpenAI-compatible\n\nrows = res["result"]["data_array"]\ncontext = "\\n\\n".join(f"[{i+1}] ({r[2]}, p.{r[3]}) {r[1]}" for i, r in enumerate(rows))\n\nmessages = [\n  {"role": "system", "content": "Answer only from the CONTEXT. Cite sources as [n]. "\n                                "If the answer is not in the CONTEXT, say you don't know."},\n  {"role": "user", "content": f"CONTEXT:\\n{context}\\n\\nQUESTION: {question}"},\n]\n\nllm = OpenAI(api_key=DATABRICKS_TOKEN, base_url=f"{WORKSPACE_URL}/serving-endpoints")\nout = llm.chat.completions.create(model="databricks-meta-llama-3-3-70b-instruct",\n                                  messages=messages, temperature=0)\nprint(out.choices[0].message.content)` },
    ],
    io: [
      { title: 'The prompt the LLM receives', cols: ['part', 'text'], rows: [['SYSTEM', 'Answer only from the CONTEXT. Cite sources as [n]. If the answer is not in the CONTEXT, say you don’t know.'], ['CONTEXT [1]', '(acme_provider_agreement, p.12) 4. Timely filing. Out-of-network claims must be submitted within ninety (90) days of the date of service…'], ['CONTEXT [2]', '(claims_policy_2026, p.7) Timely filing: unless a contract says otherwise, claims are due within 90 days…'], ['CONTEXT [3]', '(acme_provider_agreement, p.13) …corrected claims must be resubmitted within 60 days…'], ['USER', 'What’s the timely-filing limit for out-of-network claims?']] },
      { title: 'Answer', cols: ['LLM output'], rows: [['Out-of-network claims must be filed within 90 days of the date of service [1][2]. Corrected claims have 60 days from the original denial [3].']], note: ILL },
    ],
    why: 'Separating “find” (index) from “write” (LLM) is what makes RAG controllable: you can inspect exactly which chunks the answer was based on, fix retrieval without touching the model, and govern access at the index.',
    pitfalls: [
      'Pasting too many chunks: cost rises and the relevant sentence gets buried.',
      'No “I don’t know” instruction: the model fills gaps from general knowledge.',
      'Dropping the source/page from the context: you lose citations.',
    ],
    objects: ['retriever', 'promptPanel', 'llm', 'answer'],
  },
  // ───────────────────────── 9 · MAP
  {
    lead: 'The whole path on one map: six places, two flows. The orange <b>build path</b> runs when documents change; the cyan <b>query path</b> runs per question. Unity Catalog governs every object.',
    happens: [
      '<b>Build path:</b> Volume (PDF file) → bronze (bytes) → silver (text) → chunks (passages) → AI Search index (vectors), with Model Serving embedding the chunks during sync.',
      '<b>Query path:</b> question → Model Serving (embed the question) → AI Search index (nearest chunks) → your code builds the prompt → Model Serving (LLM writes the answer).',
      '<b>Not on the query path:</b> the Volume, bronze, silver and the chunks Delta table. They are only read when building or refreshing the index.',
    ],
    concepts: [
      { t: 'Lineage', d: 'Unity Catalog records which tables were built from which, so you can trace an answer’s chunk back to the exact PDF.' },
      { t: 'Freshness', d: 'An answer is only as fresh as the last index sync. Monitor the index’s last sync time alongside your pipeline.' },
    ],
    compare: { title: 'What each store holds', cols: ['#', 'Store', 'UC name', 'Holds', 'Text?', 'Vectors?', 'Read at query time?'], rows: [
      ['1', 'Volume', '<code>' + S + '.raw_docs</code>', 'original PDF files', 'inside the file', 'no', 'no'],
      ['2', 'Bronze table', '<code>' + S + '.bronze_docs</code>', 'path, length, content BINARY', '<b>no</b>', 'no', 'no'],
      ['3', 'Silver table', '<code>' + S + '.silver_doc_elements</code>', 'parsed elements', '<b>yes</b>', 'no', 'no'],
      ['4', 'Chunks table', '<code>' + S + '.chunks</code>', 'passages + metadata', 'yes', 'only if self-managed', 'no'],
      ['5', 'AI Search index', '<code>' + S + '.chunks_index</code>', 'vectors + synced columns', 'synced copy', '<b>yes</b>', '<b>yes</b>'],
      ['6', 'Model Serving', '<code>databricks-gte-large-en</code>, <code>databricks-meta-llama-3-3-70b-instruct</code>', 'models (compute)', 'no', 'no', 'yes (compute only)'],
    ] },
    code: [
      { label: 'Inspect every store', lang: 'sql', src: `LIST '/Volumes/main/provider_ops/raw_docs/';\nDESCRIBE TABLE ${S}.bronze_docs;          -- content: binary\nSELECT element_type, text FROM ${S}.silver_doc_elements LIMIT 5;\nSELECT chunk_id, chunk_text FROM ${S}.chunks LIMIT 5;\nSELECT * FROM vector_search(index => '${S}.chunks_index',\n  query_text => 'timely filing', num_results => 3);` },
      { label: 'Grants', lang: 'sql', src: `GRANT USE CATALOG ON CATALOG main TO \`provider-ops-bot\`;\nGRANT USE SCHEMA  ON SCHEMA  ${S} TO \`provider-ops-bot\`;\nGRANT SELECT      ON TABLE   ${S}.chunks_index TO \`provider-ops-bot\`;` },
    ],
    why: 'Knowing which store holds what turns debugging from guesswork into a checklist: missing text → check silver; wrong passage → check chunks and the index; stale answer → check the last sync.',
    pitfalls: [
      'Granting the chatbot access to bronze/silver “just in case”. It only needs the index and the model endpoints.',
      'Deleting a PDF from the volume and assuming it is gone from answers. The rows must be deleted downstream and the index synced.',
    ],
    objects: ['mapVolume', 'mapBronze', 'mapSilver', 'mapChunks', 'mapIndex', 'mapModels', 'mapUC'],
  },
];
