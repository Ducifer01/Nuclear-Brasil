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
  `src/content/learn/` (metadados: categoria, nível de risco, nível de
  autoridade, status de revisão, versão, autor, revisor, fontes) — o corpo
  de cada artigo (`body`) é markdown livre: cada tema usa a estrutura de
  seções que fizer sentido para ele, sem template fixo reaplicado.
- Cenários de emergência (`src/content/emergency/`) seguem o mesmo
  princípio: fases ANTES → DIAS SEGUINTES, com texto que explica a técnica
  e o raciocínio, não apenas comandos.
- PWA: `public/manifest.json` + `public/sw.js` (service worker escrito à
  mão, cache-first para estáticos, network-first com fallback para páginas).
- Calculadoras determinísticas em `src/lib/calculators.ts` — sem IA, puras e
  testáveis.
- Pacote offline (ZIP) e EPUB gerados no navegador via `fflate` — a única
  dependência de empacotamento do projeto, sem servidor envolvido.

## Estrutura

```text
src/
  app/            rotas (App Router) — espelha a IA do roadmap (§3)
  components/     Header, TabBar, AppShell, checklist, calculadora...
  content/
    learn/        artigos de "Aprender" (dados tipados, body em markdown)
    emergency/    cenários de emergência (fases + fontes)
    kits/         itens dos kits de preparação
  lib/            calculadoras, planejador de kit, pacote offline/EPUB
public/
  manifest.json   PWA
  sw.js           service worker
  icons/          ícone (SVG)
docs/
  ROADMAP.md      roadmap completo do produto
```

## Status de implementação

O projeto cobre o conteúdo completo do roadmap (v0.1 a v1.0, §73), com 27
artigos em "Aprender", 7 cenários de emergência, 8 kits/checklists
interativas, 4 calculadoras/simuladores e pacote offline completo (PDF via
impressão, ZIP, EPUB):

| Seção do roadmap | Status |
| --- | --- |
| Home / 3 modos (Emergência, Aprender, Preparar) | ✅ |
| Modo Emergência — 7 cenários (nuclear, incêndio, desastre natural, colapso de energia, falha de água, perda de comunicação, colapso do atendimento) | ✅ cada um com fonte oficial própria (CDC, Corpo de Bombeiros estadual, CEMADEN/SEDEC, ONS, ANA, Anatel, Ministério da Saúde) |
| Abrigo, Fallout, Descontaminação, Água, Comunicação, Saneamento, Primeiros socorros, Infecções, Alimentação | ✅ artigos com fontes oficiais (CDC/IAEA/WHO) |
| Energia, Ferramentas, Agricultura, Longo prazo/Continuidade, Brasil | ✅ |
| Saúde dental, Navegação, Documentos, Animais, Vetores/pragas, Saúde mental, Comunidade | ✅ |
| Camadas regionais do Brasil (Norte/Nordeste/Centro-Oeste/Sudeste/Sul) | ✅ artigos individuais com fontes verificadas por região (INMET, CEMADEN, ANA, Embrapa/ZARC) |
| Kits 0 a 6 + checklist de documentos | ✅ checklists interativas, progresso salvo no aparelho (localStorage) |
| Calculadoras de água, energia, alimentação + Planejador de kit | ✅ determinísticas, sem IA, sem rede |
| Manuais personalizados salvos + 9 presets nomeados (Pocket Guide, Home Binder, Family Manual, Medical Binder, Water/Food/Long-Term Manual, Quick Cards, Wall Posters) | ✅ seleção salva em `localStorage`; Quick Cards e Wall Posters têm layout de impressão próprio |
| Metadados editoriais (versão, autor, revisor, criação) por artigo | ✅ roadmap §45 |
| Sistema de alerta de conteúdo desatualizado (§47) | ✅ selo ✓ VERIFICADO / ⚠ NECESSITA REVISÃO por artigo |
| Fontes (`/sources`) | ✅ |
| Baixar offline (`/offline`) | ✅ PWA instalável, versão texto, manual via impressão/PDF, **pacote ZIP completo** e **EPUB**, gerados no navegador |
| Impressão (`/print`) | ✅ manual completo com seleção de seções, presets e 3 layouts (manual, cartões, pôster) |
| Modo baixa energia (`/low-power`) | ✅ |
| Testes de usabilidade com usuários reais (§65-66) | ⚠️ **não pode ser feito por código/IA** — exige pessoas reais em dispositivos reais. Ver nota abaixo. |

### Sobre o Gap 4 — testes de usabilidade reais

O roadmap pede, em §65-66, dar o site a alguém que nunca o viu e medir
tempo até a primeira ação, erros e compreensão, além de testar em
dispositivos Android/iPhone/Windows/Linux/macOS reais, impressão física e
condições reais de rede desligada. **Nenhum agente de IA consegue
substituir isso** — é o único item do roadmap que depende inteiramente de
pessoas.

O que foi possível verificar de forma automatizada:

- Todos os elementos interativos usam `<button>`/`<Link>` nativos — focáveis
  por teclado por padrão, sem necessidade de `tabindex` manual.
- Ícones são SVGs decorativos sempre acompanhados de um rótulo de texto
  visível — nenhuma informação depende apenas do ícone.
- Contraste de cor: `--color-ink` (#15181b) sobre `--color-paper` (#f5f2ea)
  tem contraste alto (texto principal, ok). `--color-muted` (#8a8677) sobre
  o fundo claro do app mede **≈3,3:1** — acima do mínimo para texto grande
  (3:1), mas abaixo do recomendado para texto pequeno (4,5:1, WCAG AA). Esse
  tom é usado em metadados secundários (datas, dicas) em fonte pequena —
  vale revisão de contraste antes de um teste real com usuários.

Isso reduz risco antes do teste real, mas **não substitui** o teste em si.

## O que fica para depois deste PR

- Revisão humana artigo-a-artigo (os 27 artigos têm `reviewer: "Pendente"`
  até alguém revisar e assinar formalmente)
- O teste de usabilidade real descrito acima
- Ajuste de contraste do tom `--color-muted` em texto pequeno, se um teste
  de acessibilidade mais formal confirmar a necessidade

Este projeto **não** inclui painel administrativo, autenticação, newsletter
ou sistema de alertas — essa direção foi avaliada e descartada em favor do
escopo original do roadmap (site estático, offline-first, sem servidor).
