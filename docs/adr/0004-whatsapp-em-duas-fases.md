---
id: "0004"
titulo: "WhatsApp em duas fases"
status: aceito
data: 2026-11-20
touches:
  - "index.html"
  - "assets/js/**"
  - "api/**"
---

# 0004 — WhatsApp em duas fases

## Contexto

A cliente ainda não tem conta no WhatsApp Business Platform. Um bot que não pode ser testado não
deve ser apresentado como pronto.

## Decisão

Fase 1, entregue agora: link `wa.me` com triagem de três campos montando a mensagem. Funciona sem
backend, sem custo e sem JS obrigatório. Fase 2, condicionada à conta Meta: webhook em
`api/whatsapp.js` com validação de assinatura, dedupe por id e máquina de estados.

## Consequências

- Contato funciona no primeiro dia.
- Fase 2 fica registrada como pendência, com as variáveis de ambiente necessárias.
- Sem armazenamento de dado pessoal na fase 1.
