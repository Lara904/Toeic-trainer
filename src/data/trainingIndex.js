// ─── imports test blanc ───────────────────────────────────────────────────────
import testBlanc from './training/test-blanc.json';

// ─── imports Part 1 ──────────────────────────────────────────────────────────
import trainP1_001 from './training/train-p1-001.json';
import trainP1_002 from './training/train-p1-002.json';
import trainP1_003 from './training/train-p1-003.json';

// ─── imports Part 2 ──────────────────────────────────────────────────────────
import trainP2_001 from './training/train-p2-001.json';
import trainP2_002 from './training/train-p2-002.json';
import trainP2_003 from './training/train-p2-003.json';
import trainP2_004 from './training/train-p2-004.json';
import trainP2_005 from './training/train-p2-005.json';

// ─── imports Part 3 ──────────────────────────────────────────────────────────
import trainP3_001 from './training/train-p3-001.json';
import trainP3_002 from './training/train-p3-002.json';
import trainP3_003 from './training/train-p3-003.json';

// ─── imports Part 4 ──────────────────────────────────────────────────────────
import trainP4_001 from './training/train-p4-001.json';
import trainP4_002 from './training/train-p4-002.json';
import trainP4_003 from './training/train-p4-003.json';
import trainP4_004 from './training/train-p4-004.json';

// ─── imports Part 5 ──────────────────────────────────────────────────────────
import trainP5_001 from './training/train-p5-001.json';
import trainP5_002 from './training/train-p5-002.json';
import trainP5_003 from './training/train-p5-003.json';

// ─── imports Part 6 ──────────────────────────────────────────────────────────
import trainP6_001 from './training/train-p6-001.json';
import trainP6_002 from './training/train-p6-002.json';
import trainP6_003 from './training/train-p6-003.json';

// ─── imports Part 7 ──────────────────────────────────────────────────────────
import trainP7_001 from './training/train-p7-001.json';
import trainP7_002 from './training/train-p7-002.json';
import trainP7_003 from './training/train-p7-003.json';

// ─── imports Part 8 ──────────────────────────────────────────────────────────
import trainP8_001 from './training/train-p8-001.json';
import trainP8_002 from './training/train-p8-002.json';
import trainP8_003 from './training/train-p8-003.json';

// ─── catalogue ordonné par partie ────────────────────────────────────────────
export const TEST_BLANC = testBlanc;

export const TRAINING_BY_PART = {
  1: [trainP1_001, trainP1_002, trainP1_003],
  2: [trainP2_001, trainP2_002, trainP2_003, trainP2_004, trainP2_005],
  3: [trainP3_001, trainP3_002, trainP3_003],
  4: [trainP4_001, trainP4_002, trainP4_003, trainP4_004],
  5: [trainP5_001, trainP5_002, trainP5_003],
  6: [trainP6_001, trainP6_002, trainP6_003],
  7: [trainP7_001, trainP7_002, trainP7_003],
  8: [trainP8_001, trainP8_002, trainP8_003],
};

export const ALL_TRAINING = Object.values(TRAINING_BY_PART).flat();

export const getTrainingById = (id) => ALL_TRAINING.find((t) => t.id === id);
