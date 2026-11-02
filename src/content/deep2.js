// Full step-by-step explanations (drawer content). Steps 5–9.
const C = 'main.provider_ops';
export const DEEP_B = [
  // ───────────────────────── 5 · INDEX
  {
    lead: 'An index is a data structure that finds the nearest vectors without comparing the question against every chunk. Databricks AI Search (formerly Vector Search) builds and serves it, and keeps it in sync with the <code>chunks</code> Delta table.',
    happens: [
      '<b>Create an endpoint.</b> This is the compute that hosts indexes and answers queries. It can be Standard (lowest latency) or Storage-optimized (large corpora, lower cost; triggered sync only).',
      '<b>Create a Delta Sync index</b> on <code>main.provider_ops.chunks</code>, with primary key <code>chunk_id</code>, text column <code>chunk_to_embed</code> and model <code>databricks-gte-large-en</code>. AI Search reads the table, embeds every row (step 04), and stores vectors and columns in its own optimised format.',
      '<b>Sync on change.</b> With <code>pipeline_type="TRIGGERED"</code>, you call <code>index.sync()</code> after each pipeline run (or schedule it). AI Search reads the table’s <b>Change Data Feed</b>, the list of inserted, updated and deleted rows since the last sync, and embeds only those. <code>CONTINUOUS</code> syncs within seconds but keeps compute running.',
      'The index is a Unity Catalog object (<code>main.provider_ops.chunks_index</code>) with its own permissions and lineage back to the PDFs.',
    ],
    concepts: [
      { t: 'Approximate nearest neighbour (ANN)', d: 'Comparing a question with millions of vectors one by one is slow. ANN indexes (e.g. HNSW graphs) organise vectors so only a small neighbourhood is checked. The answer is near-perfect in milliseconds.' },
      { t: 'Delta Sync vs Direct Vector Access', d: '<b>Delta Sync</b>: the index mirrors a Delta table automatically, the right choice here. <b>Direct Vector Access</b>: your code upserts and deletes vectors through the API, with no source table.' },
      { t: 'Change Data Feed (CDF)', d: 'A Delta table feature that records row-level changes. It is what makes syncing incremental: one new PDF means ~40 new rows embedded, not 24,000.' },
      { t: 'Why the 3D cloud has clusters', d: 'Chunks about similar topics (claims, credentialing, fee schedules, termination, telehealth) end up near each other. The colours show those neighbourhoods.' },
    ],
    code: [
      { label: 'Python · create endpoint + index', lang: 'py', src: `# pip install databricks-ai-search
from databricks.ai_search.client import AISearchClient
client = AISearchClient()

client.create_endpoint_and_wait(name="provider-ops-search",
                                endpoint_type="STANDARD")

index = client.create_delta_sync_index_and_wait(
    endpoint_name="provider-ops-search",
    source_table_name="${C}.chunks",
    index_name="${C}.chunks_index",
    pipeline_type="TRIGGERED",
    primary_key="chunk_id",
    embedding_source_column="chunk_to_embed",
    embedding_model_endpoint_name="databricks-gte-large-en")` },
      { label: 'Python · after new PDFs are processed', lang: 'py', src: `index = client.get_index(index_name="${C}.chunks_index")
index.sync()          # embeds only rows changed since last sync (via CDF)
print(index.describe()["status"])` },
      { label: 'SQL · prerequisite on the source table', lang: 'sql', src: `ALTER TABLE ${C}.chunks
SET TBLPROPERTIES (delta.enableChangeDataFeed = true);` },
    ],
    io: [
      { title: 'Input · main.provider_ops.chunks', cols: ['chunk_id', 'chunk_to_embed', 'source_uri', 'page'], rows: [['acme_…_17', 'Document Title: Acme… 4.2 Provider shall submit…', '…/provider_contract_acme.pdf', '12'], ['… 24,000 rows', '', '', '']] },
      { title: 'Output · main.provider_ops.chunks_index', cols: ['property', 'value'], rows: [['type', 'Delta Sync · TRIGGERED'], ['rows indexed', '24,113'], ['embedding', 'databricks-gte-large-en · 1024-dim'], ['status', 'ONLINE · last sync 2026-11-02 06:00']] },
    ],
    why: 'Because the index follows the Delta table, adding a contract is just another step in the pipeline: drop the PDF in the Volume, run the job, sync. No manual re-indexing, and deleted contracts disappear from answers too.',
    pitfalls: [
      'Change Data Feed not enabled, so index creation fails or every sync rebuilds everything.',
      'The primary key is not unique or not stable across runs. Use <code>chunk_id</code> from <code>ai_prep_search</code>, which is built from the document ID and chunk position.',
      'Forgetting to call <code>sync()</code> for TRIGGERED indexes, so answers are a week stale. Add it as the last task in the job.',
      'The index must be in the same Unity Catalog metastore and region as the source table.',
    ],
    objects: ['chunksTable', 'deltaSync', 'vsEndpoint', 'index', 'vector'],
  },
  // ───────────────────────── 6 · RETRIEVE
  {
    lead: 'Now the online path. The question is turned into a vector with the same model, and the index returns the 5 chunks whose vectors are closest, with a similarity score for each.',
    happens: [
      'The app sends the question text to <code>index.similarity_search(query_text=…)</code>.',
      'AI Search embeds the question with <code>databricks-gte-large-en</code>, the same model as the chunks, so both live in the same space.',
      'The ANN index walks to the neighbourhood of the question vector and ranks candidates by similarity. Optionally, <code>query_type="HYBRID"</code> also scores keyword matches, which helps with exact terms like CPT codes.',
      '<b>Filters</b> narrow the search before ranking, e.g. only documents for one payer or effective in 2026.',
      'It returns the top-k rows (k = 5 here) with the columns you asked for and a score. A reranker can re-order them more precisely.',
    ],
    concepts: [
      { t: 'Similarity score', d: 'How close two vectors are (higher = more similar). Scores compare chunks for the <i>same</i> question. They are not probabilities, and there is no universal “good” threshold.' },
      { t: 'top-k', d: 'How many chunks to return. Too few and you can miss the answer; too many and the prompt fills with noise. 3–10 is typical. Measure it in step 08.' },
      { t: 'Hybrid search & reranking', d: 'Hybrid combines vector (meaning) and keyword (exact term) relevance. A reranker (<code>DatabricksReranker</code>) reads the question and each candidate together and re-orders them. It is slower but more accurate.' },
    ],
    code: [
      { label: 'Python · retrieve', lang: 'py', src: `results = index.similarity_search(
    query_text="What's the timely-filing limit for out-of-network claims?",
    columns=["chunk_id", "chunk_to_retrieve", "source_uri", "page"],
    num_results=5,
    filters={"source_uri LIKE": "%2026%"},   # optional pre-filter
    query_type="HYBRID")                     # vectors + keywords

for row in results["result"]["data_array"]:
    print(row)` },
    ],
    io: [
      { title: 'Input', cols: ['field', 'value'], rows: [['query_text', 'What’s the timely-filing limit for out-of-network claims?'], ['num_results', '5']] },
      { title: 'Output · top 5', cols: ['#', 'chunk', 'source', 'score'], rows: [
        ['1', '4.2 Provider shall submit claims within ninety (90) days…', 'Contract §4.2 · p.12', '0.92'],
        ['2', 'Timely filing: 90 calendar days from DOS unless…', 'Claims Policy · p.7', '0.89'],
        ['3', 'Out-of-network claims are subject to Exhibit B…', 'Contract §4.3 · p.13', '0.84'],
        ['4', 'Corrected claims must be submitted within…', 'Claims Policy · p.8', '0.78'],
        ['5', 'Appeals for timely-filing denials…', 'Appeals Guide · p.3', '0.74'],
      ] },
    ],
    why: 'If the right clause isn’t in the top 5, no LLM can answer correctly. Retrieval is the foundation of answer quality.',
    pitfalls: [
      'Exact identifiers (claim codes, section numbers) can be missed by pure vector search. Use HYBRID.',
      'No filters across payers or years, so the agent mixes up 2025 and 2026 terms. Store metadata columns and filter on them.',
      'Not checking retrieval separately from generation. Log the retrieved chunks in traces (step 08).',
    ],
    objects: ['question', 'queryVector', 'index', 'topk'],
  },
  // ───────────────────────── 7 · GENERATE
  {
    lead: 'The LLM receives one carefully built prompt (instructions, the 5 retrieved passages and the question) and writes the answer token by token, citing passage numbers.',
    happens: [
      '<b>Build the prompt.</b> A system message sets the rules: answer only from the context, cite as [n], say “not found” if missing. The context lists the 5 passages, numbered, each with its source and page. The user message is the question.',
      '<b>Call the model.</b> The prompt goes to <code>databricks-meta-llama-3-3-70b-instruct</code> on Foundation Model APIs, through Unity Gateway (which applies rate limits, usage tracking and guardrails).',
      '<b>Generate.</b> The model predicts the answer one <b>token</b> (≈ ¾ of a word) at a time, attending to the passages. <code>temperature=0</code> makes it as deterministic as possible.',
      '<b>Post-process.</b> The app maps [1], [2] back to the passages’ <code>source_uri</code> and page and renders them as links.',
    ],
    concepts: [
      { t: 'Prompt template', d: 'The fixed text wrapped around every question. It is the main lever on behaviour (tone, format, refusals, citation style) and is versioned like code.' },
      { t: 'Tokens', d: 'Units the model reads and writes. Pricing and limits are per token. 5 passages × ~300 words + instructions ≈ 2,500 input tokens.' },
      { t: 'Why a 70B instruct model', d: 'Large enough to follow strict instructions and synthesise two passages. “Instruct” means it was tuned to follow instructions. Swap models by changing the endpoint name, then re-run step 08 to compare.' },
    ],
    code: [
      { label: 'Python · prompt + call', lang: 'py', src: `SYSTEM = """You answer questions about provider contracts.
Use ONLY the context. Cite each fact as [n].
If the context does not contain the answer, say "Not found in the contracts.\""""

def build_prompt(question, hits):
    ctx = "\\n\\n".join(
        f"[{i+1}] ({h['source_uri']} p.{h['page']})\\n{h['chunk_to_retrieve']}"
        for i, h in enumerate(hits))
    return [{"role": "system", "content": SYSTEM},
            {"role": "user", "content": f"Context:\\n{ctx}\\n\\nQuestion: {question}"}]

from databricks.sdk import WorkspaceClient
w = WorkspaceClient()
resp = w.serving_endpoints.query(
    name="databricks-meta-llama-3-3-70b-instruct",
    messages=build_prompt(q, hits), temperature=0, max_tokens=400)` },
      { label: 'SQL · same model from a query', lang: 'sql', src: `SELECT ai_query(
  'system.ai.meta-llama-3-3-70b-instruct',
  CONCAT('Answer only from this context: ', context, ' Question: ', question)
) AS answer
FROM ${C}.eval_questions;` },
    ],
    io: [
      { title: 'Input · prompt (abridged)', cols: ['role', 'content'], rows: [['system', 'Use ONLY the context. Cite each fact as [n]…'], ['user', 'Context: [1] (…acme.pdf p.12) 4.2 Provider shall submit… [2] (…claims_policy p.7) Timely filing: 90 calendar days… Question: What’s the timely-filing limit…']] },
      { title: 'Output', cols: ['field', 'value'], rows: [['answer', 'Out-of-network claims must be filed within 90 days of the date of service [1][2]. Corrected claims follow §4.3 [3].'], ['usage', '2,431 input · 38 output tokens']] },
    ],
    why: 'The model adds the language skills: summarising, combining two sources, answering in plain English. The retrieved passages supply the facts. Keeping those roles separate is what makes answers both fluent and verifiable.',
    pitfalls: [
      'A weak system prompt, so the model blends in general knowledge (“usually 365 days…”). Be explicit, and test refusals.',
      'Passages without source labels, so the model cannot cite. Always number and label the context.',
      'No limits: one runaway client can exhaust quota. Set QPM/TPM rate limits in Unity Gateway.',
    ],
    objects: ['llm', 'prompt', 'tokens', 'answer', 'citation'],
  },
  // ───────────────────────── 8 · EVALUATE
  {
    lead: 'Before anyone relies on the agent, you measure it. MLflow 3 runs the agent on a fixed set of questions with known answers, records a <b>trace</b> of every step, and uses LLM <b>judges</b> to score each answer.',
    happens: [
      '<b>Build an evaluation set.</b> 30–200 real analyst questions, each with the facts a correct answer must contain (<code>expected_facts</code>). This is where the business user’s expertise goes in.',
      '<b>Run.</b> <code>mlflow.genai.evaluate</code> calls your <code>predict_fn</code> (the agent) for each question. Because <code>predict_fn</code> is decorated with <code>@mlflow.trace</code>, MLflow records the retrieved chunks, the prompt, the answer, tokens and latency.',
      '<b>Judge.</b> Each scorer is an LLM judge with a specific rubric. <b>Correctness</b>: are the expected facts present? <b>RetrievalGroundedness</b>: is every claim supported by the retrieved context? <b>RelevanceToQuery</b>: does it address the question? <b>Safety</b>: is it free of harmful content?',
      '<b>Review.</b> The MLflow UI shows pass rates per judge and lets you open any failed trace to see why: wrong retrieval, or a good passage the LLM ignored.',
      '<b>Iterate.</b> Change one thing (top-k, prompt, chunking, model), re-run, compare runs side by side. Ship when the scores meet the bar you agreed with the business.',
    ],
    concepts: [
      { t: 'Trace', d: 'A step-by-step recording of one request: each function call with inputs, outputs and timing. It is the X-ray that explains any answer.' },
      { t: 'LLM-as-a-judge', d: 'Using a strong model, with a narrow rubric, to grade answers. Each judge returns a pass/fail plus a written rationale. It scales human review rather than replacing it.' },
      { t: 'Retrieval vs generation errors', d: 'Low groundedness means the LLM invented things. Correct passages missing from the trace means retrieval failed. Each points to a different fix.' },
    ],
    code: [
      { label: 'Python · MLflow 3 evaluation', lang: 'py', src: `import mlflow
from mlflow.genai.scorers import (Correctness, RetrievalGroundedness,
                                  RelevanceToQuery, Safety)

eval_data = [
  {"inputs": {"question": "What's the timely-filing limit for OON claims?"},
   "expectations": {"expected_facts": ["90 days", "from date of service"]}},
  {"inputs": {"question": "Is telehealth covered for behavioral health?"},
   "expectations": {"expected_facts": ["covered", "audio-video required"]}},
  # … ~50 more
]

@mlflow.trace
def predict_fn(question: str) -> str:
    return answer(question)["answer"]

results = mlflow.genai.evaluate(
    data=eval_data, predict_fn=predict_fn,
    scorers=[Correctness(), RetrievalGroundedness(),
             RelevanceToQuery(), Safety()])
print(results.metrics)` },
    ],
    io: [
      { title: 'Input · evaluation set', cols: ['question', 'expected_facts'], rows: [['Timely-filing limit, OON?', '90 days · from date of service'], ['Telehealth for behavioral health?', 'covered · audio-video required'], ['Termination notice period?', '90 days written notice']] },
      { title: 'Output · scores (illustrative)', cols: ['judge', 'pass rate', 'what it means'], rows: [['Correctness', '92%', 'expected facts present'], ['RetrievalGroundedness', '96%', 'claims backed by context'], ['RelevanceToQuery', '98%', 'on-topic'], ['Safety', '100%', 'no harmful content']] },
    ],
    why: 'It turns “it seems to work” into numbers the business can sign off on, and catches regressions whenever you change the prompt, model or data.',
    pitfalls: [
      'An evaluation set written by the developer alone. The questions must come from real analysts.',
      'Judging only the final answer. Inspect traces to see whether retrieval found the right clause.',
      'Running evaluation once. Re-run it on every change and keep monitoring in production.',
    ],
    objects: ['evalSet', 'trace', 'correctness', 'groundedness', 'relevance', 'safety'],
  },
  // ───────────────────────── 9 · DEPLOY
  {
    lead: 'The agent becomes a service analysts can use. The Agent Bricks CLI packages and deploys it to Agent Runtime on Databricks Apps. Every request passes through Unity Gateway, and Unity Catalog permissions apply to the data it touches.',
    happens: [
      '<b>Scaffold & test locally.</b> <code>agentbricks init</code> creates a project (agent code, <code>agent.toml</code> config). <code>agentbricks dev</code> runs it locally against your workspace.',
      '<b>Deploy.</b> <code>agentbricks deploy provider-ops</code> creates the Databricks App <code>agent-bricks-provider-ops</code> on Agent Runtime. It provisions the memory and session stores declared in <code>agent.toml</code>, grants the app’s service principal access, and turns on MLflow tracing.',
      '<b>Sign in.</b> Analysts open the app URL and sign in with Databricks (OAuth). Requests carry their identity.',
      '<b>Govern.</b> Model calls go through <b>Unity Gateway</b>, which applies rate limits (QPM/TPM, HTTP 429 when exceeded), usage tracking (<code>system.serving.endpoint_usage</code>), inference tables and guardrails. Data access is checked by <b>Unity Catalog</b>: no <code>SELECT</code> on the index means no answer from it.',
      '<b>Operate.</b> <code>agentbricks deployments logs | get | stop</code>; scale with <code>--instances</code> (1–5). Production traces feed back into evaluation.',
    ],
    concepts: [
      { t: 'Service principal', d: 'A non-human identity the app runs as. You grant it exactly what the agent needs (the index, the model service) and nothing else.' },
      { t: 'Unity Gateway', d: 'Formerly AI Gateway. One control point for all model and MCP traffic, with limits, logging, guardrails and fallbacks, so security teams can see and control AI usage.' },
      { t: 'Experimental CLI', d: 'The Agent Bricks CLI (<code>databricks-agentbricks</code>, v0.6) is experimental, so commands may change. The underlying pieces (Apps, Unity Gateway, Unity Catalog) are the stable foundation.' },
    ],
    code: [
      { label: 'Shell · build and ship', lang: 'sh', src: `pip install databricks-agentbricks
agentbricks init provider-ops --framework langgraph
cd provider-ops && agentbricks dev            # local test

agentbricks --profile prod deploy provider-ops --instances 2
agentbricks deployments get  agent-bricks-provider-ops
agentbricks deployments logs agent-bricks-provider-ops` },
      { label: 'SQL · permissions & usage', lang: 'sql', src: `-- who may use the agent's data
GRANT USE CATALOG ON CATALOG main TO \`provider-ops-analysts\`;
GRANT USE SCHEMA ON SCHEMA ${C} TO \`provider-ops-analysts\`;
GRANT SELECT ON TABLE ${C}.chunks_index TO \`provider-ops-analysts\`;

-- what it costs / who uses it
SELECT * FROM system.serving.endpoint_usage
WHERE request_time > current_date() - INTERVAL 7 DAYS;` },
    ],
    io: [
      { title: 'Input', cols: ['what', 'value'], rows: [['agent project', 'provider-ops/ (code + agent.toml)'], ['profile', 'prod workspace']] },
      { title: 'Output', cols: ['what', 'value'], rows: [['app', 'agent-bricks-provider-ops (Databricks App, 2 instances)'], ['auth', 'Databricks OAuth, user identity on every request'], ['observability', 'MLflow traces · endpoint_usage · inference tables']] },
    ],
    why: 'Production means governed: the same identities, permissions, lineage and audit logs as the rest of your data platform, with no separate AI silo.',
    pitfalls: [
      'Giving the app’s service principal broad access “to make it work”. Grant only the index and model service.',
      'No rate limits. Set Unity Gateway QPM/TPM before opening the app to everyone.',
      'Treating launch as the end. Review production traces weekly and add failures to the evaluation set.',
    ],
    objects: ['endUser', 'gateway', 'app', 'unityCatalog', 'permissions'],
  },
];
