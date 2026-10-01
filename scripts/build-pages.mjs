import { spawnSync } from "node:child_process";
import { readFileSync, existsSync } from "node:fs";

// The prerender preview reloads Vite's config; use an inherited environment flag.
const result = spawnSync(process.execPath, ["node_modules/vite/bin/vite.js", "build"], {
  stdio: "inherit",
  env: { ...process.env, GITHUB_PAGES: "true" },
});
if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);

const html = readFileSync("dist/index.html", "utf8");
if (!html.includes("Borges") || !html.includes("/borges/assets/")) {
  throw new Error("Pages output must contain the prerendered landing page and /borges/ assets.");
}
for (const match of html.matchAll(/(?:src|href)="(\/[^"#?]*)/g)) {
  const url = match[1];
  if (!url.startsWith("/borges/")) throw new Error(`Asset or link outside Pages base: ${url}`);
  const path = url.slice("/borges/".length);
  if (path && !existsSync(`dist/${path}`)) throw new Error(`Missing Pages file: ${path}`);
}
if (existsSync("dist/server") || existsSync("dist/server.js")) {
  throw new Error("Server code must not be included in the Pages artifact.");
}
console.log("Pages output verified: static HTML and local assets under /borges/.");
