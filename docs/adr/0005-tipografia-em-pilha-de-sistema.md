---
id: "0005"
titulo: "Tipografia em pilha de sistema"
status: aceito
data: 2026-11-20
touches:
  - "assets/css/**"
  - "index.html"
---

# 0005 — Tipografia em pilha de sistema

## Contexto

O plano previa Fraunces e Inter self-hosted em woff2. O download falhou nesta máquina: `curl` para
`fonts.googleapis.com` retornou código 35 (erro de conexão TLS). Nenhuma fonte foi baixada.

## Decisão

Usar pilha de sistema: `Georgia, 'Iowan Old Style', 'Times New Roman', serif` no display e
`system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif` no corpo. Zero requisição externa,
zero peso de fonte.

## Consequências

- Página sem dependência de rede e sem FOUT.
- Render varia entre sistemas: Georgia no Windows e no macOS é próxima, mas não idêntica.
- Se a cliente quiser a fonte da marca depois, basta baixar os woff2 e trocar a variável de família
  em `tokens.css`, sem tocar em componente.
