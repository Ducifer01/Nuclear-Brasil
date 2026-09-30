# Nuclear Survival

Biblioteca offline-first de sobrevivência civil e continuidade, com foco
inicial em emergências nucleares e radiológicas. Ver
[`docs/ROADMAP.md`](docs/ROADMAP.md) para a visão completa do produto.

**Princípios do projeto** (não negociáveis — ver roadmap):

- Sem IA no produto. IA é usada apenas pelo desenvolvedor, fora do produto.
- Sem login, sem servidor obrigatório, sem banco de dados.
- Funciona offline depois da primeira visita (PWA + service worker).
- Toda orientação crítica tem fonte, data e nível de autoridade.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de produção
npm run lint    # ESLint
```

## Stack

- **Next.js 16** (App Router) + **TypeScript** + **Tailwind CSS v4**
- Fontes self-hosted via `next/font/google` (Archivo, IBM Plex Sans, IBM Plex
  Mono) — nenhuma chamada de rede em tempo de execução para carregar fonte.
- Conteúdo de "Aprender" como dados TypeScript tipados em
  `src/content/learn/` (frontmatter equivalente: categoria, nível de risco,
  nível de autoridade, status de revisão, fontes) — cada artigo segue o
  framework O QUE SABEMOS / RECOMENDADO / POR QUE FUNCIONA / INCERTO / MITOS.
- PWA: `public/manifest.json` + `public/sw.js` (service worker escrito à
  mão, cache-first para estáticos, network-first com fallback para páginas).
- Calculadoras determinísticas em `src/lib/calculators.ts` — sem IA, puras e
  testáveis.

## Estrutura

```text
src/
  app/            rotas (App Router) — espelha a IA do roadmap (§3)
  components/     Header, TabBar, AppShell, checklist, calculadora...
  content/
    learn/        artigos de "Aprender" (dados tipados)
    kits/         itens dos kits de preparação
  lib/            calculadoras determinísticas
public/
  manifest.json   PWA
  sw.js           service worker
  icons/          ícone (SVG)
docs/
  ROADMAP.md      roadmap completo do produto
```

## Status de implementação (v0.1)

Esta primeira versão cobre exatamente o escopo recomendado pelo roadmap
(§73 "Primeira versão recomendada"):

| Seção do roadmap | Status |
| --- | --- |
| Home / 3 modos (Emergência, Aprender, Preparar) | ✅ |
| Modo Emergência — seleção de cenário | ✅ (nuclear/radiológico ativo; demais "em desenvolvimento" por design) |
| Explosão nuclear — 6 fases (Antes → Dias seguintes) | ✅ conteúdo completo, com fonte CDC |
| Abrigo, Fallout, Descontaminação, Água, Comunicação | ✅ artigos completos com fontes (CDC/IAEA/WHO) |
| Kit 72h | ✅ checklist interativa, progresso salvo no aparelho (localStorage) |
| Calculadora de água | ✅ determinística |
| Fontes (`/sources`) | ✅ |
| Baixar offline (`/offline`) | ✅ PWA instalável + versão texto real; PDF completo e ZIP marcados "em breve" (exigem geração de manual completo) |
| Impressão (`/print`) | ✅ |
| Modo baixa energia (`/low-power`) | ✅ |
| Saneamento, primeiros socorros, infecções, alimentação, energia, ferramentas, agricultura, comunidade, longo prazo, camada Brasil | ⏳ v0.2+ — fora do escopo desta versão, conforme roadmap §73 |

Este projeto **não** inclui painel administrativo, autenticação, newsletter
ou sistema de alertas — essa direção foi avaliada e descartada em favor do
escopo original do roadmap (site estático, offline-first, sem servidor).
