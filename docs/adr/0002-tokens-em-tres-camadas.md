---
id: "0002"
titulo: "Tokens em três camadas"
status: aceito
data: 2026-11-20
touches:
  - "assets/css/**"
  - "index.html"
---

# 0002 — Tokens em três camadas

## Contexto

A marca pode mudar de cor sem que ninguém queira tocar em cada componente. Edição futura por outra
pessoa precisa ser segura.

## Decisão

`--global-*` guarda o valor bruto, `--alias-*` o papel semântico, `--comp-*` o uso pontual.
Componente referencia alias ou comp, nunca hex. Hex só existe em `tokens.css`.

## Consequências

- Trocar a cor da marca é editar uma linha do alias.
- `check-standards.mjs` detecta hex fora de `tokens.css` e falha.
- Renomear token exige depreciação com substituto, não substituição no lugar.
- Uma camada a mais de indireção para ler o CSS.
