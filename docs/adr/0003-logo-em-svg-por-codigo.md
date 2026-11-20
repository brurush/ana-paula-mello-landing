---
id: "0003"
titulo: "Logo em SVG por código"
status: aceito
data: 2026-11-20
touches:
  - "assets/brand/**"
  - "index.html"
---

# 0003 — Logo em SVG por código

## Contexto

Não há arquivo de marca fornecido. Imagem gerada por modelo tende a entregar resultado genérico e
sem controle de forma.

## Decisão

Monograma desenhado como `path` em SVG, com `stroke` de espessura constante e junta mitrada. Letra
nunca é `<text>`: não depende de fonte instalada. Quatro arquivos: positivo, negativo, mono e
favicon. O wordmark "Ana Paula Mello" fica em HTML ao lado, não dentro do SVG.

O monograma usa **AM** (Ana Mello), não APM: com três letras o mark fica ilegível a 44 px no
cabeçalho e a 16 px no favicon. "Paula" permanece no wordmark. O favicon usa só o "A".

## Consequências

- Escala sem perda e peso abaixo de 8 KB por arquivo.
- Variantes são triviais: `currentColor` no mono.
- Editar a forma exige mexer em coordenada, não em editor vetorial.
- Favicon usa só o "A", legível a 16 px.
