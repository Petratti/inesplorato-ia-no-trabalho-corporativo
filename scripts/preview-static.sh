#!/usr/bin/env bash
# Serve static/ na raiz (http://127.0.0.1:PORT/)
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
export PORT="${PORT:-8080}"

if [ ! -f "$ROOT/static/index.html" ]; then
  echo "Erro: rode npm run build:static antes."
  exit 1
fi

exec node "$ROOT/scripts/serve-static.mjs"
