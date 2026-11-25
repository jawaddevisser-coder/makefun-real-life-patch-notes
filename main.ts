import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Judge brief: one-line patch note for a bug in real life or human biology, at most 160 characters, in the terse register of a real release note.
const LINE =
  "v1.9.3: fixed a bug where sneezing in a quiet room played at 400% volume with no mute button.";

// Self-check: the sealed gate accepts UTF-8 text of 1 to 160 characters, not only white space.
if ([...LINE].length < 1 || [...LINE].length > 160 || LINE.trim().length === 0) {
  throw new Error("entry fails the 1-160 character gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
