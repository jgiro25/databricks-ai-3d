// Use case catalog + step content for the RAG use case.
export const USE_CASES = [
  { n: 1, t: 'Document Q&A with RAG', cat: 'GenAI', live: true, sub: 'Chat with provider contracts & policy PDFs, with citations' },
  { n: 2, t: 'Talk to your data with Genie', cat: 'Text-to-SQL' },
  { n: 3, t: 'AI Functions inside SQL', cat: 'SQL + LLM' },
  { n: 4, t: 'Claims anomaly detection', cat: 'ML' },
  { n: 5, t: 'Member churn prediction', cat: 'ML' },
  { n: 6, t: 'Cost & volume forecasting', cat: 'Forecast' },
  { n: 7, t: 'Extract fields from PDFs', cat: 'Doc AI' },
  { n: 8, t: 'Multi-agent supervisor', cat: 'Agents' },
  { n: 9, t: 'Provider entity resolution', cat: 'ML' },
  { n: 10, t: 'Call transcript insights', cat: 'GenAI' },
  { n: 11, t: 'Real-time feature scoring', cat: 'MLOps' },
  { n: 12, t: 'Fine-tune on your data', cat: 'GenAI' },
  { n: 13, t: 'AI/BI dashboards + Genie', cat: 'BI' },
  { n: 14, t: 'Agent with UC function tools', cat: 'Agents' },
  { n: 15, t: 'Prior-auth triage classifier', cat: 'GenAI' },
  { n: 16, t: 'Synthetic test data', cat: 'GenAI' },
  { n: 17, t: 'Recommendation engine', cat: 'ML' },
  { n: 18, t: 'Fax & image OCR to tables', cat: 'Doc AI' },
  { n: 19, t: 'Guardrails & AI monitoring', cat: 'Governance' },
  { n: 20, t: 'MCP tools for agents', cat: 'Agents' },
];

export const PHASES = [
  { name: 'Goal', steps: [0] },
  { name: 'Prepare data', steps: [1, 2, 3, 4] },
  { name: 'Answer', steps: [5, 6] },
  { name: 'Production', steps: [7, 8] },
];

// small svg glyphs for the architecture map
const I = {
  goal: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3.5"/>',
  ingest: '<path d="M12 3v11M7 9l5 5 5-5M4 17v3h16v-3"/>',
  chunk: '<rect x="4" y="4" width="7" height="7" rx="1"/><rect x="13" y="4" width="7" height="7" rx="1"/><rect x="4" y="13" width="7" height="7" rx="1"/><rect x="13" y="13" width="7" height="7" rx="1"/>',
  embed: '<path d="M5 19L19 5M19 5h-6M19 5v6"/><circle cx="5" cy="19" r="1.5"/>',
  index: '<circle cx="6" cy="7" r="1.6"/><circle cx="16" cy="5" r="1.6"/><circle cx="18" cy="15" r="1.6"/><circle cx="8" cy="17" r="1.6"/><circle cx="12" cy="11" r="1.6"/>',
  retrieve: '<circle cx="10.5" cy="10.5" r="6"/><path d="M15 15l5 5"/>',
  generate: '<path d="M12 3l2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2z"/>',
  evaluate: '<path d="M4 19h16M7 16V10M12 16V6M17 16v-4"/>',
  deploy: '<path d="M12 3l8 4v5c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V7z"/><path d="M9 12l2 2 4-4"/>',
};

export const STEPS = [
  {
    key: 'goal', short: 'Goal', phase: 'Goal', icon: I.goal,
    title: 'Ask a question. Get a cited answer.',
    what: 'Staff ask about contracts in plain English',
    how: 'A RAG agent reads <b>your</b> PDFs before it answers',
    why: 'Answers in seconds, each one cites its page',
    tags: [['Retrieval-Augmented Generation', ''], ['Provider contracts', '']],
    code: `<span class="c"># The finished experience</span>
Q: What's the timely-filing limit for
   out-of-network claims?
A: 90 days from date of service.
   <span class="s">[Contract §4.2]</span> <span class="s">[Claims Policy p.7]</span>`,
  },
  {
    key: 'ingest', short: 'Ingest', phase: 'Prepare data', icon: I.ingest,
    title: 'Land the PDFs in Unity Catalog',
    what: 'Upload contracts & policies to one governed place',
    how: '<code>UC Volume</code> → <code>READ_FILES</code> → Delta table',
    why: 'One permissioned, versioned source of truth',
    tags: [['Unity Catalog Volumes', 'tool'], ['Delta Lake', 'tool']],
    code: `<span class="k">CREATE VOLUME</span> main.provider_ops.contracts;

<span class="k">CREATE TABLE</span> main.provider_ops.raw_docs <span class="k">AS</span>
<span class="k">SELECT</span> path, content
<span class="k">FROM</span> <span class="f">READ_FILES</span>(
  <span class="s">'/Volumes/main/provider_ops/contracts/'</span>,
  format => <span class="s">'binaryFile'</span>);`,
  },
  {
    key: 'chunk', short: 'Chunk', phase: 'Prepare data', icon: I.chunk,
    title: 'Parse & split into chunks',
    what: 'Read each page’s layout, cut it into small passages',
    how: '<code>ai_parse_document</code> → <code>ai_prep_search</code>',
    why: 'Small chunks = precise matches, tables kept intact',
    tags: [['AI Functions (SQL)', 'tool'], ['ai_prep_search · Beta', '']],
    code: `<span class="k">CREATE TABLE</span> chunks <span class="k">AS</span>
<span class="k">SELECT</span> c.value:chunk_id::string,
       c.value:chunk_to_embed::string,
       c.value:chunk_to_retrieve::string
<span class="k">FROM</span> raw_docs,
<span class="k">LATERAL</span> <span class="f">variant_explode</span>(
  <span class="f">ai_prep_search</span>(
    <span class="f">ai_parse_document</span>(content)):chunks) c;`,
  },
  {
    key: 'embed', short: 'Embed', phase: 'Prepare data', icon: I.embed,
    title: 'Turn text into vectors',
    what: 'Each chunk becomes 1,024 numbers that capture meaning',
    how: 'Embedding model <code>databricks-gte-large-en</code>',
    why: 'Same meaning lands close, even with different words',
    tags: [['databricks-gte-large-en', 'model'], ['Foundation Model APIs', 'tool']],
    code: `<span class="c"># "90-day filing window"  ≈  "claims due within 3 months"</span>
emb = client.embeddings.create(
  model=<span class="s">"databricks-gte-large-en"</span>,
  input=[<span class="s">"Claims must be filed within 90 days…"</span>])
len(emb.data[0].embedding)  <span class="c"># 1024</span>`,
  },
  {
    key: 'index', short: 'Index', phase: 'Prepare data', icon: I.index,
    title: 'Build a vector index',
    what: 'All vectors live in a searchable space',
    how: '<code>Databricks AI Search</code> · Delta Sync index',
    why: 'Re-syncs itself when the Delta table changes',
    tags: [['Databricks AI Search', 'tool'], ['formerly Vector Search', ''], ['Delta Sync', '']],
    code: `vsc.create_delta_sync_index(
  endpoint_name=<span class="s">"contracts_search"</span>,
  index_name=<span class="s">"main.provider_ops.chunks_idx"</span>,
  source_table_name=<span class="s">"main.provider_ops.chunks"</span>,
  primary_key=<span class="s">"chunk_id"</span>,
  embedding_source_column=<span class="s">"chunk_to_embed"</span>,
  embedding_model_endpoint_name=<span class="s">"databricks-gte-large-en"</span>,
  pipeline_type=<span class="s">"TRIGGERED"</span>)`,
  },
  {
    key: 'retrieve', short: 'Retrieve', phase: 'Answer', icon: I.retrieve,
    title: 'Find the closest chunks',
    what: 'The question becomes a vector and finds its neighbors',
    how: 'Similarity search, top <code>k = 5</code>',
    why: 'The model only sees the facts it needs',
    tags: [['AI Search similarity_search', 'tool'], ['top-k', '']],
    code: `hits = index.similarity_search(
  query_text=<span class="s">"timely filing limit out-of-network"</span>,
  columns=[<span class="s">"chunk_id"</span>, <span class="s">"chunk_to_retrieve"</span>],
  num_results=<span class="k">5</span>)`,
  },
  {
    key: 'generate', short: 'Generate', phase: 'Answer', icon: I.generate,
    title: 'Write the answer, with sources',
    what: 'The LLM reads question + chunks and answers',
    how: 'Foundation Model API <code>databricks-meta-llama-3-3-70b-instruct</code>',
    why: 'Grounded in your documents, so fewer hallucinations',
    tags: [['Llama 3.3 70B Instruct', 'model'], ['Foundation Model APIs', 'tool']],
    code: `resp = client.chat.completions.create(
  model=<span class="s">"databricks-meta-llama-3-3-70b-instruct"</span>,
  messages=[
   {<span class="s">"role"</span>:<span class="s">"system"</span>,<span class="s">"content"</span>:<span class="s">"Answer only from CONTEXT. Cite [ids]."</span>},
   {<span class="s">"role"</span>:<span class="s">"user"</span>,<span class="s">"content"</span>: context + question}])`,
  },
  {
    key: 'evaluate', short: 'Evaluate', phase: 'Production', icon: I.evaluate,
    title: 'Trace it. Score it.',
    what: 'See every step, then grade answers with AI judges',
    how: '<code>MLflow 3 Tracing</code> + <code>mlflow.genai.evaluate</code>',
    why: 'Prove it is correct before real users rely on it',
    tags: [['Custom Agents', 'tool'], ['MLflow 3', 'tool'], ['LLM judges', '']],
    code: `<span class="k">from</span> mlflow.genai.scorers <span class="k">import</span> (Correctness,
  RetrievalGroundedness, RelevanceToQuery, Safety)

mlflow.genai.evaluate(
  data=eval_set, predict_fn=agent.predict,
  scorers=[Correctness(), RetrievalGroundedness(),
           RelevanceToQuery(), Safety()])`,
  },
  {
    key: 'deploy', short: 'Deploy', phase: 'Production', icon: I.deploy,
    title: 'Ship it, governed end to end',
    what: 'A live chat app your team can use',
    how: '<code>agentbricks deploy</code> → Agent Runtime on Databricks Apps',
    why: 'Unity Catalog permissions + Unity Gateway limits & logs',
    tags: [['Agent Bricks CLI', 'tool'], ['Databricks Apps', 'tool'], ['Unity Catalog', 'tool'], ['Unity Gateway', 'tool']],
    code: `agentbricks init contracts-qa --framework langgraph
agentbricks dev            <span class="c"># test locally</span>
agentbricks deploy contracts-qa
<span class="c"># → app "agent-bricks-contracts-qa", traced in MLflow,</span>
<span class="c">#   data access enforced by Unity Catalog</span>`,
  },
];
