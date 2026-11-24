// One-Line Roast: The Gadget You Use Every Day
// Writes one original roast line about the phone to /output/entry.txt
// (or to ENTRY_OUTPUT when set, for local validation).

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const line =
  "My phone unlocks with my face, tracks my sleep, and counts my steps, yet still asks if I'm still watching, like we've never met.";

// Gate guard: one line, 1-200 chars, no line breaks, not blank.
if (line.length < 1 || line.length > 200 || /\n/.test(line) || line.trim() === "") {
  throw new Error("entry must be one non-blank line of 1-200 chars");
}

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, line, "utf8");
