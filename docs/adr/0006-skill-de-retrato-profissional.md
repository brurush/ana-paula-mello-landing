---
id: "0006"
titulo: "Skill de retrato profissional e fundo de advocacia"
status: proposto
data: 2026-11-20
touches:
  - "assets/img/**"
  - "index.html"
---

# 0006 — Skill de retrato profissional e fundo de advocacia

## Contexto

A foto enviada é uma selfie com fundo de parede, luz frontal de celular e blusa preta sem estrutura.
A página precisa de um retrato sóbrio, com roupa de escritório e fundo compatível com advocacia. Não
há credencial de geração de imagem nesta máquina: `ABACUS_API_KEY`, `OPENAI_API_KEY`,
`ANTHROPIC_API_KEY`, `REPLICATE_API_TOKEN`, `STABILITY_API_KEY`, `GEMINI_API_KEY`, `GOOGLE_API_KEY` e
`HF_TOKEN` estão vazias, e o SDK `abacusai` não está instalado.

## Decisão

Skill escolhida: **`eachlabs/skills` → `ai-headshot-generation`**
(https://github.com/eachlabs/skills/blob/main/skills/ai-headshot-generation/SKILL.md).

Motivo: é a única das candidatas que trata explicitamente os dois eixos pedidos — troca de roupa
("navy business suit", "business casual") e troca de fundo ("blurred office interior", "studio
gradient") — e traz prescrição para o setor jurídico: estilo conservador e formal, fundo cinza ou
azul neutro, terno escuro.

Alternativas avaliadas e por que não foram escolhidas:

| Repositório | Limite |
|---|---|
| `lovstudio/professional-portrait-skill` | Exige `image_gen` embutido no runtime; não há ferramenta de imagem aqui |
| `Vivixiao980/exec-headshot-skill` | 11 presets executivos, mas exige `HEADSHOT_API_KEY` e não trata fundo jurídico |
| `motu-art/motu-skills` | Tem troca de roupa, porém é API paga e sem preset de advocacia |
| `artokun/krea2-identity-edit` | Local via ComfyUI: exigiria baixar modelos e GPU, fora do escopo desta landing |
| `cozymantis/clothes-swap-salvton-comfyui-workflow` | Mesmo limite do anterior, mais face-swap desnecessário |

## Consequências

- A skill não roda sem `EACHLABS_API_KEY`. Enquanto a chave não existir, a página usa o recorte
  determinístico já publicado (`assets/img/retrato.webp`, 800x1000, 58 KB).
- Quando a chave entrar no cofre de segredos, o fluxo é: gerar com a skill, revisar fidelidade ao
  rosto, recortar 4:5, exportar WebP e substituir o mesmo caminho — sem tocar em HTML ou CSS.
- Retoque de luz, fundo e roupa é aceitável sob o Provimento 205/2021; rosto sintético que não seja
  a profissional, não.
