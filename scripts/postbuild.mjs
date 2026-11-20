// Copies static assets into the standalone output so it can run on its own.
import { cpSync, existsSync } from "node:fs";

const standalone = ".next/standalone";
if (!existsSync(standalone)) {
  console.error("postbuild: .next/standalone not found. Is output: 'standalone' set?");
  process.exit(1);
}
cpSync(".next/static", `${standalone}/.next/static`, { recursive: true });
if (existsSync("public")) cpSync("public", `${standalone}/public`, { recursive: true });
console.log("postbuild: copied .next/static and public into .next/standalone");
