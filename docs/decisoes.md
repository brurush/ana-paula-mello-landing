# Decisões

Resumo cronológico. O detalhe de cada decisão está em `docs/adr/`.

## Orquestração das skills

| Etapa | Skill condutora | Gate | Resultado |
|---|---|---|---|
| 1. Especificar | `spec-driven-development-skill` + `blueprint` | `R1..R20` com critério por requisito | aprovado — `docs/briefing.md` |
| 2. Planejar | `perform_subtask_plan` | plano com arquivos e ordem | aprovado — 9 etapas |
| 3. Pesquisar | `research` | fato com fonte primária | aprovado — Provimento 205/2021, prazos constitucionais |
| 4. Texto | `landing-page-cro` + `landing-page-optimizer` | grep da OAB = 0 e hero de 4 elementos | aprovado — `docs/copy.md` |
| 5. Identidade | `logo-craft` + `impeccable` + `taste-skill` | SVG válido, 16 px legível, contraste AA | aprovado — `assets/brand/` |
| 6. Construir | `tdd` + `prototype` | estrutura, responsivo, reduced motion | aprovado — `index.html` |
| 7. Verificar | `verify` | AC1–AC9 com saída de comando ou imagem | ver relatório final |
| 8. Revisar | `code-review` → `simplify` | nenhum achado alto em aberto | ver relatório final |
| 9. Publicar | `vercel` CLI + `agent-desktop` | preview 200 → produção 200 → URL aberta | ver relatório final |

## ADRs

| ID | Decisão | Status |
|---|---|---|
| 0001 | Stack estática sem build | aceito |
| 0002 | Tokens em três camadas | aceito |
| 0003 | Logo em SVG por código | aceito |
| 0004 | WhatsApp em duas fases | aceito |
| 0005 | Tipografia em pilha de sistema | aceito |

## Registro

- 2026-11-20 — projeto criado; spec, copy e design system escritos antes do HTML.
- 2026-11-20 — download de fontes bloqueado por TLS (curl rc=35); fallback aplicado e registrado no
  ADR 0005.
