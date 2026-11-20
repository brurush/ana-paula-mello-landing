---
id: "0001"
titulo: "Stack estática sem build"
status: aceito
data: 2026-11-20
touches:
  - "index.html"
  - "assets/**"
  - "api/**"
---

# 0001 — Stack estática sem build

## Contexto

Página única, uma pessoa não desenvolvedora vai manter o texto depois. Deploy na Vercel no plano
gratuito.

## Decisão

HTML, CSS e JS puros. Sem framework, sem bundler, sem etapa de compilação. Funções serverless em
`api/` quando houver webhook.

## Consequências

- Deploy é cópia de arquivo: sem build quebrar, sem cache de dependência.
- Editar texto é editar HTML, sem conhecer ferramenta.
- Sem componentização: o HTML repete estrutura. Aceitável em uma página.
- Trocar por framework depois exige reescrita, não migração incremental.
