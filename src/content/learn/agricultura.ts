import type { LearnArticle } from "./types";

export const agricultura: LearnArticle = {
  slug: "agricultura",
  category: "Agricultura",
  title: "Produção de alimentos: horta, solo e conservação",
  riskLevel: "medio",
  authorityLevel: 4,
  status: "verified",
  version: "1.0",
  author: "Nuclear Survival",
  reviewer: "Pendente",
  createdAt: "30/09/2026",
  lastReview: "30/09/2026",
  nextReview: "30/03/2027",
  sources: [
    {
      label: "WHO — Environmental Health in Emergencies",
      url: "https://www.who.int/teams/environment-climate-change-and-health/water-sanitation-and-health/environmental-health-in-emergencies",
    },
  ],
  body: `Uma horta não resolve os primeiros dias de uma emergência — ela leva semanas a meses para gerar colheita relevante. Isso não a torna inútil; torna claro que produção de alimento é uma ferramenta de continuidade de médio e longo prazo, que só existe no dia em que você precisar dela se tiver sido começada bem antes.

## Por que ciclo curto é a escolha certa para começar

Culturas de ciclo curto (folhosas, por exemplo) dão retorno em semanas, não meses — isso significa que, se algo no seu plantio deu errado (solo, água, praga), você descobre e ajusta rapidamente, em vez de perder uma estação inteira de trabalho antes de perceber o erro. Culturas de ciclo longo têm seu lugar depois que você já validou que o básico está funcionando no seu espaço específico — começar por elas é assumir um risco maior do que necessário logo no início, quando você ainda está aprendendo as condições do seu próprio solo e clima.

## O que compostagem realmente resolve

Resíduos orgânicos da cozinha, se descartados, são lixo que precisa de destinação. Os mesmos resíduos, compostados corretamente, devolvem nutrientes ao solo que você está cultivando — a mesma matéria resolve dois problemas ao mesmo tempo. A técnica que evita os problemas comuns de compostagem (odor, pragas) é manter uma proporção equilibrada entre material seco (folhas secas, papel, serragem) e material úmido (restos de vegetal, borra de café) — material úmido demais apodrece e gera odor; material seco demais não decompõe. Virar a pilha periodicamente introduz oxigênio, que acelera a decomposição e evita que ela vire um processo anaeróbico, que é o que mais produz cheiro desagradável.

## Irrigação: cultive dentro do que você consegue sustentar

O erro mais comum de quem começa é plantar uma área maior do que consegue irrigar de forma consistente. Uma planta que recebe água irregular — bem hidratada um dia, seca no seguinte — geralmente produz pior do que uma planta menor, mas irrigada de forma constante. Antes de expandir a área plantada, confirme que a fonte de água disponível sustenta essa área no pior cenário de disponibilidade, não no melhor.

## Observação regular como ferramenta de manejo

Uma doença de planta ou uma infestação de praga identificada no início costuma ter solução simples — remover a folha afetada, isolar a planta, ajustar a rega. A mesma situação, não observada por semanas, pode comprometer toda uma cultura. Caminhar pela horta regularmente, observando folhas e solo, é a ferramenta de prevenção mais barata e mais eficaz que existe — mais importante do que qualquer produto específico de controle.

## Por que este artigo não substitui o calendário da sua região

O Brasil não tem um único clima, solo ou regime de chuva — o que funciona bem no Sul pode ser inadequado no Nordeste semiárido, e vice-versa. As culturas certas, as datas de plantio e as técnicas de irrigação dependem da sua região específica; consulte o artigo regional correspondente (Norte, Nordeste, Centro-Oeste, Sudeste ou Sul) e, para decisões concretas de plantio, o zoneamento agrícola da Embrapa (ZARC) para o seu município.`,
};
