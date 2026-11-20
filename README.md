# Ana Paula Mello — Advocacia Trabalhista

Landing page de página única para atendimento em Direito do Trabalho. HTML, CSS e JS puros, sem
build e sem dependência de runtime.

- Produção: https://ana-paula-mello-landing.vercel.app
- Padrões do projeto: `AGENTS.md`
- Requisitos e critérios de aceite: `docs/briefing.md`
- Texto final: `docs/copy.md`
- Decisões: `docs/adr/` e `docs/decisoes.md`

## Rodar localmente

```bash
python -m http.server 8080
```

Abrir `http://localhost:8080`. Não abrir por `file://`: o JS é módulo e o navegador bloqueia.

## Verificar padrões

```bash
node scripts/check-standards.mjs
```

Sai com código 0 quando tudo passa e lista cada checagem executada.

## Publicar

```bash
vercel link --yes --project ana-paula-mello-landing
vercel deploy --yes
vercel --prod --yes
```

## Placeholders a preencher antes de divulgar

| Onde | Placeholder | O que entra |
|---|---|---|
| `assets/img/` | `retrato.webp` | foto sóbria da advogada, 800x1000 |
| `assets/img/` | `retrato.webp` | foto sóbria da advogada, 800x1000 |
| `assets/img/` | `og-image.png` | imagem 1200x630 para compartilhamento |

Enquanto os placeholders estiverem no ar, a página não deve ser divulgada como se fosse o site
oficial da profissional.

## Conteúdo e ética

O texto segue o Provimento nº 205/2021 da OAB: caráter informativo, sem promessa de resultado, sem
menção a honorários, sem superlativo e sem captação de clientela. `scripts/check-standards.mjs`
bloqueia a reintrodução desses termos.
