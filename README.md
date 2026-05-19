# Inesplorato — IA no trabalho corporativo

Landing page: **Diretrizes para adoção ética e estratégica da IA no trabalho corporativo**.

- **Produção:** [inesplorato.com.br/ia-no-trabalho-corporativo/](https://inesplorato.com.br/ia-no-trabalho-corporativo/)
- **Stack:** React 18 + Vite 6 + Tailwind CSS 4

Edite neste repositório, gere o build e publique **manualmente** no servidor.

**O que vai ao ar é sempre a pasta `static/`** — nunca envie `dist/` para produção. O `dist/` é etapa intermediária do build (e serve para testar o bundle React localmente).

## Início rápido

```bash
nvm use          # Node 20+ (opcional)
npm ci
npm run dev      # desenvolvimento: http://localhost:5173/
```

## Build e preview

O comando **`build` só gera arquivos** — não abre navegador nem servidor.

### Publicar (sempre `static/`)

```bash
npm run build:static   # gera dist/ (intermediário) + static/ (vai ao ar)
npm run preview:static # confira antes de subir: http://127.0.0.1:8080/
```

Copie **somente** o conteúdo de `static/` para o servidor.

### `dist/` — só desenvolvimento e validação

SPA React gerada pelo Vite. Usada pelo prerender e, opcionalmente, para testar o bundle antes de gerar o `static/`. **Não publique `dist/`.**

```bash
npm run build          # gera dist/
npm run preview        # teste opcional: http://localhost:4173/
```

Durante o dia a dia, `npm run dev` (`http://localhost:5173/`) basta para editar. Antes de publicar: `npm run build:static` + `npm run preview:static`.

| Saída | Vai ao ar? | Uso |
|-------|------------|-----|
| `static/` | **Sim** | HTML pré-renderizado + `.htaccess` (Apache) → deploy manual |
| `dist/` | **Não** | Intermediário do build; preview local opcional (porta **4173**) |

Ambas usam **`./assets/`** no HTML (nunca `/assets/` na raiz do domínio nem `../assets/`).

Detalhes: [docs/DESENVOLVIMENTO.md](docs/DESENVOLVIMENTO.md).

## Publicação manual

**Sempre** copie **todo o conteúdo** da pasta `static/` para a subpasta do site (ex.: `…/ia-no-trabalho-corporativo/`). Mantenha `index.html` e a pasta `assets/` **no mesmo nível**:

```bash
npm run build:static
npm run preview:static   # revisão local
# depois: upload/cópia de static/ → servidor
```

Estrutura no servidor (cópia de `static/`):

```
ia-no-trabalho-corporativo/
├── index.html
├── .htaccess
└── assets/
    ├── index-….js
    ├── index-….css
    └── …
```

Configuração no Vite: `base: './'` em `vite.config.ts`. As meta tags `og:url` e `canonical` apontam para a URL oficial de marketing (independente do caminho dos assets).

## Onde editar

| Pasta / arquivo | Conteúdo |
|-----------------|----------|
| `src/app/App.tsx` | Ordem das seções |
| `src/app/components/` | Seções da landing |
| `src/assets/` | Imagens |
| `src/svg/` | SVGs (hero, footer) |
| `src/styles/` | Tailwind, fontes, cores |
| `vite.config.ts` | `base: './'` (assets relativos) |

## Documentação

- **[docs/DESENVOLVIMENTO.md](docs/DESENVOLVIMENTO.md)** — fluxos, comandos, preview, publicação e problemas comuns
- **[docs/ASSETS.md](docs/ASSETS.md)** — mapa das imagens

## Scripts

| Script | Descrição |
|--------|-----------|
| `dev` | Desenvolvimento com hot reload (`5173`) |
| `build` | Gera `dist/` (intermediário; não publicar) |
| `preview` | Testa `dist/` localmente (`4173`) — opcional |
| `build:static` | Gera `static/` para produção (`build` + prerender) |
| `preview:static` | Testa `static/` antes do deploy (`8080`) |
| `prerender` | Gera `static/` a partir de `dist/` (exige `build` antes) |
| `typecheck` | Verifica TypeScript |
| `check` | `typecheck` + `build` |
| `clean` | Remove `dist/` e `static/` |
