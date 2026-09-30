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

## Status de implementação

O projeto cobre o conteúdo de todas as versões v0.1 a v1.0 do roadmap
(§73), com 21 artigos em "Aprender", 7 kits com checklist interativa e 3
calculadoras determinísticas:

| Seção do roadmap | Status |
| --- | --- |
| Home / 3 modos (Emergência, Aprender, Preparar) | ✅ |
| Modo Emergência — seleção de cenário | ✅ (nuclear/radiológico ativo; demais "em desenvolvimento" por design) |
| Explosão nuclear — 6 fases (Antes → Dias seguintes) | ✅ conteúdo completo, com fonte CDC |
| Abrigo, Fallout, Descontaminação, Água, Comunicação | ✅ artigos completos com fontes (CDC/IAEA/WHO) |
| Saneamento, Primeiros socorros, Infecções, Alimentação | ✅ artigos completos (v0.2) |
| Energia, Ferramentas, Kits 0/1/3/4/5/6 | ✅ artigos + checklists + calculadora de energia (v0.3) |
| Agricultura/produção, Longo prazo/Continuidade | ✅ artigos completos (v0.4) |
| Camada Brasil (SIPRON, CNEN, Defesa Civil) | ✅ artigo dedicado + fontes (v0.5) |
| Saúde dental, Navegação, Documentos, Animais, Vetores/pragas, Saúde mental, Comunidade | ✅ artigos completos (v1.0) |
| Kits 0 a 6 + checklist de documentos | ✅ checklists interativas, progresso salvo no aparelho (localStorage) |
| Calculadoras de água, energia e alimentação | ✅ determinísticas |
| Fontes (`/sources`) | ✅ |
| Baixar offline (`/offline`) | ✅ PWA instalável + versão texto real; PDF completo e ZIP marcados "em breve" (exigem geração de manual completo) |
| Impressão (`/print`) | ✅ |
| Modo baixa energia (`/low-power`) | ✅ |
| Camadas regionais do Brasil (Norte/Nordeste/Centro-Oeste/Sudeste/Sul), manual completo em PDF/ZIP, EPUB, personalização | ⏳ aprofundamento contínuo — o conteúdo textual do roadmap está coberto; geração de PDF/ZIP completo e regionalização ficam para iterações seguintes |

Este projeto **não** inclui painel administrativo, autenticação, newsletter
ou sistema de alertas — essa direção foi avaliada e descartada em favor do
escopo original do roadmap (site estático, offline-first, sem servidor).
