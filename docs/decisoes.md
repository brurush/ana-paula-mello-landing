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
- 2026-11-20 — `check-standards.mjs` com 14/14 e exit 0; deriva de hex testada e detectada (exit 1).
- 2026-11-20 — layout medido por CDP: 360, 768 e 1280 px com `scrollWidth` igual à viewport; console
  sem erro; `prefers-reduced-motion` desliga a transição; sem JS o conteúdo fica visível e os 3
  links de WhatsApp seguem clicáveis.
- 2026-11-20 — contraste calculado: tinta/papel 15.82, tinta-suave/papel 9.08, vinho/papel 9.23,
  branco/vinho 10.21.
- 2026-11-20 — repositório `brurush/ana-paula-mello-landing` criado pelo agent-desktop e `push` em
  `main`.
- 2026-11-20 — produção em https://ana-paula-mello-landing.vercel.app com 200, título, h1 e 8 seções
  conferidos; CSS, JS e SVGs com 200.
- 2026-11-20 — preview protegido por Vercel Authentication (retorna tela de login), então o render
  foi conferido em produção, não no preview. AC16 fica parcialmente atendido.
