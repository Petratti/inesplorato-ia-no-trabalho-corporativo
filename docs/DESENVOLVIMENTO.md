# Guia de desenvolvimento

App **React + Vite + Tailwind CSS v4**. Todo o trabalho de conteúdo e layout acontece neste repositório.

## Requisitos

| Ferramenta | Versão |
|------------|--------|
| Node.js    | 20+ (`nvm use` na raiz) |
| npm        | 10+ |

## Primeira vez

```bash
cd inesplorato-ia-no-trabalho-corporativo
npm ci
npm run dev
```

Abra `http://localhost:5173/`.

## Build vs preview

| Comando | Gera arquivos? | Sobe servidor? |
|---------|----------------|----------------|
| `npm run build` | Sim → `dist/` | Não |
| `npm run preview` | Não | Sim → serve `dist/` |
| `npm run build:static` | Sim → `dist/` + `static/` | Não |
| `npm run preview:static` | Não | Sim → serve `static/` |
| `npm run dev` | Não (compila sob demanda) | Sim → desenvolvimento |

**Regra:** sempre rode `preview` ou `preview:static` **depois** do build correspondente.

## Comandos

| Comando | O que faz |
|---------|-----------|
| `npm run dev` | Hot reload em `http://localhost:5173/` |
| `npm run build` | Gera `dist/` (SPA React) |
| `npm run preview` | Testa `dist/` em `http://localhost:4173/` |
| `npm run build:static` | `build` + captura HTML → pasta `static/` |
| `npm run preview:static` | Testa `static/` em `http://127.0.0.1:8080/` |
| `npm run prerender` | Só o passo estático (requer `dist/` existente) |
| `npm run typecheck` | Verifica TypeScript |
| `npm run check` | `typecheck` + `build` |
| `npm run clean` | Apaga `dist/` e `static/` |

## Duas saídas de build

### 1. `dist/` — versão React (não estática)

- O `index.html` tem um `#root` vazio; o React monta a página no navegador.
- Modal RD Station e interações dependem do JavaScript.
- **Desenvolver:** `npm run dev`
- **Validar build:** `npm run build` → `npm run preview` → `http://localhost:4173/`
- **Publicar:** copie o conteúdo de `dist/` para a raiz do host.

### 2. `static/` — HTML pré-renderizado

- O Puppeteer abre o `preview` do Vite, espera o React renderizar e grava o DOM em `static/index.html`.
- O `<head>` é o mesmo do `dist/index.html` (inclui o `<script type="module">` do bundle).
- Copia `dist/assets/` para `static/assets/` e inclui `.htaccess` para Apache.
- **Gerar:** `npm run build:static`
- **Testar:** `npm run preview:static` → `http://127.0.0.1:8080/`
- **Publicar:** copie o conteúdo de `static/` (recomendado).

O servidor de `preview:static` é `scripts/serve-static.mjs` (MIME `application/javascript` correto para módulos ES).

## Fluxo de trabalho

### Dia a dia (editar conteúdo)

1. Edite `src/app/components/`, `src/assets/`, etc.
2. `npm run dev` e confira em `http://localhost:5173/`.
3. Antes de publicar: `npm run check`.

### Testar build React antes de publicar

```bash
npm run build
npm run preview
# http://localhost:4173/
```

### Testar e publicar versão estática

```bash
npm run build:static
npm run preview:static
# http://127.0.0.1:8080/
```

Depois copie **tudo** de `static/` para a raiz do site no servidor.

## Estrutura do projeto

```
src/
├── app/
│   ├── App.tsx                 # Montagem das seções
│   └── components/             # Seções da landing
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── PeopleSection.tsx
│       ├── DownloadModal.tsx   # Modal + RD Station
│       └── …
├── assets/                     # PNGs, vídeo
├── svg/                        # Paths SVG (hero, footer)
├── styles/                     # CSS global e Tailwind
└── main.tsx

scripts/
├── prerender.mjs               # Gera static/ via Puppeteer
├── serve-static.mjs            # Preview local de static/
├── preview-static.sh           # npm run preview:static
└── static.htaccess             # Copiado para static/.htaccess

dist/                           # Build Vite (gerado)
static/                         # HTML estático (gerado)
```

## URL base

A aplicação é servida na **raiz** (`/`). Em `vite.config.ts`: `base: '/'`.

| Ambiente | URL |
|----------|-----|
| Dev | `http://localhost:5173/` |
| Preview `dist/` | `http://localhost:4173/` |
| Preview `static/` | `http://127.0.0.1:8080/` |

URL canônica de marketing (meta tags): `https://inesplorato.com.br/ia-no-trabalho-corporativo/`

## Publicação manual

O deploy é manual. Estrutura esperada na raiz do host:

```
index.html
assets/
  index-….js
  index-….css
  …imagens e vídeo
.htaccess          # opcional; incluído em static/ para Apache
```

- **Recomendado:** conteúdo de `static/` (HTML já renderizado + `.htaccess`).
- **Alternativa:** conteúdo de `dist/` se o host servir SPA React com MIME correto.

Não abra `static/index.html` via `file://` — módulos ES e paths `/assets/` exigem HTTP.

## Live Server e outros servidores

O projeto configura `.vscode/settings.json` com `liveServer.settings.root: "/static"` para a extensão Live Server.

**Limitações do Live Server:**

- Pode servir `.js` como `application/octet-stream` → erro em `<script type="module">`.
- Se a URL for `…/static/index.html` em vez da raiz, `/assets/` aponta para o lugar errado (404).

**Preferir:** `npm run preview:static`.

**Alternativas:** extensão [Five Server](https://marketplace.visualstudio.com/items?itemName=yandeu.five-server), ou abrir só a pasta `static/` como workspace e servir na raiz.

## Alterações comuns

### Texto ou layout de uma seção

Abra o componente em `src/app/components/` (ex.: `AboutSection.tsx`). Use classes Tailwind; o tema está em `src/styles/theme.css`.

### Nova imagem

1. Coloque o arquivo em `src/assets/` (nome legível, ex.: `hero-bg.png`).
2. Importe no componente: `import heroBg from "@/assets/hero-bg.png"`.
3. `npm run check` e, se for publicar estático, `npm run build:static`.

### Modal de download (RD Station)

Configuração em `src/app/components/DownloadModal.tsx` (`RDSTATION_FORM_ID`, script do formulário).

### Reordenar ou remover seções

Edite `src/app/App.tsx`.

## Problemas comuns

### Build falha com “Cannot find module”

- `npm ci` na raiz do projeto.
- Node 20+: `node -v`.
- Caminho do import de imagem igual ao nome do arquivo em `src/assets/`.

### Página em branco no `preview` (dist)

Abra `http://localhost:4173/` na **raiz**, não em subpath antigo (`/ia-no-trabalho-corporativo/`).

Confira se rodou `npm run build` antes de `npm run preview`.

### `prerender` falha

- Rode `npm run build` primeiro (o script usa `vite preview` na porta 4173).
- Puppeteer precisa de Chromium (instalado com `npm ci`).

### Live Server sem CSS/JS

O `static/index.html` referencia `/assets/...` na raiz do servidor. URL incorreta: `http://localhost:5500/static/index.html` → assets em `/assets/` (fora de `static/`) → 404.

**Solução:** URL `http://localhost:PORT/` com `index.html` e `assets/` no mesmo nível, ou `npm run preview:static`.

### MIME `application/octet-stream` no módulo JS

Live Server e alguns servidores mínimos enviam `.js` com MIME errado.

- **Local:** `npm run preview:static`
- **Apache:** use o `.htaccess` gerado em `static/`
- **Editor:** Five Server em vez do Live Server clássico

### `typecheck` e `.png`

Tipos em `src/vite-env.d.ts`. Se faltar, confira se o arquivo existe.

## Stack

- Vite 6 + `@vitejs/plugin-react`
- React 18
- Tailwind 4 (`@tailwindcss/vite`)
- Puppeteer (prerender)
- Alias `@/` → `src/`

## Referências

- Mapa de imagens: [ASSETS.md](./ASSETS.md)
- Fontes e licenças: `ATTRIBUTIONS.md`
