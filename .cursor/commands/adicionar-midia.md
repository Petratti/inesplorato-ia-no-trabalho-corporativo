# Adicionar item — Saiu na mídia

Assistente para incluir um novo card na seção **Saiu na mídia** desta landing.

## Regras

- **Não invente** título, descrição, URL, posição nem logo. Colete tudo com o usuário antes de editar arquivos.
- Use **AskQuestion** quando estiver disponível; senão, pergunte no chat, **uma informação por vez** (ou um bloco curto relacionado).
- Leia `src/app/components/MediaSection.tsx` no início: importe os logos existentes e o array `mediaArticles`; mostre a **lista numerada atual** (posição, título).
- Só altere arquivos depois do usuário **confirmar o resumo**.
- Não commite nem faça push, a menos que o usuário peça.

## Arquivos

| Arquivo | Papel |
|---------|--------|
| `src/app/components/MediaSection.tsx` | Array `mediaArticles`, imports dos logos e UI da seção |
| `src/assets/` | PNG do logo (ex.: `media-veja.png`) |

## O que perguntar (nesta ordem)

1. **Posição na lista** — Após mostrar os itens atuais: *“Em qual posição entra o novo item? (1 = topo, {N+1} = final)”*.
2. **Veículo / outlet** — Nome da publicação (ex.: Veja).
3. **Nome do arquivo do logo** — Ex.: `media-veja.png` em `src/assets/` (sugira a partir do veículo).
4. **Título**, **descrição** e **URL** do artigo (`https://...`).
5. **Logo** — Caminho local, URL/Figma ou imagem no chat; salve em `src/assets/`.
6. **Figma (opcional)** — Link do card/logo: use MCP Figma se ajudar; confirme textos e posição com o usuário.
7. **Resumo e confirmação** — Só edite após *“Posso aplicar?”*.

## Implementação

1. Adicionar `import mediaNome from "@/assets/media-nome.png";` no topo de `MediaSection.tsx` (se ainda não existir).
2. Inserir objeto no array `mediaArticles` na posição escolhida:

```ts
{
  logoSrc: mediaNome,
  title: "...",
  description: "...",
  url: "https://...",
},
```

3. Garantir o PNG em `src/assets/`.
4. Rodar `npm run check`.
5. Sugerir `npm run dev` para revisar no navegador.

## Layout (não alterar)

- Mobile (≤768px): logo à **esquerda**.
- Desktop (≥769px): logo **centralizado** no bloco de 236px.
- Gap entre cards: `24px`.
