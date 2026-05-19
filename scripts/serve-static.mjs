#!/usr/bin/env node
/**
 * Serve static/ com Content-Type correto (módulos ES exigem application/javascript).
 * Evita erro do Live Server: "application/octet-stream" em <script type="module">.
 */
import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..", "static");
const HOST = process.env.HOST ?? "127.0.0.1";
const PORT = Number(process.env.PORT ?? 8080);

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".htm": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".webm": "video/webm",
  ".mp4": "video/mp4",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function mimeFor(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return MIME[ext] ?? "application/octet-stream";
}

function resolveFile(urlPath) {
  const pathname = decodeURIComponent((urlPath ?? "/").split("?")[0]);
  const rel = pathname === "/" ? "index.html" : pathname.replace(/^\//, "");
  const resolved = path.normalize(path.join(ROOT, rel));
  if (!resolved.startsWith(ROOT)) return null;
  return resolved;
}

async function send(res, filePath) {
  const body = await fs.readFile(filePath);
  res.writeHead(200, { "Content-Type": mimeFor(filePath) });
  res.end(body);
}

const server = http.createServer(async (req, res) => {
  const filePath = resolveFile(req.url);
  if (!filePath) {
    res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Forbidden");
    return;
  }

  try {
    const stat = await fs.stat(filePath);
    if (stat.isDirectory()) {
      await send(res, path.join(filePath, "index.html"));
      return;
    }
    await send(res, filePath);
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not Found");
  }
});

try {
  await fs.access(path.join(ROOT, "index.html"));
} catch {
  console.error("Erro: rode npm run build:static antes.");
  process.exit(1);
}

server.listen(PORT, HOST, () => {
  console.log(`Preview: http://${HOST}:${PORT}/`);
});
