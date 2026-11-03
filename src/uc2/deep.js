// "Read the full explanation" drawer content for use case 02 (Genie).
const C = 'main.claims';

export const DEEP2 = [
  // ───────────────────────── 0 · NEED
  {
    lead: 'Claims-operations managers run on numbers: how many claims were denied, how much was paid, which providers are slow. Today every new question becomes a BI ticket. The developer’s job is to give them a <b>Genie Agent</b>, a governed chat that writes the SQL for them, on top of data the developer has curated and secured.',
    happens: [
      '<b>The question.</b> “Why did denied claims jump in Florida last quarter?” A manager can’t write the SQL. The data lives in dozens of raw tables with cryptic column names like <code>clm_sts_cd</code>.',
      '<b>Today’s path.</b> Ticket → BI analyst → SQL → dashboard tweak → reply. That takes 3–5 days, and follow-ups (“…and by plan type?”) start the loop again.',
      '<b>The hidden problem.</b> Three teams compute “denial rate” three ways (by claim, by line, with or without pended claims). Different numbers erode trust.',
      '<b>The constraint.</b> Claims contain PHI. A Florida manager may only see Florida members, and member IDs must be masked for most users.',
      '<b>The solution.</b> Curate a small, well-described set of Gold tables and metric definitions, wrap them in a Genie Agent, secure them with Unity Catalog, measure accuracy with benchmarks, then share it.',
    ],
    concepts: [
      { t: 'Genie Agent', d: 'A domain-specific chat interface (formerly “Genie space”). Users ask questions in natural language. Genie answers with a generated SQL query, a result table, an optional chart and a short summary.' },
      { t: 'Genie family', d: '<b>Genie One</b> is the business-user front door across agents, dashboards and apps. <b>Genie Code</b> is the developer assistant for code, pipelines and dashboards. <b>Genie Agents</b> are the curated, domain-specific chats you build here.' },
      { t: 'Text-to-SQL', d: 'Translating a natural-language question into a SQL query. The model never “knows” your numbers. It writes SQL, and the SQL warehouse computes the answer from real data.' },
      { t: 'Curator', d: 'The person (usually a SQL-fluent analyst or data engineer) who chooses the data, writes the metadata, examples and instructions, and keeps the agent accurate over time.' },
    ],
    compare: { title: 'Ticket queue vs Genie Agent', cols: ['', 'BI ticket', 'Genie Agent'], rows: [['Time to answer', '3–5 days', 'seconds'], ['Follow-up question', 'new ticket', 'same chat, keeps context'], ['Metric definition', 'depends who writes it', 'one governed definition'], ['Who sees which rows', 'enforced in each report', 'enforced by Unity Catalog'], ['Proof', 'trust the analyst', 'generated SQL always visible']] },
    why: 'The value is not “AI writes SQL”. It is self-service analytics with <b>one</b> set of definitions and <b>one</b> security model, so business users get fast answers the data team is willing to stand behind.',
    pitfalls: [
      'Pointing Genie at the raw lake (“all 200 tables”). Accuracy collapses. Start with ≤5 curated tables for one audience.',
      'Skipping governance “for the pilot”. The pilot data is real PHI. Row filters must be on from day one.',
      'Promising answers to everything. A Genie Agent is scoped to one domain. Out-of-scope questions should get a clear “I can’t answer that”.',
    ],
    objects: ['manager', 'ticketQueue', 'waitTime', 'question', 'blueprint2'],
  },
  // ───────────────────────── 1 · GOAL
  {
    lead: 'The target experience: a manager types a question, and seconds later sees the SQL Genie wrote, the result table, a chart and a one-line summary. They can ask a follow-up in the same conversation.',
    happens: [
      '<b>Ask.</b> In Genie One or the agent’s chat: “Denial rate by state, last quarter vs the one before.”',
      '<b>Understand.</b> Genie parses the question, identifies relevant tables, columns, metrics and example queries, and may ask a clarifying question if something is ambiguous.',
      '<b>Write SQL.</b> A managed LLM generates a <b>read-only</b> SQL query (SELECT only, never INSERT/UPDATE/DELETE).',
      '<b>Run.</b> The query executes on the agent’s SQL warehouse, with data access checked against <b>your</b> Unity Catalog identity.',
      '<b>Explain.</b> Genie returns the result table, suggests a visualization, writes a short natural-language summary and offers follow-up questions.',
    ],
    concepts: [
      { t: 'Chat mode', d: 'The default. Best for questions a single SQL query can answer. Conversations are stateful: “now split by plan type” reuses the previous context.' },
      { t: 'Agent mode', d: 'Multi-step reasoning (formerly Research Agent). Genie plans, runs several SQL queries, tests hypotheses and returns a report with citations. Use it for “why” questions. <b>Flash</b> (Beta) is a faster Agent mode option.' },
      { t: 'Compound AI system', d: 'Genie is not one model. It combines retrieval of relevant metadata and examples, LLM SQL generation, execution, error retries and summarization. You do not choose the LLM; Databricks manages it.' },
      { t: 'Inspect', d: 'Public Preview. Genie reviews its own SQL by running smaller checking queries (filters, date windows, joins) and returns an improved query if it finds a gap.' },
    ],
    io: [
      { title: 'Input', cols: ['field', 'value'], rows: [['question', 'Denial rate by state, last quarter vs prior'], ['user', 'fl.manager@payer.com'], ['mode', 'Chat']] },
      { title: 'Output', cols: ['part', 'example'], rows: [['SQL', 'SELECT member_state, MEASURE(`Denial rate`) …'], ['table', 'FL 9.8% · GA 7.1% · TX 6.4% …'], ['chart', 'bar chart, grouped by quarter'], ['summary', 'Florida rose 2.6 pts, the largest increase']] },
    ],
    why: 'Showing the SQL is the trust mechanism. A manager gets the answer; an analyst can open the SQL and verify it. Genie is a transparent co-worker, not a black box.',
    pitfalls: [
      'Expecting Genie to answer from PDFs in Chat mode. Chat mode works on structured data only. Files in volumes need Agent mode.',
      'Treating the summary as the answer. Always glance at the generated SQL, especially the date filter.',
    ],
    objects: ['manager', 'question', 'sqlCard', 'chart', 'summary'],
  },
  // ───────────────────────── 2 · CURATE
  {
    lead: 'Genie is only as good as the tables you give it. A data engineer builds a small star schema with Lakeflow Spark Declarative Pipelines (formerly DLT): raw claim feeds → cleaned rows → business-ready Gold tables.',
    happens: [
      '<b>Bronze.</b> 837 claim files and eligibility extracts land in a UC volume. A streaming table ingests them incrementally with <code>read_files</code> (Auto Loader).',
      '<b>Silver.</b> Clean and conform: cast types, standardize status codes (<code>clm_sts_cd = \'D\'</code> → <code>DENIED</code>), drop duplicates. <b>Expectations</b> quarantine bad rows (negative amounts, missing member IDs).',
      '<b>Gold.</b> Materialized views shape the star schema: <code>fact_claims</code> (one row per claim) with <code>dim_member</code>, <code>dim_provider</code> and <code>dim_plan</code>.',
      '<b>Simplify for Genie.</b> Rename columns to business words (<code>paid_amount</code>, not <code>pd_amt</code>), drop technical columns, and pre-join where it helps.',
      '<b>Schedule.</b> The pipeline refreshes nightly (or continuously). Genie always queries the latest Gold data.',
    ],
    concepts: [
      { t: 'Medallion architecture', d: 'Bronze (raw, as received) → Silver (cleaned, conformed) → Gold (business-level aggregates and models). Each layer is a set of Delta tables in Unity Catalog.' },
      { t: 'Streaming table vs materialized view', d: 'A streaming table processes only new data (append-heavy sources). A materialized view stores a query’s result and is refreshed, incrementally when possible, as sources change.' },
      { t: 'Expectations', d: 'Data-quality rules declared in the pipeline: <code>EXPECT (…) ON VIOLATION DROP ROW | FAIL UPDATE</code>. Metrics on passing and failing rows appear in the pipeline UI.' },
      { t: 'Star schema', d: 'One central <b>fact</b> table (events with numbers, like claims) surrounded by <b>dimension</b> tables (who, what, where). It is the shape that SQL generators handle best.' },
    ],
    code: [
      { label: 'SQL · pipeline (Lakeflow)', lang: 'sql', src: `-- bronze: incremental ingest from a UC volume
CREATE OR REFRESH STREAMING TABLE bronze_claims AS
SELECT * FROM STREAM read_files('/Volumes/${C}/landing/837/', format => 'json');

-- silver: clean, conform, enforce quality
CREATE OR REFRESH STREAMING TABLE silver_claims (
  CONSTRAINT valid_member EXPECT (member_id IS NOT NULL) ON VIOLATION DROP ROW,
  CONSTRAINT valid_amount EXPECT (billed_amount >= 0)    ON VIOLATION DROP ROW
) AS SELECT
  clm_id                         AS claim_id,
  mbr_id                         AS member_id,
  CAST(svc_dt AS DATE)           AS service_date,
  CASE clm_sts_cd WHEN 'P' THEN 'PAID' WHEN 'D' THEN 'DENIED' ELSE 'PENDED' END AS claim_status,
  CAST(pd_amt AS DECIMAL(12,2))  AS paid_amount, *
FROM STREAM bronze_claims;

-- gold: the fact table Genie will query
CREATE OR REFRESH MATERIALIZED VIEW fact_claims AS
SELECT claim_id, member_id, provider_id, plan_id, member_state,
       service_date, claim_status, denial_reason, billed_amount, paid_amount
FROM silver_claims;` },
    ],
    io: [
      { title: 'Input · bronze row', cols: ['clm_id', 'mbr_id', 'clm_sts_cd', 'pd_amt'], rows: [['C-88213', 'M0042', 'D', '"0.00"'], ['C-88214', 'NULL', 'P', '"-12"']] },
      { title: 'Output · gold fact_claims', cols: ['claim_id', 'member_id', 'claim_status', 'paid_amount'], rows: [['C-88213', 'M0042', 'DENIED', '0.00'], ['(dropped)', '-', 'failed expectation', '-']] },
    ],
    why: 'Most Genie accuracy problems are data-model problems. Clean names, one row per claim and simple joins make SQL generation easy and correct.',
    pitfalls: [
      'Adding bronze or silver tables to the agent. Business users should only see Gold.',
      'Wide tables with 300 columns. Hide or drop what the audience does not need (aim for focused tables).',
      'Ambiguous columns (<code>amount</code>, <code>date</code>). Say which amount and which date.',
    ],
    objects: ['bronze', 'silver', 'pipeline', 'factClaims', 'dimTables'],
  },
  // ───────────────────────── 3 · DESCRIBE
  {
    lead: 'Genie reads Unity Catalog metadata (table and column names, comments, primary and foreign keys) to decide which columns answer a question and how tables join. Writing this metadata is the single highest-leverage task.',
    happens: [
      '<b>Table comments.</b> Say what one row is and what the table is for: “One row per adjudicated medical claim, 2023+. Use for denial and payment analysis.”',
      '<b>Column comments.</b> Define meaning, units and allowed values: “claim_status: PAID, DENIED or PENDED. Denied = rejected at adjudication.”',
      '<b>AI-generated descriptions.</b> In Catalog Explorer, <b>AI generate</b> drafts comments from names and sample values. A human reviews and edits them before saving.',
      '<b>Keys.</b> Declare <code>PRIMARY KEY</code> on dimensions and <code>FOREIGN KEY</code> on the fact table. These are informational (not enforced) but tell Genie the correct join paths.',
      '<b>Agent-level overrides.</b> Inside the Genie Agent you can also add synonyms (“denials” ↔ <code>claim_status = \'DENIED\'</code>), hide columns, and turn on prompt matching. These are scoped to the agent and don’t change UC.',
    ],
    concepts: [
      { t: 'Unity Catalog metadata', d: 'Names, comments, tags, constraints and lineage stored centrally. Every tool (SQL editor, dashboards, Genie, agents) reads the same metadata.' },
      { t: 'Informational constraints', d: 'PK/FK constraints on Databricks are not enforced on write. They document relationships, which Genie and the query optimizer (with <code>RELY</code>) use.' },
      { t: 'Prompt matching', d: 'Genie samples column values so it can map “Florida” to <code>\'FL\'</code> and fix typos (“Flordia”). It is enabled automatically when you add tables; you can manage it per column.' },
      { t: 'Knowledge store', d: 'Agent-level curated semantics: table/column descriptions, synonyms, join relationships, prompt matching and SQL expressions. Up to 200 snippets per agent.' },
    ],
    code: [
      { label: 'SQL · comments', lang: 'sql', src: `COMMENT ON TABLE ${C}.fact_claims IS
  'One row per adjudicated medical claim (2023+). Use for denial-rate, paid-amount and volume analysis.';

ALTER TABLE ${C}.fact_claims ALTER COLUMN claim_status
  COMMENT 'Adjudication outcome: PAID, DENIED or PENDED.';
ALTER TABLE ${C}.fact_claims ALTER COLUMN member_state
  COMMENT 'Two-letter US state of the member (FL, TX, GA ...).';
ALTER TABLE ${C}.fact_claims ALTER COLUMN paid_amount
  COMMENT 'Amount paid to the provider in USD after adjudication.';` },
      { label: 'SQL · keys', lang: 'sql', src: `ALTER TABLE ${C}.dim_member
  ADD CONSTRAINT pk_member PRIMARY KEY (member_id);
ALTER TABLE ${C}.dim_provider
  ADD CONSTRAINT pk_provider PRIMARY KEY (provider_id);

ALTER TABLE ${C}.fact_claims
  ADD CONSTRAINT fk_member FOREIGN KEY (member_id)
  REFERENCES ${C}.dim_member (member_id);
ALTER TABLE ${C}.fact_claims
  ADD CONSTRAINT fk_provider FOREIGN KEY (provider_id)
  REFERENCES ${C}.dim_provider (provider_id);` },
    ],
    io: [
      { title: 'Before', cols: ['column', 'comment'], rows: [['claim_status', '-'], ['member_state', '-'], ['paid_amount', '-']] },
      { title: 'After', cols: ['column', 'comment'], rows: [['claim_status', 'PAID, DENIED or PENDED'], ['member_state', '2-letter member state'], ['paid_amount', 'USD paid after adjudication']] },
    ],
    why: 'An LLM can’t guess that <code>sts</code> means status or which of three dates is the service date. Clear metadata removes guesswork, and it helps every human who uses the tables too.',
    pitfalls: [
      'Accepting AI-generated comments blindly. They can be confidently wrong about business meaning.',
      'Comments that restate the name (“member_id: the member id”). Add meaning, units and allowed values.',
      'Missing foreign keys. Genie may join on the wrong column or not join at all.',
    ],
    objects: ['columns', 'comment', 'aiGenerate', 'primaryKey', 'foreignKey'],
  },
  // ───────────────────────── 4 · METRICS
  {
    lead: '“Denial rate” must mean one thing. A <b>metric view</b> in Unity Catalog defines measures (formulas) and dimensions (ways to slice) once, in YAML. Genie, dashboards and SQL users all query the same definitions.',
    happens: [
      '<b>Agree the definitions.</b> With finance: denial rate = denied claims ÷ all adjudicated claims (pended excluded). Total paid = SUM(paid_amount).',
      '<b>Write the metric view.</b> <code>CREATE VIEW … WITH METRICS LANGUAGE YAML</code>: a source table, optional joins, a list of dimensions and a list of measures.',
      '<b>Query with MEASURE().</b> Measures are aggregated at query time for whatever dimensions you group by, so a ratio stays correct at state, plan or month level.',
      '<b>Add to Genie.</b> Metric views count as data sources (up to 50 per agent). Genie uses <code>MEASURE(`Denial rate`)</code> instead of inventing its own formula.',
      '<b>Lighter option.</b> Inside the agent, <b>SQL expressions</b> in the knowledge store define measures, filters and fields (with synonyms) without creating a UC object.',
    ],
    concepts: [
      { t: 'Measure', d: 'An aggregate formula such as <code>SUM(paid_amount)</code> or a ratio. Unlike a pre-computed column, it is evaluated at the grain of each query.' },
      { t: 'Dimension', d: 'An attribute to group or filter by: member state, plan type, service quarter.' },
      { t: 'Metric view vs SQL expression', d: 'A metric view is a governed UC object reused by every tool. A SQL expression lives in one Genie Agent. Use metric views for company-wide KPIs and SQL expressions for agent-specific terms like “high-cost claim”.' },
    ],
    compare: { title: 'Where to put business logic', cols: ['Need', 'Best tool'], rows: [['Company KPI (denial rate)', 'Metric view measure'], ['Common filter (“high-cost” = paid > $10k)', 'SQL expression · filter'], ['Derived field (service quarter)', 'Metric view dimension or SQL expression · field'], ['Complex multi-step question', 'Example SQL query'], ['Tone, clarifying questions', 'Text instructions (last resort)']] },
    code: [
      { label: 'SQL · metric view', lang: 'sql', src: `CREATE OR REPLACE VIEW ${C}.claims_metrics
WITH METRICS LANGUAGE YAML AS $$
version: 1.1
comment: "Official claims KPIs (owner: claims finance)"
source: ${C}.fact_claims
filter: claim_status IN ('PAID', 'DENIED')
joins:
  - name: plan
    source: ${C}.dim_plan
    on: source.plan_id = plan.plan_id
dimensions:
  - name: Member state
    expr: member_state
  - name: Plan type
    expr: plan.plan_type
  - name: Service quarter
    expr: DATE_TRUNC('QUARTER', service_date)
measures:
  - name: Claims
    expr: COUNT(1)
  - name: Denial rate
    expr: COUNT(1) FILTER (WHERE claim_status = 'DENIED') / COUNT(1)
  - name: Total paid
    expr: SUM(paid_amount)
$$;` },
      { label: 'SQL · query it', lang: 'sql', src: `SELECT \`Member state\`,
       MEASURE(\`Denial rate\`) AS denial_rate,
       MEASURE(\`Claims\`)      AS claims
FROM ${C}.claims_metrics
WHERE \`Service quarter\` = DATE'2026-07-01'
GROUP BY ALL
ORDER BY denial_rate DESC;` },
    ],
    io: [
      { title: 'Output · MEASURE() by state', cols: ['Member state', 'denial_rate', 'claims'], rows: [['FL', '0.098', '412,880'], ['GA', '0.071', '198,402'], ['TX', '0.064', '377,915']] },
    ],
    why: 'Ratios are where text-to-SQL goes wrong most often (averaging averages, wrong denominators). A governed measure makes the correct formula the easy one.',
    pitfalls: [
      'Pre-computing ratios as columns and then averaging them. Use a measure.',
      'Defining the same KPI differently in a metric view and in a text instruction. Keep one source of truth.',
      'Forgetting the filter (pended claims) that finance assumes. Put it in the metric view.',
    ],
    objects: ['metricView', 'yamlSpec', 'measure', 'dimension', 'rawRows'],
  },
  // ───────────────────────── 5 · ASSEMBLE THE AGENT
  {
    lead: 'Now the analyst creates the Genie Agent: chooses data sources and a SQL warehouse, then teaches it with example SQL, trusted functions, SQL expressions and a few precise instructions.',
    happens: [
      '<b>Create.</b> In the sidebar, <b>Genie → New</b>. Add data sources: <code>fact_claims</code>, <code>dim_member</code>, <code>dim_provider</code>, <code>dim_plan</code> and the <code>claims_metrics</code> metric view (≤50 allowed; aim for ≤5). Genie Code drafts descriptions and sample questions.',
      '<b>Compute.</b> In <b>Configure → Settings</b>, choose a <b>pro or serverless SQL warehouse</b> (serverless is recommended for fast start-up). Add a title, description and sample questions.',
      '<b>Example SQL queries.</b> In <b>Configure → Examples</b>, add 5–10 verified queries for common or tricky questions. Use <code>:parameters</code> so one example covers many states or dates.',
      '<b>Trusted assets.</b> Parameterized examples and UC SQL functions are “trusted”: when Genie answers with one, the response is labeled <b>Trusted</b> because the logic is author-verified.',
      '<b>SQL expressions & instructions.</b> Add a filter “high-cost claim” and a field “service quarter”. Use text instructions last, for things like “If no time range is given, ask which quarter.”',
    ],
    concepts: [
      { t: 'Embedded credentials', d: 'The warehouse runs with the author’s compute credentials, so users don’t need warehouse permissions. Data access is still checked as the end user (step 07).' },
      { t: 'Example SQL query', d: 'A question + SQL pair. Genie retrieves the most relevant examples for each new question and learns the pattern, including joins, filters and date logic.' },
      { t: 'Priority of guidance', d: 'Databricks recommends: metadata first, then SQL expressions and example SQL, and text instructions only as a last resort. Keep them consistent (same rounding, same definitions).' },
      { t: 'Capacity', d: 'Up to 50 data sources, 200 knowledge-store snippets, 200,000 conversations per agent and 10,000 messages per conversation.' },
    ],
    code: [
      { label: 'SQL · trusted function', lang: 'sql', src: `CREATE OR REPLACE FUNCTION ${C}.denial_rate_by_state(
    q_start DATE COMMENT 'first service date',
    q_end   DATE COMMENT 'last service date')
RETURNS TABLE (member_state STRING, denial_rate DOUBLE, claims BIGINT)
COMMENT 'Official denial rate per member state for a service-date window.'
RETURN
  SELECT member_state,
         COUNT_IF(claim_status = 'DENIED') / COUNT(*) AS denial_rate,
         COUNT(*) AS claims
  FROM ${C}.fact_claims
  WHERE claim_status IN ('PAID', 'DENIED')
    AND service_date BETWEEN q_start AND q_end
  GROUP BY member_state;` },
      { label: 'SQL · example query', lang: 'sql', src: `-- Question: "Top denial reasons in <state> last quarter"
SELECT denial_reason,
       COUNT(*) AS denied_claims
FROM ${C}.fact_claims
WHERE claim_status = 'DENIED'
  AND member_state = :state
  AND service_date >= DATE_TRUNC('QUARTER', ADD_MONTHS(current_date(), -3))
  AND service_date <  DATE_TRUNC('QUARTER', current_date())
GROUP BY denial_reason
ORDER BY denied_claims DESC
LIMIT 10;` },
      { label: 'Text · instructions', lang: 'sh', src: `# General instructions (keep short, specific)
- "Last quarter" means the last complete calendar quarter by service_date.
- When users ask about denials without a time range, ask:
  "Which quarter should I use?"

Instructions you must follow when providing summaries
- Show rates as percentages with one decimal.
- Name the quarter covered by the result.` },
    ],
    io: [
      { title: 'Agent configuration', cols: ['setting', 'value'], rows: [['Data', '4 tables + 1 metric view'], ['Warehouse', 'claims-genie (serverless)'], ['Examples', '8 SQL queries · 2 trusted functions'], ['SQL expressions', 'high-cost claim · service quarter'], ['Instructions', '6 lines']] },
    ],
    why: 'Examples and trusted functions turn tribal SQL knowledge into reusable context. The difference between a 60% and a 90%+ accurate agent is almost always curation, not the model.',
    pitfalls: [
      'Writing 3 pages of text instructions. Long instructions dilute each other. Move rules into SQL expressions and examples.',
      'Conflicting guidance (instructions say round to 2 decimals, examples round to 1).',
      'Using a classic warehouse. Genie requires pro or serverless.',
    ],
    objects: ['agentCore', 'dataSources', 'warehouse', 'examples', 'trusted', 'instructions'],
  },
  // ───────────────────────── 6 · ASK
  {
    lead: 'What happens in the few seconds between a question and a chart: Genie assembles the most relevant context, an LLM writes SQL, the SQL warehouse runs it, and Genie turns the result into a table, chart and summary.',
    happens: [
      '<b>Parse.</b> “Denial rate by state, last quarter vs prior”. Genie detects the metric (denial rate), dimension (state) and time window (two quarters).',
      '<b>Select context.</b> From everything you curated, Genie retrieves only what is relevant: the <code>claims_metrics</code> view, the <code>member_state</code> column, the matching example query, instructions and chat history.',
      '<b>Generate SQL.</b> A managed LLM writes a read-only query. If a trusted function fits, Genie calls it and labels the answer <b>Trusted</b>.',
      '<b>Execute.</b> The query runs on the serverless SQL warehouse (Photon). Errors are retried automatically. Results are attributed to the user in query history.',
      '<b>Respond.</b> A result table, an auto-chosen chart (bars by state, grouped by quarter), a short summary and suggested follow-ups. The user can view or edit the SQL and give 👍 / 👎.',
    ],
    concepts: [
      { t: 'Context selection', d: 'Genie doesn’t send all metadata to the LLM. It filters tables, columns, examples and history down to what matters, which is why focused agents are more accurate.' },
      { t: 'Read-only SQL', d: 'Generated queries are always SELECTs. Genie can’t modify your tables.' },
      { t: 'Follow-ups', d: 'The conversation keeps state: “only Medicare Advantage” rewrites the previous query with an extra filter.' },
      { t: 'Clarifying questions', d: 'When the question is ambiguous (no time range, two possible metrics), Genie asks before guessing, especially if your instructions tell it to.' },
    ],
    code: [
      { label: 'SQL · what Genie generates', lang: 'sql', src: `-- Denial rate by state, last quarter vs prior
SELECT \`Member state\`,
       \`Service quarter\`,
       MEASURE(\`Denial rate\`) AS denial_rate
FROM ${C}.claims_metrics
WHERE \`Service quarter\` >= DATE_TRUNC('QUARTER', ADD_MONTHS(current_date(), -6))
  AND \`Service quarter\` <  DATE_TRUNC('QUARTER', current_date())
GROUP BY ALL
ORDER BY \`Member state\`, \`Service quarter\`;` },
    ],
    io: [
      { title: 'Context Genie selected', cols: ['source', 'used'], rows: [['claims_metrics', 'Denial rate, Member state, Service quarter'], ['example SQL', '“Denial rate by state for a quarter”'], ['instruction', '“last quarter” = last complete quarter']] },
      { title: 'Result', cols: ['state', 'Q2 2026', 'Q3 2026'], rows: [['FL', '7.2%', '9.8%'], ['GA', '6.9%', '7.1%'], ['TX', '6.6%', '6.4%']] },
    ],
    why: 'Every answer is reproducible SQL over governed data. That makes Genie auditable in a way a chatbot that “remembers” numbers can never be.',
    pitfalls: [
      'Ignoring 👎 feedback. It shows up in the Monitor tab and is your best signal for what to fix.',
      'Asking multi-step “why” questions in Chat mode. Switch to Agent mode for investigations.',
    ],
    objects: ['question', 'contextSel', 'llm2', 'sqlCard', 'warehouse', 'chart'],
  },
  // ───────────────────────── 7 · GOVERN
  {
    lead: 'Two managers ask the identical question and get different rows, as they should. A Genie Agent runs SQL with the author’s compute, but Unity Catalog evaluates <b>data access as the end user</b>. Row filters and column masks apply automatically.',
    happens: [
      '<b>Two identities.</b> The Florida manager and the Texas manager both ask “Denied claims by provider last quarter.”',
      '<b>Same SQL.</b> Genie writes the same query for both.',
      '<b>Row filter.</b> <code>fact_claims</code> has a row filter function. For each row, UC checks the current user’s region mapping, so FL sees FL rows and TX sees TX rows. National analysts in an admin group see all.',
      '<b>Column mask.</b> <code>member_id</code> has a mask. Users outside <code>phi_readers</code> see <code>***0042</code>.',
      '<b>Audit.</b> Each query is attributed to the real user in query history, the agent’s Monitor tab and audit logs (system tables).',
    ],
    concepts: [
      { t: 'Compute vs data access', d: 'Compute: the warehouse runs with credentials embedded by the author. Data: UC checks the <b>end user’s</b> SELECT grants, row filters and masks. Questions about data a user can’t access return an empty response.' },
      { t: 'Row filter', d: 'A SQL UDF that returns TRUE/FALSE per row, attached with <code>ALTER TABLE … SET ROW FILTER</code>. It is evaluated at query time for every engine and tool.' },
      { t: 'Column mask', d: 'A SQL UDF that returns the value or a redacted version, attached with <code>ALTER COLUMN … SET MASK</code>.' },
      { t: 'ABAC policies', d: 'Attribute-based access control: define a filter or mask once and apply it to every table carrying a governed tag (for example <code>phi=member_id</code>), instead of table by table.' },
    ],
    code: [
      { label: 'SQL · row filter', lang: 'sql', src: `CREATE OR REPLACE FUNCTION ${C}.state_filter(state STRING)
RETURN is_account_group_member('claims_national')
    OR EXISTS (
      SELECT 1 FROM ${C}.user_regions r
      WHERE r.user_email = current_user() AND r.state = state);

ALTER TABLE ${C}.fact_claims
  SET ROW FILTER ${C}.state_filter ON (member_state);` },
      { label: 'SQL · column mask', lang: 'sql', src: `CREATE OR REPLACE FUNCTION ${C}.mask_member_id(member_id STRING)
RETURN CASE
  WHEN is_account_group_member('phi_readers') THEN member_id
  ELSE concat('***', right(member_id, 4))
END;

ALTER TABLE ${C}.dim_member
  ALTER COLUMN member_id SET MASK ${C}.mask_member_id;` },
      { label: 'SQL · audit', lang: 'sql', src: `SELECT executed_by, statement_text, start_time
FROM system.query.history
WHERE statement_text ILIKE '%fact_claims%'
  AND start_time > current_date() - INTERVAL 7 DAYS
ORDER BY start_time DESC;` },
    ],
    io: [
      { title: 'FL manager sees', cols: ['provider', 'state', 'denied', 'member_id'], rows: [['Bayview Clinic', 'FL', '1,204', '***0042'], ['Coral Ortho', 'FL', '988', '***7731']] },
      { title: 'TX manager sees', cols: ['provider', 'state', 'denied', 'member_id'], rows: [['Lone Star Imaging', 'TX', '1,117', '***5510'], ['Gulf Family Med', 'TX', '642', '***2208']] },
    ],
    why: 'Security lives in the data layer, so it’s identical in Genie, dashboards, notebooks and the API. You don’t have to trust the LLM to “remember” who may see what.',
    pitfalls: [
      'Putting “only show Florida” in a text instruction. That’s not security. Use row filters.',
      'Testing only as the author. Test with a real end-user account (or group) before sharing.',
      'Sharing the agent before users have SELECT on the data. They’ll get empty answers.',
    ],
    objects: ['userFL', 'userTX', 'rowFilter', 'colMask', 'ucGate', 'audit'],
  },
  // ───────────────────────── 8 · BENCHMARK
  {
    lead: 'Before sharing, prove it works. <b>Benchmarks</b> are test questions with a known-correct SQL answer. Genie runs each as a new conversation and compares result sets. After launch, the Monitor tab and user feedback keep the agent honest.',
    happens: [
      '<b>Collect questions.</b> 20–50 real questions from managers, including awkward phrasings and out-of-scope ones that should be declined.',
      '<b>Add ground truth.</b> In <b>Benchmarks → Add benchmark</b>, enter the question and the SQL answer (or a UC function). <b>Generate SQL</b> can draft it for you to verify.',
      '<b>Run.</b> Run all benchmarks in <b>Chat mode</b> (result sets compared to your SQL) or <b>Agent mode</b> (an LLM judge grades the report, guided by an evaluation note).',
      '<b>Read the evaluation.</b> The Evaluations tab shows each run’s accuracy and, per question, Genie’s output vs ground truth: Good, Bad or Manual review.',
      '<b>Fix and re-run.</b> Fix failures with metadata, SQL expressions or examples, never by editing the benchmark. Re-run after every change to catch regressions.',
      '<b>Monitor.</b> After launch, the Monitor tab lists every question with ratings and flagged responses. <b>Analyze Agent Usage</b> uses Genie Code to summarize recurring issues.',
    ],
    concepts: [
      { t: 'Benchmarks are evaluation-only', d: 'Genie does <b>not</b> learn from benchmark questions or SQL. That keeps the test honest. Up to 500 benchmark questions per agent.' },
      { t: 'Result-set comparison', d: 'In Chat mode, accuracy is about the answer, not the SQL text. Two different queries that return the same rows both pass.' },
      { t: 'Feedback loop', d: '👍 / 👎 and “request review” from users appear in the Monitor tab and audit logs. Turn each failure into a new benchmark and a curation fix.' },
    ],
    io: [
      { title: 'Benchmark run (illustrative)', cols: ['question', 'result', 'note'], rows: [['Denial rate by state, Q3', 'Good', 'matches trusted function'], ['Top 5 providers by paid amount', 'Good', ''], ['Claims per member, MA plans', 'Bad', 'joined on wrong date → add FK'], ['What’s our stock price?', 'Good', 'correctly declined'], ['Run summary', '23 / 25 = 92%', 'target ≥ 90% before sharing']] },
    ],
    code: [
      { label: 'SQL · ground-truth answer', lang: 'sql', src: `-- Benchmark: "Denial rate by state for Q3 2026"
SELECT * FROM ${C}.denial_rate_by_state(DATE'2026-07-01', DATE'2026-09-30')
ORDER BY member_state;` },
    ],
    why: 'Without a benchmark, every change to instructions is a guess. With one, you can say “92% on 25 real questions” and show exactly what broke when a number drops.',
    pitfalls: [
      'Benchmarks written only by the developer. Use real user questions.',
      'Only happy-path questions. Include ambiguous and out-of-scope prompts.',
      'Tuning to pass a single benchmark with a very specific text instruction. Fix the underlying metadata instead.',
    ],
    objects: ['benchSet', 'groundTruth', 'compare2', 'accuracy', 'monitor'],
  },
  // ───────────────────────── 9 · SHARE
  {
    lead: 'One governed agent, many front doors. Share it with <code>CAN RUN</code>, and users find it in <b>Genie One</b>, Microsoft Teams or an embedded iframe. Developers call it through the <b>Conversation API</b>, and other AI agents use it as a tool through the <b>Genie Agent MCP server</b>.',
    happens: [
      '<b>Grant data.</b> Users need the Databricks SQL entitlement, <code>SELECT</code> on the tables, and <code>CAN RUN</code> (or CAN VIEW) on the agent. They don’t need warehouse permissions.',
      '<b>Genie One.</b> Business users see the agent beside dashboards and apps. Genie One routes questions to the best matching agent. It’s also available on mobile.',
      '<b>Teams / embed.</b> The Databricks Genie app in Microsoft Teams (Public Preview) can pin this agent to a channel. An admin can allow an embedding domain, and authors copy iframe code from <b>Share → Embed space</b>.',
      '<b>Conversation API.</b> <code>POST /api/2.0/genie/spaces/{space_id}/start-conversation</code>, poll the message until <code>COMPLETED</code>, then fetch the query result. Paths still say <code>spaces</code>.',
      '<b>MCP for agents.</b> <code>/api/2.0/mcp/genie/{space_id}</code> exposes the agent as a read-only tool to any MCP client, with UC permissions enforced per request.',
      '<b>As code.</b> Version and promote the agent across dev, staging and prod with Declarative Automation Bundles.',
    ],
    concepts: [
      { t: 'Permission levels', d: '<b>CAN MANAGE</b>: edit, share, see monitoring. <b>CAN EDIT</b>: change configuration. <b>CAN RUN</b>: ask questions. <b>CAN VIEW</b>: read the agent and conversations.' },
      { t: 'Asynchronous API', d: 'Start → poll every 1–5 s with exponential backoff (max ~10 minutes) → read attachments. Start a new conversation per user session; follow-ups go to the same conversation.' },
      { t: 'Genie as a tool', d: 'A custom agent (for example from use case 01) can call this Genie Agent for data questions and the RAG index for document questions. Each call is asked by an identity, and that identity’s UC permissions decide the rows.' },
    ],
    code: [
      { label: 'Shell · Conversation API', lang: 'sh', src: `# 1 · ask
curl -s -X POST "$DATABRICKS_HOST/api/2.0/genie/spaces/$SPACE_ID/start-conversation" \\
  -H "Authorization: Bearer $DATABRICKS_TOKEN" \\
  -d '{"content": "Denial rate by state last quarter"}'
# → {"conversation_id": "...", "message_id": "...", "message": {"status": "IN_PROGRESS"}}

# 2 · poll until status is COMPLETED
curl -s "$DATABRICKS_HOST/api/2.0/genie/spaces/$SPACE_ID/conversations/$CONV_ID/messages/$MSG_ID" \\
  -H "Authorization: Bearer $DATABRICKS_TOKEN"

# 3 · fetch the rows of the SQL attachment
curl -s "$DATABRICKS_HOST/api/2.0/genie/spaces/$SPACE_ID/conversations/$CONV_ID/messages/$MSG_ID/attachments/$ATT_ID/query-result" \\
  -H "Authorization: Bearer $DATABRICKS_TOKEN"` },
      { label: 'Python · SDK', lang: 'py', src: `from databricks.sdk import WorkspaceClient

w = WorkspaceClient()                      # auth from env / profile
msg = w.genie.start_conversation_and_wait(
    space_id=SPACE_ID,
    content="Denial rate by state last quarter")

for a in msg.attachments or []:
    if a.query:
        print(a.query.query)               # the generated SQL
        res = w.genie.get_message_attachment_query_result(
            SPACE_ID, msg.conversation_id, msg.message_id, a.attachment_id)

# follow-up keeps context
w.genie.create_message_and_wait(SPACE_ID, msg.conversation_id,
                                "Only Medicare Advantage plans")` },
      { label: 'SQL · grants', lang: 'sql', src: `GRANT USE CATALOG ON CATALOG main TO \`claims-managers\`;
GRANT USE SCHEMA  ON SCHEMA  ${C} TO \`claims-managers\`;
GRANT SELECT      ON SCHEMA  ${C} TO \`claims-managers\`;
-- then: Genie Agent → Share → claims-managers → Can Run` },
    ],
    io: [
      { title: 'Front doors', cols: ['surface', 'who', 'how'], rows: [['Genie One', 'business users', 'web + mobile, routes to agents'], ['Microsoft Teams', 'everyone', '@Databricks Genie, pinned agent'], ['Embedded iframe', 'portal users', 'Share → Embed space'], ['Conversation API', 'developers', 'REST / SDK'], ['MCP server', 'AI agents', '/api/2.0/mcp/genie/{space_id}']] },
    ],
    why: 'People adopt tools that live where they already work. Because identity and permissions travel with every request, adding a new front door never adds a new security risk.',
    pitfalls: [
      'Reusing one conversation for many users in an app. Start a new conversation per session.',
      'Polling in a tight loop. Use backoff and a timeout.',
      'Forgetting that the MCP endpoint has no chat history. Each tool call is a standalone question.',
    ],
    objects: ['agentCore', 'genieOne', 'teams', 'embed', 'api', 'mcp'],
  },
];
