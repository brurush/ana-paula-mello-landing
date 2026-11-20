# Briefing — Landing page Ana Paula Mello

Spec do projeto. Cada requisito tem critério de aceite verificável. Nada aqui é opinião: ou existe
evidência no relatório final, ou o item é declarado não verificado.

## Objetivo

Uma página, um objetivo: levar o visitante que teve um problema trabalhista a iniciar uma conversa
no WhatsApp com informação suficiente para ser atendido.

## Público

Trabalhador demitido ou com vínculo em risco, no celular, com pouco repertório jurídico e receio de
conflito. Lê rápido, decide por confiança e clareza, não por adjetivo.

## Requisitos

| ID | Requisito | Critério de aceite |
|---|---|---|
| R1 | Página única com as 9 seções da ordem definida | R1.AC1: as 9 seções existem e aparecem na ordem |
| R2 | Texto em conformidade com o Provimento 205/2021 da OAB | R2.AC1: zero ocorrência de termo vedado |
| R3 | Contato por WhatsApp com mensagem pré-preenchida | R3.AC1: `href` abre `wa.me` com texto codificado |
| R4 | Triagem de 3 campos antes do envio | R4.AC1: os 3 campos alteram a mensagem gerada |
| R5 | Identidade visual gerada por código | R5.AC1: 4 SVGs válidos, sem `<text>`, sem referência remota |
| R6 | Marca legível em tamanho pequeno | R6.AC1: favicon legível a 16 px |
| R7 | Paleta em tokens de 3 camadas | R7.AC1: nenhum hex fora de `tokens.css` |
| R8 | Acessibilidade AA | R8.AC1: contraste ≥ 4.5:1 no texto e no CTA |
| R9 | Navegação por teclado | R9.AC1: foco visível e skip link funcional |
| R10 | Respeito a `prefers-reduced-motion` | R10.AC1: animação desligada na media query |
| R11 | Responsivo sem rolagem horizontal | R11.AC1: 360, 768 e 1280 px com `scrollWidth` igual à viewport |
| R12 | Zero requisição externa | R12.AC1: nenhum `http(s)://` fora da allowlist |
| R13 | SEO e compartilhamento | R13.AC1: title, description, OG e JSON-LD `LegalService` presentes |
| R14 | LGPD | R14.AC1: aviso de privacidade visível e finalidade declarada |
| R15 | Padrões verificáveis por script | R15.AC1: `check-standards.mjs` sai com 0 |
| R16 | Orçamento de tokens de leitura | R16.AC1: `AGENTS.md` ≤ 120 linhas, cada `docs/*.md` ≤ 150 |
| R17 | Deriva de padrão detectável | R17.AC1: hex fora de `tokens.css` faz o script falhar |
| R18 | Preview aprovado antes da produção | R18.AC1: preview com 200 e render conferido |
| R19 | Publicação gratuita com nome próprio | R19.AC1: projeto `ana-paula-mello-landing` no Hobby, URL 200 |
| R20 | Orquestração registrada | R20.AC1: `docs/decisoes.md` lista skill e gate por etapa |

## Não objetivos

Blog, CMS, segunda página, área do cliente, agendamento, pagamento, analytics, pixel, multi-idioma,
dark mode completo, domínio próprio pago.

## Premissas

- Nome, OAB, telefone, cidade, e-mail e foto são placeholders até a cliente confirmar.
- Conta Meta do WhatsApp Business não existe ainda: o bot fica na fase 2.
- Sem rede para baixar fontes: tipografia em pilha de sistema (ADR 0005).
- Plano Vercel Hobby, sem cartão.

## Riscos

| Risco | Mitigação |
|---|---|
| Texto escorregar para promessa de resultado | grep bloqueante no script de padrões |
| Placeholder ir ao ar como se fosse definitivo | tabela de pendências no README e aviso no relatório |
| Bot do WhatsApp parecer pronto sem estar | fase 2 marcada como pendência explícita |
| Deriva de estilo em edição futura | tokens em 3 camadas + script de verificação |
