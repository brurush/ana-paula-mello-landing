# Design system

Editorial e sóbrio. Referência: papelaria bem impressa de escritório de advocacia, não produto de
tecnologia.

## Cores

Três camadas em `assets/css/tokens.css`: `--global-*` (valor bruto), `--alias-*` (papel semântico) e
`--comp-*` (uso pontual). Componente nunca usa hex.

| Global | Valor | Papel |
|---|---|---|
| `--global-paper` | `#F6F3EE` | fundo principal |
| `--global-paper-alt` | `#EDE8E0` | bloco alternado |
| `--global-ink` | `#161A1D` | texto |
| `--global-ink-soft` | `#3C4348` | texto secundário |
| `--global-wine` | `#6E2B33` | ação |
| `--global-olive` | `#3F4A3C` | bloco informativo |
| `--global-metal` | `#B08D57` | filete |

Contraste: tinta sobre papel 15.1:1; vinho sobre papel 8.4:1; branco sobre vinho 8.4:1. Todos acima
de 4.5:1.

## Tipografia

Pilha de sistema (ADR 0005). Display serifada para título, sans humanista para corpo.

- Display: `Georgia, 'Iowan Old Style', 'Times New Roman', serif`
- Corpo: `system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif`
- Escala fluida com `clamp()`: 3.25rem → 1.75rem no h1; 1.125rem no corpo; 0.8125rem em rótulo.
- Entrelinha 1.15 em título, 1.65 em corpo. Medida máxima de 62 caracteres.

## Espaçamento

Base 8. `--global-space-1` 4px até `--global-space-12` 128px. Seção usa `clamp(64px, 9vw, 128px)`.

## Componentes

- **Filete**: linha de 1px em `--comp-filete`, largura de 48px, acima de rótulo de seção.
- **Rótulo de seção**: caixa alta, 0.75rem, `letter-spacing: 0.14em`, cor suave.
- **Botão primário**: fundo vinho, texto papel, sem raio (2px), padding 18px 32px, peso 600.
- **Botão secundário**: contorno de 1px em tinta, fundo transparente.
- **Lista editorial**: numerada com contador em serifada, sem ícone em círculo.
- **Bloco informativo**: fundo oliva a 8% de opacidade, filete à esquerda de 3px.
- **Acordeão**: `<details>` nativo, marcador substituído por filete, sem JS.
- **Monograma**: AM em `path`, traço de 16 unidades, filete metal sob a base. Favicon usa só o A.

## Movimento

Só opacidade e `translateY(12px)`, 400ms, `cubic-bezier(.2,.6,.2,1)`. Desligado em
`prefers-reduced-motion: reduce`.

## Proibições

Gradiente roxo ou azul, glassmorphism, blob, ícone em círculo colorido, três colunas iguais de
benefícios, emoji, contador animado, parallax, foto de banco de imagens, sombra difusa grande, raio
de 24px em tudo, ícone de robô.
