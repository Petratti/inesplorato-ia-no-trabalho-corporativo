# Guia de desenvolvimento

App **React + Vite + Tailwind CSS v4**. Todo o trabalho de conteúdo e layout acontece neste repositório.

## O que vai ao ar

| Pasta | Produção |
|-------|----------|
| **`static/`** | **Sim** — é o único artefato de deploy |
| `dist/` | **Não** — build intermediário do Vite; o prerender lê o `dist/` e gera o `static/` |

Fluxo de publicação: `npm run build:static` → `npm run preview:static` → copiar **`static/`** para o servidor.

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

**Regra:** o preview de produção é `preview:static` (pasta que vai ao ar). O `preview` do `dist/` é opcional, só para debug do bundle React.

## Comandos

| Comando | O que faz |
|---------|-----------|
| `npm run dev` | Hot reload em `http://localhost:5173/` |
| `npm run build` | Gera `dist/` (intermediário; não publicar) |
| `npm run preview` | Testa `dist/` em `http://localhost:4173/` (opcional) |
| `npm run build:static` | Gera `static/` para deploy (`build` + prerender) |
| `npm run preview:static` | Testa `static/` antes de publicar (`http://127.0.0.1:8080/`) |
| `npm run prerender` | Só o passo estático (requer `dist/` existente) |
| `npm run typecheck` | Verifica TypeScript |
| `npm run check` | `typecheck` + `build` |
| `npm run clean` | Apaga `dist/` e `static/` |

## Duas pastas geradas pelo build

### `static/` — artefato de produção (único deploy)

- HTML pré-renderizado: o Puppeteer abre o preview do `dist/`, espera o React renderizar e grava o DOM em `static/index.html`.
- O `<head>` é o mesmo do `dist/index.html` (inclui o `<script type="module">` do bundle para modal e interações).
- Copia `dist/assets/` → `static/assets/` e inclui `.htaccess` para Apache.
- URLs normalizadas para **`./assets/…`** no HTML.
- **Gerar:** `npm run build:static`
- **Testar antes de publicar:** `npm run preview:static` → `http://127.0.0.1:8080/` (`scripts/serve-static.mjs`, MIME correto para módulos ES).
- **Publicar:** copie **tudo** de `static/` para o servidor. Nada mais.

### `dist/` — intermediário (não publicar)

- Build Vite padrão: `#root` vazio, React monta no cliente.
- Entrada obrigatória do `prerender`; não envie esta pasta ao servidor de produção.
- **Desenvolver:** `npm run dev`
- **Teste opcional do bundle:** `npm run build` → `npm run preview` → `http://localhost:4173/`

## Fluxo de trabalho

### Dia a dia (editar conteúdo)

1. Edite `src/app/components/`, `src/assets/`, etc.
2. `npm run dev` e confira em `http://localhost:5173/`.
3. Antes de publicar: `npm run check` (ou `npm run build:static`).

### Publicar (único fluxo de deploy)

```bash
npm run build:static
npm run preview:static
# http://127.0.0.1:8080/ — deve bater com o que vai ao ar
```

Depois copie **tudo** de `static/` para a subpasta no servidor (ex.: `ia-no-trabalho-corporativo/`). Mantenha `index.html` e `assets/` no mesmo nível.

### Teste opcional do `dist/` (não vai ao ar)

```bash
npm run build
npm run preview
# http://localhost:4173/
```

Útil para isolar problemas do bundle React antes de rodar o prerender.

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

dist/                           # Build Vite (gerado; não publicar)
static/                         # Deploy manual (único que vai ao ar)
```

## Caminhos dos assets

| Onde | Formato no HTML compilado |
|------|---------------------------|
| `dist/` (Vite) | `./assets/…` via `base: './'` em `vite.config.ts` |
| `static/` (prerender) | `./assets/…` após `normalizeAssetPaths` em `scripts/prerender.mjs` |

**Correto:** `src="./assets/index-….js"`, `href="./assets/index-….css"`, `src="./assets/hero-bg-….png"`.

**Evitar:** `/assets/…` (exige raiz do domínio) e `../assets/…` (pasta errada em relação ao `index.html`).

## URL base e previews locais

| Ambiente | URL local |
|----------|-----------|
| Dev | `http://localhost:5173/` |
| Preview `dist/` | `http://localhost:4173/` |
| Preview `static/` | `http://127.0.0.1:8080/` |

URL canônica de marketing (meta tags, não afeta paths dos assets): `https://inesplorato.com.br/ia-no-trabalho-corporativo/`

## Publicação manual

O deploy é **sempre** manual e **sempre** a partir de `static/`. Não use `dist/` em produção.

Estrutura a copiar para o servidor (subpasta do site):

```
index.html
assets/
  index-….js
  index-….css
  …imagens e vídeo
.htaccess          # incluído em static/ (Apache)
```

Não abra `static/index.html` via `file://` — módulos ES exigem HTTP.

Exemplo em subpasta (produção):

```
https://inesplorato.com.br/ia-no-trabalho-corporativo/index.html
https://inesplorato.com.br/ia-no-trabalho-corporativo/assets/index-….js
```

## Live Server e outros servidores

O projeto configura `.vscode/settings.json` com `liveServer.settings.root: "/static"` para a extensão Live Server.

**Limitações do Live Server:**

- Pode servir `.js` como `application/octet-stream` → erro em `<script type="module">`.
- Se a raiz do servidor não for a pasta publicada, `./assets/` pode não resolver (404).

**Preferir:** `npm run preview:static` ou `npm run preview` (para `dist/`).

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

Abra `http://localhost:4173/` (servidor local na raiz do `dist/`). Confira se rodou `npm run build` antes de `npm run preview`.

Em produção, a pasta publicada pode estar em qualquer subpath; os assets são relativos (`./assets/`).

### `prerender` falha

- Rode `npm run build` primeiro (o script usa `vite preview` na porta 4173).
- Puppeteer precisa de Chromium (instalado com `npm ci`).

### CSS/JS não carregam (404 ou MIME)

- Confira no HTML gerado se os links são **`./assets/`** (não `/assets/` nem `../assets/`). Se estiver errado, rode `npm run build:static` de novo.
- Sirva a pasta `static/` como raiz do servidor local, com `index.html` e `assets/` no mesmo nível.
- Prefira `npm run preview:static` em vez do Live Server.

### MIME `application/octet-stream` no módulo JS

Live Server e alguns servidores mínimos enviam `.js` com MIME errado.

- **Local (`static/`):** `npm run preview:static`
- **Local (`dist/`):** `npm run preview`
- **Apache:** use o `.htaccess` gerado em `static/`
- **Editor:** [Five Server](https://marketplace.visualstudio.com/items?itemName=yandeu.five-server) em vez do Live Server clássico

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
