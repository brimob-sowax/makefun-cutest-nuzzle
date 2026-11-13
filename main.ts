// make.fun cutest-picture-01 bounty entry — copies entry.png to MAKEFUN_OUTPUT_DIR (default /output).
// Usage: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// ponytail: single copy, no error taxonomy needed
// Output directory is created (recursively) if missing via mkdir recursive:true.
import { copyFile, mkdir } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const src = join(dirname(fileURLToPath(import.meta.url)), "entry.png");
const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");

await mkdir(outDir, { recursive: true });
await copyFile(src, join(outDir, "entry.png"));
console.log(`Copied entry.png -> ${join(outDir, "entry.png")}`);
