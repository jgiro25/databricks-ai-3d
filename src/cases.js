// Registry of live use cases. Each case brings its own steps, drawer content, objects and 3D stations.
import { STEPS, PHASES } from './data.js';
import { DEEP_A } from './content/deep1.js';
import { DEEP_B } from './content/deep2.js';
import { OBJECTS } from './content/objects.js';
import { NeedStation } from './stations/s0_need.js';
import { GoalStation } from './stations/s1_goal.js';
import { IngestStation } from './stations/s2_ingest.js';
import { ChunkStation } from './stations/s3_chunk.js';
import { EmbedStation } from './stations/s4_embed.js';
import { IndexStation } from './stations/s5_index.js';
import { RetrieveStation } from './stations/s6_retrieve.js';
import { GenerateStation } from './stations/s7_generate.js';
import { EvaluateStation } from './stations/s8_evaluate.js';
import { DeployStation } from './stations/s9_deploy.js';
import { STEPS_RX, PHASES_RX } from './rx/data.js';
import { DEEP_RX } from './rx/deep.js';
import { OBJECTS_RX } from './rx/objects.js';
import { XQuestions, XVolume, XBronze, XParse, XChunk } from './rx/s_a.js';
import { XEmbed, XIndex, XQuery, XPrompt, XMap } from './rx/s_b.js';

export const CASES = {
  rag: { id: 'rag', n: 1, title: 'Document Q&A with RAG', steps: STEPS, phases: PHASES, deep: [...DEEP_A, ...DEEP_B], objects: OBJECTS,
    classes: [NeedStation, GoalStation, IngestStation, ChunkStation, EmbedStation, IndexStation, RetrieveStation, GenerateStation, EvaluateStation, DeployStation] },
  inside: { id: 'inside', n: 2, title: 'Inside RAG: how a PDF becomes searchable vectors', steps: STEPS_RX, phases: PHASES_RX, deep: DEEP_RX, objects: OBJECTS_RX,
    classes: [XQuestions, XVolume, XBronze, XParse, XChunk, XEmbed, XIndex, XQuery, XPrompt, XMap] },
};
