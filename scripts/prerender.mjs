#!/usr/bin/env node
/**
 * Abre o build no preview, espera o React renderizar e grava o HTML resultante.
 * O <head> é copiado literalmente de dist/index.html.
 */
import { spawn } from "node:child_process";
import {
  cpSync,
  existsSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, "dist");
const DIST_HTML = join(DIST, "index.html");
const OUT = join(ROOT, "static");
const PORT = 4173;
const BASE = "/";
const URL = `http://127.0.0.1:${PORT}${BASE}`;

const GTM_BODY_START = "<!-- Google Tag Manager (noscript) -->";
const GTM_BODY_END = "<!-- End Google Tag Manager (noscript) -->";

const distHtml = readFileSync(DIST_HTML, "utf8");
const distHead = extractDistHead(distHtml);
const gtmBodyBlock = extractDistLines(32, 35);

function extractDistHead(html) {
  const match = html.match(/<head>[\s\S]*?<\/head>/);
  if (!match) {
    throw new Error("<head> não encontrado em dist/index.html");
  }
  return match[0];
}

function extractDistLines(startLine, endLine) {
  const lines = distHtml.split("\n");
  if (lines.length < endLine) {
    throw new Error(
      `dist/index.html: linhas ${startLine}-${endLine} fora do arquivo`,
    );
  }
  return lines.slice(startLine - 1, endLine).join("\n");
}

function replaceBlock(html, startMarker, endMarker, replacement) {
  const pattern = new RegExp(
    `${escapeRegExp(startMarker)}[\\s\\S]*?${escapeRegExp(endMarker)}`,
  );
  if (!pattern.test(html)) {
    throw new Error(`Bloco não encontrado no HTML renderizado: ${startMarker}`);
  }
  return html.replace(pattern, replacement);
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function applyDistHead(html) {
  return html.replace(/<head[^>]*>[\s\S]*?<\/head>/i, distHead);
}

async function waitForServer() {
  for (let i = 0; i < 40; i++) {
    try {
      const res = await fetch(URL);
      if (res.ok) return;
    } catch {
      /* preview ainda subindo */
    }
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error("Preview não respondeu. Rode npm run build antes.");
}

function stripReactScripts(html) {
  return html
    .replace(/<script\b[^>]*\btype=["']module["'][^>]*>\s*<\/script>\s*/gi, "")
    .replace(/<script\b[^>]*\btype=["']module["'][^>]*\/>\s*/gi, "");
}

function stripGtmRuntimeArtifacts(html) {
  return html
    .replace(
      /<script\b[^>]*\bsrc=["'][^"']*(?:googletagmanager|connect\.facebook|snap\.licdn)[^"']*["'][^>]*>\s*<\/script>\s*/gi,
      "",
    )
    .replace(/<script\b[^>]*>[\s\S]*?\bfbq\s*\([\s\S]*?<\/script>\s*/gi, "")
    .replace(
      /<noscript>\s*<img[^>]*facebook\.com\/tr[\s\S]*?<\/noscript>\s*/gi,
      "",
    );
}

/** Mesmos caminhos do dist/JS: /assets/… (base na raiz) */
function normalizeAssetPaths(html) {
  const origin = `http://127.0.0.1:${PORT}`;
  return html
    .split(`${origin}`)
    .join("")
    .split("./assets/")
    .join("/assets/")
    .split("/ia-no-trabalho-corporativo/assets/")
    .join("/assets/");
}

function isBlockedRequest(url) {
  return (
    url.includes("googletagmanager.com") ||
    url.includes("connect.facebook.net") ||
    url.includes("facebook.com/tr") ||
    url.includes("snap.licdn.com/li.lms-analytics/")
  );
}

async function main() {
  if (!existsSync(DIST_HTML)) {
    console.error("Erro: dist/index.html não encontrado. Execute: npm run build");
    process.exit(1);
  }

  const preview = spawn(
    "npx",
    ["vite", "preview", "--port", String(PORT), "--host", "127.0.0.1"],
    { cwd: ROOT, stdio: "ignore" },
  );

  try {
    await waitForServer();

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setRequestInterception(true);
    page.on("request", (req) => {
      if (isBlockedRequest(req.url())) {
        req.abort();
        return;
      }
      req.continue();
    });
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(URL, { waitUntil: "networkidle0", timeout: 120_000 });

    await page.waitForFunction(
      () => document.querySelector("#root")?.children.length > 0,
      { timeout: 60_000 },
    );
    await new Promise((r) => setTimeout(r, 2000));

    let html = await page.content();
    await browser.close();

    html = normalizeAssetPaths(html);
    html = replaceBlock(html, GTM_BODY_START, GTM_BODY_END, gtmBodyBlock);
    html = stripGtmRuntimeArtifacts(html);
    html = applyDistHead(html);

    rmSync(OUT, { recursive: true, force: true });
    mkdirSync(OUT, { recursive: true });
    cpSync(join(DIST, "assets"), join(OUT, "assets"), { recursive: true });
    cpSync(join(ROOT, "scripts", "static.htaccess"), join(OUT, ".htaccess"));
    writeFileSync(join(OUT, "index.html"), html, "utf8");

    console.log(`HTML estático gerado em: ${OUT}/`);
    console.log("  index.html  — paths /assets/ na raiz (igual dist)");
    console.log("  assets/     — cópia dos arquivos do build");
  } finally {
    preview.kill("SIGTERM");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
