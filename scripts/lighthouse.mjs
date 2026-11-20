// Runs Lighthouse (mobile, default throttling) against the standalone build for / and /uk and prints scores.
// Needs Chrome. Set CHROME_PATH if it is not found. Usage: npm run build && npm run lighthouse
import { spawn } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import lighthouse from "lighthouse";
import * as chromeLauncher from "chrome-launcher";

const PORT = process.env.LH_PORT || "3200";
const paths = (process.env.LH_PATHS || "/,/uk").split(",");

const server = spawn("node", [".next/standalone/server.js"], { env: { ...process.env, PORT, HOSTNAME: "127.0.0.1" }, stdio: "ignore" });
const stop = () => server.kill();
process.on("exit", stop);

async function waitUp() {
  for (let i = 0; i < 40; i++) {
    try {
      if ((await fetch(`http://127.0.0.1:${PORT}/`)).ok) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error("server did not start");
}

try {
  await waitUp();
  const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless=new", "--no-sandbox"] });
  mkdirSync("lighthouse-reports", { recursive: true });
  for (const p of paths) {
    const res = await lighthouse(`http://127.0.0.1:${PORT}${p}`, {
      port: chrome.port,
      output: "json",
      onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
    });
    const { categories, audits } = res.lhr;
    const score = (k) => Math.round(categories[k].score * 100);
    console.log(
      `${p.padEnd(6)} performance ${score("performance")}  accessibility ${score("accessibility")}  best-practices ${score("best-practices")}  seo ${score("seo")}  LCP ${audits["largest-contentful-paint"].displayValue}  CLS ${audits["cumulative-layout-shift"].displayValue}  TBT ${audits["total-blocking-time"].displayValue}`,
    );
    writeFileSync(`lighthouse-reports/${p === "/" ? "home" : p.slice(1).replace(/\//g, "-")}.json`, res.report);
  }
  await chrome.kill();
} finally {
  stop();
}
