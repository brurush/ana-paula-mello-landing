# AGENTS.md

Contrato de execução deste projeto. Regra que um script consegue verificar vive em
`scripts/check-standards.mjs`, não aqui. Máximo 120 linhas.

## Comandos

- Servir local: `python -m http.server 8080` (nunca `file://`, o JS é módulo).
- Verificar padrões: `node scripts/check-standards.mjs` — precisa sair com código 0.
- Publicar: `vercel link --yes --project ana-paula-mello-landing` → `vercel deploy --yes` →
  `vercel --prod --yes`.

## Estrutura

- `index.html` é a única página. Não criar segunda página sem pedido explícito.
- `assets/css/tokens.css` guarda todos os valores brutos. `assets/css/styles.css` só consome tokens.
- `assets/brand/` guarda os SVGs da marca. `assets/js/main.js` é o único script.
- `api/` existe para funções serverless; hoje só o webhook do WhatsApp.
- `docs/` guarda briefing, copy, design system e decisões. `docs/adr/` guarda um ADR por decisão.

## Regras de código

- Sem framework, sem build, sem bundler, sem dependência de runtime.
- Nenhum valor de cor literal fora de `tokens.css`. Componente usa `--alias-*` ou `--comp-*`.
- Nenhuma requisição a domínio externo. Fonte, ícone e imagem são locais ou do sistema.
- SVG sem `<text>` e sem referência remota: letra é `path`, cor é `currentColor` ou token.
- JS progressivo: com JS desligado a página continua legível e o WhatsApp continua clicável.
- Um `h1` por página, sem salto de heading.
- Nome de arquivo e de classe em inglês; texto e documentação em pt-BR.

## Regras de conteúdo

- Provimento nº 205/2021 da OAB: informativo, sóbrio, sem promessa de resultado, sem honorários,
  sem superlativo, sem captação. O script bloqueia os termos vedados.
- Nada de depoimento, prêmio, número de casos ou tempo de experiência inventado.
- Dado pessoal só o necessário: nome, cidade, tipo de problema e relato opcional.

## Padrões que evoluem

- Antes de editar um arquivo, consultar `docs/adr/ADR-INDEX.json` pelo caminho em `touches`.
- ADR não é apagado: vira `substituido` apontando para o substituto.
- Renomear token só com depreciação: cria o novo, marca o antigo, migra, remove depois.
- Protocolo de mudança: auditar → propor → confirmar → migrar → validar.
- Nunca criar componente que já exista; nunca sobrescrever código funcional; nunca reformatar
  código fora do escopo da mudança.

## Economia de tokens

- Ler só o trecho necessário: `grep` com contexto ou faixa estreita, nunca o arquivo inteiro.
- Vários arquivos na mesma etapa: uma chamada de leitura em lote.
- Não reler arquivo recém-escrito.
- `docs/copy.md` é a fonte única do texto; o HTML consome, não reexplica.
- Cada `docs/*.md` fica em até 150 linhas; detalhe de etapa única vai para `docs/adr/`.

## Verificação antes de publicar

1. `node scripts/check-standards.mjs` com código 0.
2. Página aberta no navegador, console limpo, 9 seções presentes.
3. 360, 768 e 1280 px sem rolagem horizontal.
4. Preview da Vercel com 200 e render conferido.
5. Produção com 200 e URL aberta no navegador.

## GUI

Toda interação com interface gráfica usa o agent-desktop e as skills `agent-desktop` e
`agent-desktop-windows`. Todos os recursos estão liberados: `--headed`, mouse e teclado físicos,
foco de janela, maximizar, restaurar e coordenadas. Preferir a ação mais confiável para o resultado
e confirmar por snapshot depois de clicar.
