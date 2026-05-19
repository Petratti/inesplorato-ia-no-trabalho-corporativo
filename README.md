# Inesplorato — IA no trabalho corporativo

Landing page: **Diretrizes para adoção ética e estratégica da IA no trabalho corporativo**.

- **Produção:** [inesplorato.com.br/ia-no-trabalho-corporativo/](https://inesplorato.com.br/ia-no-trabalho-corporativo/)
- **Stack:** React 18 + Vite 6 + Tailwind CSS 4

Edite neste repositório, gere o build e publique **manualmente** no servidor (recomendado: pasta `static/`).

## Início rápido

```bash
nvm use          # Node 20+ (opcional)
npm ci
npm run dev      # desenvolvimento: http://localhost:5173/
```

## Build e preview

O comando **`build` só gera arquivos** — não abre navegador nem servidor. Depois do build, use **`preview`** (ou `preview:static`) para testar.

### Versão React (`dist/`)

SPA com React no cliente — é o build padrão do Vite.

```bash
npm run build          # gera dist/
npm run preview        # testa: http://localhost:4173/
```

Ou, com verificação de tipos antes:

```bash
npm run check          # typecheck + build (não inicia preview)
npm run preview
```

Durante o dia a dia, `npm run dev` (`http://localhost:5173/`) já basta; use `build` + `preview` para validar o que vai para produção.

### Versão estática (`static/`)

HTML pré-renderizado + mesmos CSS/JS/imagens do `dist`. Recomendado para publicação.

```bash
npm run build:static   # build + prerender → dist/ e static/
npm run preview:static # testa: http://127.0.0.1:8080/
```

| Saída | Conteúdo | Preview local |
|-------|----------|---------------|
| `dist/` | `index.html` vazio no `#root` + bundle React | `npm run preview` → porta **4173** |
| `static/` | HTML já renderizado no `#root` + `.htaccess` (Apache) | `npm run preview:static` → porta **8080** |

Ambas usam assets em `/assets/` (raiz do site). Detalhes e troubleshooting: [docs/DESENVOLVIMENTO.md](docs/DESENVOLVIMENTO.md).

## Publicação manual

Copie **todo o conteúdo** de `static/` (recomendado) ou `dist/` para a **raiz** do site público:

```
public/
├── index.html
├── .htaccess      # só em static/ (Apache)
└── assets/
```

A app roda em `/` (`base: '/'` em `vite.config.ts`). As meta tags `og:url` e `canonical` apontam para a URL oficial de marketing.

## Onde editar

| Pasta / arquivo | Conteúdo |
|-----------------|----------|
| `src/app/App.tsx` | Ordem das seções |
| `src/app/components/` | Seções da landing |
| `src/assets/` | Imagens |
| `src/svg/` | SVGs (hero, footer) |
| `src/styles/` | Tailwind, fontes, cores |
| `vite.config.ts` | `base: '/'` |

## Documentação

- **[docs/DESENVOLVIMENTO.md](docs/DESENVOLVIMENTO.md)** — fluxos, comandos, preview, publicação e problemas comuns
- **[docs/ASSETS.md](docs/ASSETS.md)** — mapa das imagens

## Scripts

| Script | Descrição |
|--------|-----------|
| `dev` | Desenvolvimento com hot reload (`5173`) |
| `build` | Gera `dist/` (não inicia servidor) |
| `preview` | Serve `dist/` localmente (`4173`) |
| `build:static` | `build` + `prerender` → `static/` |
| `preview:static` | Serve `static/` com MIME correto (`8080`) |
| `prerender` | Gera `static/` a partir de `dist/` (exige `build` antes) |
| `typecheck` | Verifica TypeScript |
| `check` | `typecheck` + `build` |
| `clean` | Remove `dist/` e `static/` |
