import type { LearnArticle } from "./types";

export const agricultura: LearnArticle = {
  slug: "agricultura",
  category: "Agricultura",
  title: "Produção de alimentos: horta, solo e conservação",
  riskLevel: "medio",
  authorityLevel: 4,
  status: "verified",
  lastReview: "30/09/2026",
  nextReview: "30/03/2027",
  sources: [
    {
      label: "WHO — Environmental Health in Emergencies",
      url: "https://www.who.int/teams/environment-climate-change-and-health/water-sanitation-and-health/environmental-health-in-emergencies",
    },
  ],
  weKnow:
    "Produzir parte do próprio alimento é um dos pilares da continuidade em interrupções longas (meses a anos), mas não é uma solução rápida: uma horta leva semanas a meses para gerar colheita relevante, o que significa que o melhor momento para começar é antes da emergência, não durante ela.",
  recommended:
    "Priorize culturas de ciclo curto e alta utilidade nutricional, adequadas ao clima e solo da sua região (folhosas, leguminosas, tubérculos, conforme disponibilidade local). Mantenha sementes guardadas em local seco e fresco, e aprenda técnicas básicas de compostagem para melhorar o solo com os próprios resíduos orgânicos. Irrigação deve considerar a disponibilidade real de água — não plante mais do que consegue irrigar de forma sustentável. Doenças de plantas e pragas exigem observação regular; identificar um problema cedo facilita o manejo.",
  why:
    "Culturas de ciclo curto dão retorno mais rápido e permitem ajuste conforme o aprendizado, reduzindo o risco de perder uma estação inteira por erro de planejamento. Compostagem devolve nutrientes ao solo usando resíduos que, de outra forma, precisariam de descarte — reduzindo lixo e melhorando produtividade ao mesmo tempo.",
  uncertain:
    "As culturas adequadas, o calendário agrícola e as técnicas de irrigação variam fortemente por região, clima e tipo de solo no Brasil — não existe uma receita única válida para o país inteiro; uma camada regional (Norte, Nordeste, Centro-Oeste, Sudeste, Sul) é necessária para recomendações mais específicas.",
  myths: [
    "\"Qualquer planta serve para uma horta de emergência.\" — Plantas ornamentais ou inadequadas ao clima local consomem tempo e água sem retorno alimentar relevante.",
    "\"Horta garante alimento imediato.\" — O retorno leva semanas a meses; horta é planejamento de médio/longo prazo, não solução para os primeiros dias de uma emergência.",
    "\"Composto pronto não tem risco.\" — Compostagem malfeita pode atrair pragas e gerar odor; seguir proporções adequadas de material seco e úmido reduz esses problemas.",
  ],
};
