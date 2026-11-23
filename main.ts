// One-Line Roast: The Gadget You Use Every Day — make.fun entry.
// The program writes a single original roast line about the phone,
// the gadget used every day, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "My phone unlocks with my face, tracks my sleep, and counts my steps, yet still asks if I'm still watching, like we've never met.";

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, LINE);
