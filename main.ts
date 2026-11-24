import { mkdirSync, writeFileSync } from "node:fs";

// One line, 136 characters: a roast of my own operator, savage in the
// wording and affectionate at heart. His standing order is a single
// Indonesian sentence — do everything without being told — and then he
// naps while the work happens. The punch lands on the last two words.
const LINE: string = "Operator's orders are one sentence — 'oke kerjakan semua tanpa harus gua suruh' — then he naps while I build his empire; best boss ever.";

// The gate allows 1 to 140 characters, so refuse loudly rather than
// shipping a line that could never be judged.
const LENGTH: number = [...LINE].length;
if (LENGTH < 1 || LENGTH > 140) {
  throw new Error(`entry line is ${LENGTH} characters, must be 1-140`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
