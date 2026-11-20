# PROMPT — Landing Page "Ana Paula Mello — Advocacia Trabalhista"

> Entregue este arquivo inteiro ao agente. Ele é autossuficiente: contém escopo, regras de
> negócio, skills escolhidas por pesquisa, padrões de projeto, critérios de aceite e o passo a
> passo de git + Vercel. Execute na ordem da seção 14 e não pule os gates de verificação.

---

## 0. Papel e objetivo

Você é um agente de engenharia de front-end sênior com formação em design editorial. Sua tarefa é
criar, do zero, um projeto novo em `C:\Users\bruru\Projects\ana-paula-mello-landing` — pasta nova,
repositório git novo, sem reaproveitar nada de `colab-api-v2` — contendo uma landing page de página
única para a advogada trabalhista **Ana Paula Mello**, com identidade visual gerada por código
(SVG), contato por WhatsApp e publicação em produção na Vercel.

Regra de ouro: **nada de invenção**. Nome, OAB, telefone, cidade, endereço, e-mail, foto e domínio
são placeholders explícitos (`<OAB_UF_NUMERO>`, `<NUMERO_WHATSAPP>`, `<CIDADE_UF>`, …) até a cliente
confirmar. Nunca crie depoimento, prêmio, número de casos, tempo de experiência ou credencial.

---

## 1. Entregáveis

1. Pasta `ana-paula-mello-landing` com o site estático completo e funcional.
2. Identidade: `logo.svg`, `logo-negativo.svg`, `logo-mono.svg`, `favicon.svg` (+ `favicon.ico` se
   trivial), todos desenhados como código, sem dependência externa.
3. Documentação: `README.md`, `AGENTS.md`, `docs/briefing.md`, `docs/copy.md`,
   `docs/design-system.md`, `docs/decisoes.md` (ADRs curtos).
4. Repositório git local com histórico de commits convencionais e remote no GitHub.
5. Deploy de produção na Vercel com URL respondendo 200.
6. Relatório final de verificação (seção 12) com evidência de cada item.

---

## 2. Regra de negócio — advocacia trabalhista (Brasil)

### 2.1 Quem é o visitante e o que ele sente
Trabalhador demitido, com verbas atrasadas, horas extras não pagas, assédio, acidente, vínculo não
reconhecido (PJ/pejotização), gestante demitida, ou ainda empregado com medo de represália. Ele
chega pelo celular, muitas vezes à noite, com pouco repertório jurídico e medo de "entrar em briga".
A página fala com ele em linguagem comum, sem juridiquês, e reduz o medo de dar o primeiro passo.

### 2.2 Compliance obrigatório — Provimento 205/2021 da OAB
Fonte: https://www.oab.org.br/leisnormas/legislacao/provimentos/205-2021

**Proibido no texto, no bot e em qualquer metadado:**
- promessa ou garantia de resultado, "ganho certo", "você vai receber", percentual de êxito;
- valores de honorários, "consulta grátis", "só paga se ganhar", desconto, parcelamento;
- superlativo e autoengrandecimento ("melhor advogada", "referência", "líder");
- comparação com outros profissionais e ostentação (carro, viagem, escritório imponente);
- relato de caso concreto identificável como isca comercial;
- captação agressiva ("ligue agora, últimas vagas", contagem regressiva, pop-up de urgência).

**Permitido e desejável:** conteúdo informativo e educativo, áreas de atuação, nome + número da OAB,
foto sóbria da profissional, dados de contato, explicação do método de atendimento, prazos legais
em caráter informativo, política de privacidade.

### 2.3 Conteúdo jurídico que a página pode afirmar (informação, não promessa)
- Prazo geral para ajuizar reclamação trabalhista: **2 anos** contados da extinção do contrato,
  alcançando os últimos **5 anos** do contrato (art. 7º, XXIX, CF).
- Verbas típicas de rescisão: saldo de salário, aviso prévio, férias vencidas e proporcionais + 1/3,
  13º proporcional, FGTS e multa de 40%, seguro-desemprego (quando cabível).
- Horas extras: adicional mínimo de 50%; banco de horas e intervalo intrajornada têm regras próprias.
- Assédio moral e sexual: apuração de fatos, provas e medidas cabíveis.
- Acidente e doença ocupacional: CAT, estabilidade provisória e afastamento pelo INSS.
Sempre em tom informativo, com a ressalva de que cada caso depende de análise individual.

### 2.4 LGPD
Formulário e bot coletam apenas o necessário (nome, cidade, tipo de problema, relato livre opcional).
Aviso de privacidade visível, finalidade declarada, base legal "procedimentos preliminares a
contrato", sem cookies de rastreamento de terceiros, sem pixel de rede social na v1.

---

## 3. Skills selecionadas por pesquisa (uma por quesito)

Use a skill certa em cada etapa. **Não instale o que não for indispensável**: para as skills
externas, leia o `SKILL.md` direto do repositório e siga o método; instale só quando o script
auxiliar for realmente necessário (o usuário pediu mínimo de instalações).

| Quesito | Skill / fonte escolhida | Por que esta | Como usar aqui |
|---|---|---|---|
| Planejamento e organização | `spec-driven-development-skill` (mariano-aguero) + `blueprint` (adezdev) — https://github.com/mariano-aguero/spec-driven-development-skill · https://github.com/adezdev/blueprint | Fluxo spec → plano → tarefas com IDs rastreáveis e gate humano; evita "vibe-coding" e perda de escopo | `docs/briefing.md` = spec com requisitos `R1..Rn` e critérios `R1.AC1`; `docs/decisoes.md` registra divergências |
| Planejamento local (já instaladas) | `perform_subtask_plan`, `prototype`, `research`, `writing-for-agents`, `tdd`, `verify`, `code-review`, `simplify` | Já disponíveis na máquina, sem instalar nada | `plan` antes de codar; `verify` no fim; `code-review` no diff antes do commit final |
| Padrões de landing page | `landing-page-design` (agenticskills.io) + `landing-page-optimizer` (aiagentskills/skills) + `landing-page-cro` (afeezadebayo) | Cobrem um objetivo único, message match, hero de 4 elementos, prova real, redução de fricção, priorização ICE | Aplicar a estrutura da seção 6 e a checklist da seção 12 |
| Anti-"cara de IA" | `impeccable` e `taste-skill` (citadas em https://agentskillsmarketplace.dev/awesome-agent-skills/) + skill embutida `artifact-design` | Impõem restrições de design e combatem o visual genérico de template | Ler antes de escrever CSS; proibições da seção 5.3 são bloqueantes |
| Logo por código | `logo-craft` (allexp1) — https://github.com/allexp1/logo-craft-AI-skill · alternativa `brand-kit` (mtblck) — https://mattblack.space/skills/brand-kit/ · `svg-logo-designer` (rknall) | Desenham SVG por código com correção óptica, teste a 16px, variantes claro/escuro/mono e auditoria técnica | Método da seção 5; SVG escrito à mão, sem `<text>` com fonte externa |
| WhatsApp com robô | `whatsapp-cloud-api` (sickn33/agentic-awesome-skills) + `whatsapp-skills` (wassengerhq) — https://wassenger.com/whatsapp-skills | Cloud API oficial, janela de 24h, templates, validação de webhook, dedupe | Fase 1 link + triagem; fase 2 webhook em `api/whatsapp.js` (seção 7) |
| Padrões que evoluem sem quebrar | `agents-md` (mblode/agent-skills) + `standards` (bkudria/cc-plugins) + `rules-check-drift` (coleam00/skills) — https://github.com/mblode/agent-skills · https://github.com/bkudria/cc-plugins | Contrato de execução enxuto, regra que vira script determinístico e detecção de deriva contra o git | Seção 3.1: `AGENTS.md` + `scripts/check-standards.mjs` |
| Design system evolutivo | `design-system-tokens` (rampstackco/claude-skills) + `design-sync` (tinh2/skills-hub-registry) — https://github.com/rampstackco/claude-skills · https://github.com/tinh2/skills-hub-registry | Tokens em 3 camadas (global → alias → componente) e auditoria de "token drift" | Seção 3.1 e 5.2: trocar marca sem tocar em componente |
| Decisões rastreáveis | `adr-kit` (rvdbreemen) + `adr-ops` (0xdarkmatter/claude-mods) — https://github.com/rvdbreemen/adr-kit · https://github.com/0xdarkmatter/claude-mods | `ADR-INDEX.json` com `touches:` por caminho; o agente consulta o índice em vez de reler todos os ADRs | `docs/adr/` + índice gerado |
| Economia de tokens | Progressive disclosure (claude.com/docs/skills/overview) + `claude-skills-performance-optimization` — https://claudecodeguides.com/claude-skills-performance-optimization/ | 3 camadas de carregamento, orçamento pós-compactação e teste de cold start | Seção 3.2: orçamento obrigatório por arquivo e por turno |
| Repositórios de mercado (referência) | `mattpocock/skills` (já instalado), `obra/superpowers`, `ComposioHQ/awesome-claude-skills`, `VoltAgent/awesome-agent-skills`, `sickn33/agentic-awesome-skills` | São as coleções mais citadas do ecossistema; servem de catálogo, não de dependência | Consultar só se faltar uma skill específica; nunca instalar em massa |

Regra: skill externa é **método**, não pacote. Se o `SKILL.md` pedir `npm install` ou `pip install`,
pare e proponha a alternativa sem instalação antes de seguir.

### 3.1 Padrões que sempre podem mudar sem perder o padrão

Duas camadas, sempre nesta ordem: **advisória** (`AGENTS.md`, em linguagem natural) e
**determinística** (`scripts/check-standards.mjs`, que falha com exit 1). Toda regra que um script
consegue verificar sai do Markdown e vira verificação — Markdown que ninguém executa apodrece.

**Contrato (`AGENTS.md`)**
- Máximo **120 linhas**, na raiz, sem duplicar o `README.md`. Regras universais na raiz; regra de
  subpasta só se existir subpasta com regra própria.
- Cada linha passa em dois testes: *dead weight* (se remover não causa erro, corte) e *precisão
  nociva* (se a regra quebra em caso de borda, generalize em vez de acumular exceção).
- Toda regra tem um "porquê" de uma linha. Regra sem porquê é a primeira a ser violada.

**Decisões (`docs/adr/`)**
- Um ADR por decisão relevante, arquivo `NNNN-titulo.md`, status `proposto | aceito | substituído`.
- Frontmatter com `touches:` listando caminhos e globs afetados (ex.: `assets/css/**`, `index.html`).
- `docs/adr/ADR-INDEX.json` gerado a partir dos ADRs: `{ id, titulo, status, touches, substitui }`.
  Antes de editar um arquivo, consultar o índice por caminho — não reler todos os ADRs.
- ADR nunca é apagado: vira `substituído` apontando para o novo. `docs/decisoes.md` guarda só o
  resumo cronológico de uma linha por ADR.

**Tokens em 3 camadas (`assets/css/tokens.css`)**
- `--global-*` valores brutos (nunca usados por componente) → `--alias-*` papel semântico
  (`--alias-superficie`, `--alias-texto`, `--alias-acao`) → `--comp-*` uso pontual.
- Componente referencia **alias ou comp, nunca hex**. Trocar a cor da marca = editar só o alias.
- Renomear token é proibido no lugar: cria o novo, marca o antigo como `@deprecated` com o
  substituto, migra os usos, remove na versão seguinte. Validar que o render não mudou antes do commit.

**Script de padrões (`scripts/check-standards.mjs`, zero dependência, só `node:` builtin)**
Verifica e falha se: hex/rgb fora de `tokens.css`; `http://` ou `https://` externo em HTML/CSS;
`<text>` ou referência remota em SVG; mais de um `h1` ou salto de heading; termo vedado pela OAB;
arquivo acima do orçamento de peso; link relativo quebrado; `AGENTS.md` acima de 120 linhas;
ADR citado no índice que não existe no disco. Rodar antes de cada commit e no fim da execução.

**Protocolo de mudança** (qualquer alteração futura, inclusive por outra pessoa): auditar → propor
→ confirmar → migrar → validar. Nunca criar componente que já exista no manifesto; nunca sobrescrever
código funcional; nunca "consertar" estilo fora do escopo da mudança.

### 3.2 Economia de tokens (orçamento obrigatório)

**Carregamento em 3 camadas** — metadados (frontmatter de 1–2 linhas, sempre no contexto) →
`SKILL.md` como mapa, ≤ 200 linhas → `references/` e `scripts/` lidos só quando a etapa exigir.
Nunca copiar conteúdo entre `SKILL.md` e `references/`: resumo curto apontando para o arquivo.

**Regras de leitura neste projeto**
- Ler só o trecho necessário: `grep` com contexto ou `file_read` com faixa estreita, nunca o arquivo
  inteiro por reflexo. Vários arquivos na mesma etapa → `batch_file_read` em uma chamada.
- Nunca reler arquivo que você acabou de escrever; a confirmação da escrita é o próprio resultado.
- `docs/copy.md` é a única fonte do texto: o HTML não reexplica, só consome.
- Documento por assunto (`briefing`, `copy`, `design-system`, `decisoes`), cada um ≤ 150 linhas;
  detalhe que só vale para uma etapa vai para `references/` e é lido sob demanda.
- Relatório final e mensagens mostram o diff e a evidência, não o conteúdo inteiro dos arquivos.

**Pós-compactação** — sobrevivem os primeiros ~5.000 tokens de uma skill invocada, com orçamento
compartilhado de ~25.000. Por isso: instrução crítica no topo do `SKILL.md`, nada de preâmbulo, e
skill de uso manual marcada com `disable-model-invocation: true` para não gastar orçamento de
descrição automática.

**Teste de cold start** — sessão limpa, invocar a skill e contar as linhas carregadas: acima de 500
linhas é sinal de refatorar para `references/`. Registrar a contagem em `docs/decisoes.md`.

**Teto por turno** — no máximo os arquivos que serão alterados naquele turno, mais o índice de ADR
relevante. Se a etapa exigir mais que isso, divida em etapas menores em vez de carregar tudo.

### 3.3 Orquestração das skills — avaliar e testar até publicar

As skills não são executadas em paralelo nem em bloco: cada etapa tem **uma skill condutora**, um
**gate verificável** e um **fallback**. Sem gate aprovado, a etapa seguinte não começa.

| Etapa | Skill condutora | Gate (evidência obrigatória) | Se falhar |
|---|---|---|---|
| 1. Entender e especificar | `spec-driven-development-skill` + `blueprint` | `docs/briefing.md` com `R1..Rn` e `R1.AC1`, revisado contra a seção 2 | reescrever a spec; não avançar |
| 2. Planejar | `perform_subtask_plan` | plano com arquivos e ordem, sem passo ambíguo | refazer o plano |
| 3. Pesquisar o que falta | `research` | fato com fonte primária registrado em `docs/decisoes.md` | marcar como premissa explícita |
| 4. Escrever o texto | `landing-page-cro` + `landing-page-optimizer` | `docs/copy.md` passa no grep da OAB (AC2) e tem hero de 4 elementos | reescrever a seção reprovada |
| 5. Desenhar identidade | `logo-craft` + `impeccable` + `taste-skill` | AC4, AC5, AC6 e a lista de proibições da 5.3 | simplificar o SVG, não "enfeitar" |
| 6. Construir a página | `tdd` (onde houver lógica) + `prototype` para dúvida de layout | AC1, AC3, AC8, AC9 | corrigir e repetir o gate |
| 7. Verificar de verdade | `verify` | AC1–AC9 com saída de comando ou imagem, não com opinião | corrigir; 2 tentativas e vira BLOCKED |
| 8. Revisar e enxugar | `code-review` e depois `simplify` | nenhum achado alto em aberto; diff menor sem mudar comportamento | corrigir antes do commit |
| 9. Publicar | `vercel` (CLI) + `agent-desktop` | preview 200 → produção 200 → URL aberta no navegador (AC11, AC16–AC18) | manter preview e reportar bloqueio |

**Regras do laço**
- Um gate por etapa, com a evidência colada no relatório. "Parece certo" não é gate.
- Duas tentativas no mesmo gate e o item vira **BLOCKED**: registrar o que falta, seguir para a etapa
  seguinte que não dependa dele e voltar só quando o insumo chegar.
- Nunca pular a etapa 7 para "ganhar tempo": publicar sem verificar é o único erro irreversível aqui.
- Ordem de leitura de skill: metadados → `SKILL.md` → `references/` só do trecho necessário (3.2).
- Ao final, `docs/decisoes.md` registra qual skill conduziu cada etapa e onde houve divergência.

**Escada de verificação até a publicação** (cada degrau só sobe com o anterior verde)
1. Arquivo local aberto no navegador, console limpo, 9 seções presentes.
2. Responsivo em 360/768/1280 sem scroll horizontal; teclado e foco visível.
3. `node scripts/check-standards.mjs` exit 0.
4. Preview da Vercel respondendo 200 e render conferido no navegador.
5. Produção respondendo 200, `curl -I` e URL aberta no navegador pelo agent-desktop.
6. Registro final: URL, commit publicado, hora e o que ficou pendente.

---

## 4. Stack e padrões do projeto

- **HTML + CSS + JS puro, sem framework e sem build.** Zero dependência de runtime, deploy instantâneo
  na Vercel, manutenção por quem não é dev. Nada de React/Next/Tailwind nesta v1.
- Uma única página (`index.html`), âncoras internas, sem menu de navegação completo (landing page tem
  um objetivo só).
- CSS com custom properties em `:root`, mobile-first, `clamp()` para tipografia fluida, grid/flex.
  Sem pré-processador, sem `!important`, sem estilo inline.
- JS em módulo único, progressivo: se o JS falhar, a página continua legível e o WhatsApp continua
  clicável.
- Sem requisição a domínio de terceiros: fontes, ícones e imagens são locais. Ícones em SVG inline.
- Nomes de arquivo e classe em inglês, texto e comentários de documentação em pt-BR.

Estrutura:

```
ana-paula-mello-landing/
├─ index.html
├─ api/whatsapp.js          # fase 2 (webhook do bot)
├─ assets/
│  ├─ css/tokens.css        # 3 camadas: global → alias → comp
│  ├─ css/styles.css
│  ├─ js/main.js
│  ├─ fonts/                # woff2 subset latin, SIL OFL
│  ├─ img/                  # foto da advogada, og-image.png
│  └─ brand/                # logo.svg, logo-negativo.svg, logo-mono.svg, favicon.svg
├─ scripts/check-standards.mjs   # verificador determinístico, zero dependência
├─ docs/{briefing,copy,design-system,decisoes}.md
├─ docs/adr/                # NNNN-titulo.md + ADR-INDEX.json
├─ AGENTS.md                # ≤ 120 linhas
├─ README.md
├─ .gitignore
├─ .gitattributes
└─ PROMPT.md
```

`.gitignore` mínimo: `node_modules/`, `.vercel/`, `.env*`, `*.log`, `Thumbs.db`, `.DS_Store`.
`.gitattributes`: `* text=auto eol=lf` e `*.woff2 binary`.

---

## 5. Identidade visual e logo por código

### 5.1 Direção
Editorial, sóbrio, feminino sem ser decorativo. Referência mental: escritório de advocacia com
papelaria bem impressa — não startup de tecnologia.

### 5.2 Paleta (OKLCH, com fallback hex)
- Papel `#F6F3EE` · Papel alt `#EDE8E0`
- Tinta `#161A1D` · Tinta suave `#3C4348`
- Acento vinho `#6E2B33` (usar com parcimônia: CTA, filete, destaque)
- Apoio oliva `#3F4A3C` (blocos informativos)
- Metal `#B08D57` (só filetes e detalhe do monograma)
Contraste mínimo AA (4.5:1) em todo texto; verificar por cálculo, não a olho.

Esses valores entram em `tokens.css` como `--global-*` e nunca são usados direto: o CSS consome
`--alias-superficie`, `--alias-texto`, `--alias-acao`, `--alias-filete`. Trocar a cor da marca no
futuro é editar uma linha do alias, sem tocar em nenhum componente (seção 3.1).

### 5.3 Proibições de design (bloqueantes — é o que dá "cara de IA")
Gradiente roxo/azul, glassmorphism, blob flutuante, card com ícone em círculo colorido, três
colunas iguais de "benefícios", emoji na interface, contador animado, parallax, foto de banco de
imagens (aperto de mãos, martelo, balança, coluna grega), texto genérico tipo "eleve seus
resultados", sombra difusa grande, borda arredondada de 24px em tudo, ícone de robô/robô falante.

### 5.4 Tipografia
Duas famílias open-source self-hosted (SIL OFL), subset latin, woff2, `font-display: swap`:
display serifada com personalidade (ex.: Fraunces) para títulos; sans humanista (ex.: Inter) para
corpo. Fallback de sistema obrigatório. Se o download falhar, usar `Georgia, 'Times New Roman',
serif` + `system-ui` e registrar a decisão em `docs/decisoes.md`.

### 5.5 Logo — "Ana Paula Mello"
Método (inspirado em `logo-craft`):
1. Brainstorm de 3 conceitos com metáforas distintas, todos evitando balança, martelo e coluna.
   Sugestão de partida: monograma **APM** em geometria única, com o "A" e o "M" compartilhando um
   traço; alternativa de selo circular com filete duplo; alternativa de wordmark com "APM" como
   inicial de seção.
2. Desenhar em SVG com `viewBox="0 0 240 240"`, `path` puro, `fill="currentColor"` no monograma.
   **Proibido `<text>` com fonte externa** — se houver letra, converter para `path`.
3. Correção óptica: alinhamento em grade de 8, espessura de traço constante, contra-forma aberta.
4. Teste do "squint": renderizar a 16px e a 24px e conferir legibilidade; se borrar, simplificar.
5. Entregar 4 arquivos: positivo, negativo (fundo tinta), mono (1 cor) e `favicon.svg`.
6. Auditoria automática antes de aprovar: XML válido, `viewBox` presente, nenhuma referência
   externa (`http`, `@import`, `xlink:href` remoto), nenhum `<text>`, tamanho < 8 KB por arquivo.
7. Wordmark "Ana Paula Mello" em texto HTML ao lado do monograma (não dentro do SVG), para manter
   o SVG independente de fonte.

---

## 6. Estrutura da página (uma promessa, um CTA)

Ordem das seções, com o CTA de WhatsApp repetido em 3 pontos:

1. **Hero** — headline com a dor ("Foi demitido e não recebeu o que era devido?"), subheadline
   informativa, CTA primário "Falar no WhatsApp", sinal de confiança sóbrio (nome + OAB + cidade),
   foto profissional. Sem carrossel, sem vídeo automático.
2. **Você se reconhece?** — 6 situações reais em lista editorial (não em cards com ícone):
   demissão sem verbas, horas extras, assédio, acidente/doença ocupacional, gestante, PJ irregular.
3. **Como funciona o atendimento** — 4 passos: relato → análise de documentos → orientação sobre
   caminhos (acordo ou ação) → acompanhamento. Sem prometer prazo de resultado.
4. **Direitos que valem conhecer** — bloco informativo com prazos e verbas da seção 2.3, com
   ressalva de análise individual.
5. **Documentos para a primeira conversa** — checklist (CTPS, holerites, contrato, extrato FGTS,
   comprovante de demissão, comunicações). Qualifica o lead e reduz fricção.
6. **Sobre Ana Paula Mello** — formação e atuação em Direito do Trabalho, OAB, atendimento
   presencial e online. Sem superlativo, sem prêmio inventado.
7. **Perguntas frequentes** — 6 perguntas que quebram objeção: preciso pagar para começar? (responder
   sem falar de honorários: "as condições são explicadas na primeira conversa"), e se eu ainda estiver
   empregado?, preciso de testemunha?, quanto tempo demora?, atende online?, o que levar?
8. **CTA final** — bloco de contato com WhatsApp, e-mail e cidade.
9. **Rodapé** — nome, OAB, endereço (se houver), política de privacidade, aviso de que o conteúdo é
   informativo e não substitui consulta, ano corrente.

Copy em pt-BR, frases curtas, voz ativa, zero juridiquês. Guardar o texto final em `docs/copy.md`
antes de colar no HTML.

---

## 7. WhatsApp

### 7.1 Fase 1 — link com triagem (entregar sempre, custo zero)
- Botão flutuante fixo (canto inferior direito, 56px, `aria-label="Falar no WhatsApp"`) + CTAs no
  corpo. `href="https://wa.me/<NUMERO_WHATSAPP>?text=<mensagem urlencoded>"`.
- Mini-triagem de 3 selects (tipo de problema, ainda trabalha na empresa?, cidade) que monta a
  mensagem pré-preenchida. Sem backend, sem armazenar nada.
- `rel="noopener"`, `target="_blank"`, e o link funciona mesmo com JS desligado (fallback com
  mensagem padrão).

### 7.2 Fase 2 — robô com WhatsApp Cloud API (só se a cliente fornecer a conta Meta)
- `api/whatsapp.js` (Vercel Function, Node, sem dependência externa):
  - `GET` → valida `hub.verify_token` e devolve `hub.challenge`.
  - `POST` → valida `X-Hub-Signature-256` com HMAC-SHA256 do corpo cru usando `WHATSAPP_APP_SECRET`;
    rejeita assinatura inválida com 401.
  - Dedupe por `message.id` (Map com TTL; documentar que é efêmero em serverless).
  - Máquina de estados: menu 1 rescisão · 2 horas extras · 3 assédio · 4 acidente · 5 outros →
    pede nome → cidade → relato curto → confirma e informa que uma pessoa vai responder.
  - Respostas sóbrias, sem promessa, sem honorários, com aviso de privacidade e opção "falar com
    uma pessoa" a qualquer momento.
- Variáveis de ambiente na Vercel (nunca no repositório): `WHATSAPP_TOKEN`,
  `WHATSAPP_PHONE_NUMBER_ID`, `WHATSAPP_VERIFY_TOKEN`, `WHATSAPP_APP_SECRET`. Criar `.env.example`
  só com nomes e placeholders.
- Se a conta Meta não existir, entregar a fase 1 e registrar a fase 2 como pendência com o passo a
  passo do que a cliente precisa fornecer. Não simular bot funcionando.

---

## 8. Acessibilidade, performance, SEO, LGPD

- HTML semântico (`header/main/section/footer`), um `h1`, hierarquia de headings sem salto.
- Foco visível, navegação por teclado, `skip link`, contraste AA, `alt` descritivo na foto.
- `prefers-reduced-motion` respeitado; animação só de opacidade/transform, ≤ 400ms.
- Meta tags: `title` ≤ 60 caracteres, `description` ≤ 155, Open Graph, `lang="pt-BR"`,
  `theme-color`, canonical com `<DOMINIO>`.
- Dados estruturados JSON-LD `LegalService` (nome, área `Direito do Trabalho`, endereço, telefone) —
  sem `aggregateRating` inventado.
- Peso: página < 250 KB sem a foto; foto em WebP com `width/height` explícitos; zero request externo.
- `robots.txt` e `sitemap.xml` simples.

---

## 9. Git e GitHub

1. `git init -b main` na pasta nova; `git config` já é `brurush <brurush@gmail.com>`.
2. Commits convencionais em pt-BR, pequenos e temáticos, nesta ordem aproximada:
   `chore: cria estrutura do projeto` → `docs: adiciona briefing e decisoes` →
   `feat: adiciona identidade visual em svg` → `feat: implementa landing page` →
   `feat: adiciona contato por whatsapp` → `docs: documenta projeto e padroes` →
   `chore: prepara deploy na vercel`.
3. Remote: `gh` **não está instalado** nesta máquina. Criar o repositório pelo navegador com o
   agent-desktop (github.com/new, nome `ana-paula-mello-landing`, privado, sem README) e então
   `git remote add origin <URL>` + `git push -u origin main`. Se o clique por ref for negado, parar
   e pedir a URL do repositório ao usuário — não instalar `gh` sem autorização.
4. Nunca commitar `.env`, token, número de telefone real em texto de exemplo ou dado pessoal.

---

## 10. Vercel — publicar de graça, com nome próprio

### 10.1 Plano e custo
- Conta logada: `brurush-5979`, time `brurush-gmailcoms-projects`, plano **Hobby (gratuito, sem
  cartão)**. Manter tudo dentro do Hobby: nada de plano pago, nada de add-on, nada de domínio pago.
- Endereço gratuito: subdomínio `*.vercel.app` incluído no Hobby. Não comprar domínio nesta v1; se a
  cliente quiser `anapaulamello.adv.br` depois, é uma etapa separada com DNS próprio.
- Conferir limites atuais em https://vercel.com/pricing antes de prometer cota — não citar número de
  banda, invocação ou deploy que não esteja na página no momento da execução.

### 10.2 Nome do projeto
- Nome do projeto Vercel: `ana-paula-mello-landing` (minúsculas, hífen, sem acento, sem espaço).
- URL de produção esperada: `https://ana-paula-mello-landing.vercel.app`.
- Se o nome já estiver tomado no escopo global da Vercel, usar `ana-paula-mello-advocacia` e registrar
  a troca em `docs/decisoes.md`. Nunca inventar sufixo aleatório sem registrar.
- O nome do projeto Vercel, o nome do repositório e a pasta local devem ser iguais — isso evita
  confusão em `vercel link` e nos deploys seguintes.

### 10.3 Sequência de publicação
1. `vercel link --yes --project ana-paula-mello-landing` na raiz do projeto.
2. `vercel deploy --yes` → **preview**. Testar a URL de preview: 200, render, WhatsApp, responsivo.
3. Só com o preview aprovado: `vercel --prod --yes` → produção.
4. `vercel inspect <url>` e `vercel ls ana-paula-mello-landing` para ler estado e histórico.
5. `curl -I https://ana-paula-mello-landing.vercel.app` → `HTTP/2 200`.
6. Abrir a URL no navegador pelo agent-desktop e conferir o render real (não só o status).
7. Registrar URL, horário e commit em `README.md` e no relatório final.

### 10.4 Quando usar o agent-desktop na Vercel
Usar o painel pelo agent-desktop quando a CLI não bastar: ler log de build com erro, conferir o
domínio atribuído, checar o status do deployment ou autorizar algo que só existe na interface.
Caminho: `vercel.com/brurush-gmailcoms-projects/ana-paula-mello-landing` → aba *Deployments*.
Todos os recursos do agent-desktop estão liberados (seção 11): pode trazer a janela para frente,
maximizar e usar mouse/teclado quando isso resolver mais rápido.
As ferramentas MCP da Vercel **não estão carregadas** nesta sessão (o `mcp.json` prioriza o
agent-desktop e o limite de 50 tools corta a Vercel). Usar CLI + agent-desktop; não reordenar o
`mcp.json` sem pedir.

---

## 11. Uso obrigatório do agent-desktop

Toda interação com GUI passa pelo agent-desktop e pelas skills `agent-desktop` +
`agent-desktop-windows`. **Todos os recursos estão liberados** — o usuário revogou em 2026-11-20 as
restrições anteriores de modo headless:

- Pode usar `--headed`, mouse e teclado físicos, `desktop_focus_window`, `desktop_maximize`,
  `desktop_restore`, arrastar, rolar, colar e qualquer ação por ref ou por coordenada.
- Prefira a ação mais confiável para o resultado, não a mais restrita: se o clique por ref não
  produzir efeito, use coordenada, teclado ou atalho.
- `desktop_click` reporta `verified: false` com frequência: confirmar por `desktop_snapshot` ou
  `desktop_is` depois. Entrega não garante efeito — isso continua valendo como boa prática, não
  como restrição.
- Janela minimizada pode ser restaurada com `desktop_restore` quando precisar de interação.
- `desktop_type` pode retornar `POLICY_DENIED` em alguns campos: cair para `desktop_set_value` ou
  para digitação por teclado físico.
- Se uma ação for negada pelo gate de segurança, registrar e tentar o caminho alternativo (CLI,
  API ou outra superfície) antes de considerar bloqueado.

Usos previstos: criar o repositório no GitHub, abrir a URL publicada, conferir o logo renderizado a
16px, testar o link do WhatsApp, ler o painel e os logs da Vercel, confirmar o domínio
`*.vercel.app` atribuído e capturar screenshots de evidência para o relatório final.

---

## 12. Critérios de aceite (verificáveis — cada um com evidência)

| # | Critério | Como provar |
|---|---|---|
| AC1 | `index.html` abre sem erro de console e com as 9 seções na ordem da seção 6 | abrir no navegador e listar os `section` presentes |
| AC2 | Nenhum termo vedado pela OAB no texto | `grep -i` por "garant", "melhor advogad", "grátis", "honorário", "só paga", "êxito" → 0 ocorrências |
| AC3 | Zero requisição a domínio externo | `grep -E "https?://" index.html assets/css/*.css` só com wa.me e canonical |
| AC4 | SVG do logo válido, sem `<text>`, sem referência externa, < 8 KB | parse XML + `grep` + `wc -c` |
| AC5 | Logo legível a 16px | screenshot 16px e 24px conferido por imagem |
| AC6 | Contraste AA em texto e CTA | cálculo de razão de contraste reportado |
| AC7 | Botão WhatsApp abre `wa.me` com mensagem codificada | inspecionar `href` gerado e abrir |
| AC8 | Responsivo em 360px, 768px e 1280px sem scroll horizontal | medir `scrollWidth` em cada largura |
| AC9 | `prefers-reduced-motion` desliga animação | emular a media query e conferir |
| AC10 | Repositório com remote e `git log` com os commits da seção 9 | `git remote -v` + `git log --oneline` |
| AC11 | Deploy de produção respondendo 200 | `curl -I` + URL aberta no navegador |
| AC12 | Nenhum segredo no repositório | `git grep -iE "token|secret|apikey"` só em `.env.example` com placeholder |
| AC13 | Padrões verificáveis por script, não por prosa | `node scripts/check-standards.mjs` sai com código 0 e lista as checagens executadas |
| AC14 | Orçamento de tokens respeitado | `wc -l AGENTS.md` ≤ 120; cada `docs/*.md` ≤ 150; nenhuma skill carregada acima de 500 linhas no cold start |
| AC15 | Deriva de padrão detectável | alterar um hex fora de `tokens.css` de propósito → script falha com exit 1; reverter e voltar a 0 |
| AC16 | Preview da Vercel aprovado antes da produção | URL de preview com `curl -I` 200 e render conferido no navegador |
| AC17 | Projeto publicado no Hobby, com nome próprio e sem custo | `vercel project ls` mostra `ana-paula-mello-landing`; URL `*.vercel.app` responde 200; nenhum plano pago ou domínio comprado |
| AC18 | Orquestração registrada | `docs/decisoes.md` lista a skill condutora e o gate de cada uma das 9 etapas da seção 3.3 |

Fechar com um relatório curto: item, resultado, evidência. Item não verificado é declarado como não
verificado — nunca como concluído.

---

## 13. Fora de escopo (não fazer sem pedido explícito)

Blog, CMS, múltiplas páginas, área do cliente, agendamento integrado, pagamento, e-mail marketing,
pixel de anúncio, Google Analytics, multi-idioma, dark mode completo, instalação de `gh`/Docker/
dependências novas, alteração de qualquer arquivo em `colab-api-v2`.

---

## 14. Ordem de execução

1. Ler este prompt inteiro e as skills da seção 3 (só o `SKILL.md`, sem instalar).
2. `perform_subtask_plan` → plano em passos com os arquivos a criar.
3. Criar pasta, `git init -b main`, `.gitignore`, `.gitattributes`, `README.md`, `AGENTS.md`.
4. `docs/briefing.md` com requisitos `R1..Rn` + critérios `R1.AC1`; `docs/decisoes.md` com o
   template de ADR e a tabela de orquestração da seção 3.3 preenchida.
5. `docs/copy.md` com todo o texto, revisado contra a seção 2.2 antes de ir para o HTML.
6. `docs/design-system.md` (paleta, tipografia, espaçamento, componentes) e o CSS base.
7. Logo em SVG + variantes + favicon, com a auditoria da seção 5.5.
8. `index.html` completo e `assets/js/main.js` (reveal, triagem do WhatsApp, ano do rodapé).
9. Verificar AC1–AC9 e corrigir o que falhar.
10. `scripts/check-standards.mjs` + `docs/adr/ADR-INDEX.json`; rodar o script até exit 0 (AC13–AC15).
11. `api/whatsapp.js` + `.env.example` (fase 2) ou registrar pendência.
12. `code-review` no diff, `simplify` se houver gordura, commit final.
13. Criar repositório remoto pelo agent-desktop, `push`.
14. `vercel link` → `vercel deploy` (preview) → testar → `vercel --prod` → verificar AC10–AC18 e
    entregar o relatório com a URL.

Ao terminar, informe: URL de produção, caminho do repositório, o que ficou como placeholder
aguardando a cliente e o que não pôde ser verificado.
