# Prompt de retrato profissional

Prompt pronto para colar em qualquer gerador de imagem com edição (Abacus.AI, Gemini/Nano Banana,
FAL, Eachlabs). Baseado no ADR 0006 e no preset jurídico da skill `ai-headshot-generation`.

## Prompt principal (pt-BR)

```
Transforme esta selfie em um retrato profissional de estúdio para uma advogada trabalhista.
Mantenha a identidade da pessoa exatamente como está: mesmo rosto, mesmo formato de olhos, nariz,
boca, tom de pele, cabelo cacheado volumoso e idade aparente. Não embeleze, não altere traços,
não mude a etnia nem a textura da pele.

Vestiário: blazer de alfaiataria em tom grafite ou azul-marinho escuro, corte reto, camisa branca
de colarinho fechado por baixo. Sem estampa, sem brilho, sem joia chamativa.

Fundo: interior de escritório de advocacia desfocado, com estante de livros jurídicos ao fundo,
tons neutros de cinza e madeira escura, profundidade de campo curta. Nada de balança, martelo,
coluna grega ou placa de lei.

Postura e expressão: ombros alinhados, coluna ereta, queixo levemente erguido, olhar direto para a
câmera, expressão serena e sóbria, boca fechada ou sorriso discreto. Sem sorriso aberto.

Luz e cor: luz de estúdio suave e difusa vinda da esquerda, preenchimento sutil à direita, sombra
suave sob o queixo. Paleta neutra e fria, contraste médio, saturação contida. Pele com textura
natural, sem plástico.

Enquadramento: retrato 4:5, do topo da cabeça até a altura do peito, rosto centralizado no terço
superior, espaço negativo acima da cabeça.

Estilo: fotografia editorial sóbria de escritório de advocacia. Realista, sem HDR, sem filtro de
rede social, sem aspecto de imagem gerada por IA.
```

## Prompt negativo

```
sorriso aberto, dentes à mostra, maquiagem pesada, pele lisa de plástico, rosto de outra pessoa,
traços alterados, cabelo liso, balança da justiça, martelo de juiz, coluna grega, livros com
título legível, fundo de Chroma key, gradiente roxo, neon, HDR, saturação alta, desfoque artificial
de retrato de celular, marca d'água, texto na imagem
```

## Parâmetros

| Item | Valor |
|---|---|
| Proporção | 4:5 |
| Resolução de saída | 800x1000 (o site redimensiona) |
| Formato final | WebP, qualidade 82 |
| Caminho no projeto | `assets/img/retrato.webp` |
| Fidelidade ao rosto | máxima; rejeitar a geração se o rosto não for reconhecível |

## Checklist antes de aceitar a imagem

1. O rosto é reconhecivelmente a Ana Paula Mello.
2. A roupa é blazer escuro com camisa clara, sem estampa.
3. O fundo é escritório desfocado, sem símbolo jurídico clichê.
4. A expressão é sóbria, sem sorriso aberto.
5. Não há texto, marca d'água ou artefato visível.
6. O enquadramento vai da cabeça ao peito, em 4:5.

Reprovou em 1 ou 5? Gere de novo. Reprovou em 2, 3, 4 ou 6? Ajuste o prompt e repita.
