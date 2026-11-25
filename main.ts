// One-Star Review of Something Essential — make.fun entry (program/v1).
// Writes one deadpan one-star review to /output/entry.txt.
//
// Winner, picked from 14 drafted reviews: the gravity complaint.
// It holds the deadpan throughout, finds the sharpest true grievance
// (everything falls), and turns in the last few words — the floor was
// apparently my idea. One joke, tight, no winking, no exclamation marks.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "One star. Keeps dropping everything I own and then acts like the floor was my idea.";

// Guard the gate: the scorer only accepts 1–160 characters, so refuse
// loudly here instead of shipping an entry that can never be judged.
if (ENTRY.length < 1 || ENTRY.length > 160) {
  throw new Error(`entry is ${ENTRY.length} characters, gate needs 1–160`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
