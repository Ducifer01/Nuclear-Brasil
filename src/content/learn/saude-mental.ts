import type { LearnArticle } from "./types";

export const saudeMental: LearnArticle = {
  slug: "saude-mental",
  category: "Saúde mental",
  title: "Saúde mental e organização em emergência prolongada",
  riskLevel: "alto",
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
    "Estresse, privação de sono e fadiga são reações esperadas em emergência — não são sinais de fraqueza nem precisam ser tratados como problema psicológico automaticamente. Ao mesmo tempo, esses fatores afetam diretamente a qualidade da tomada de decisão, o que tem consequências práticas em um cenário onde decisões importam.",
  recommended:
    "Mantenha, na medida do possível, uma rotina básica (horários de sono, refeições, tarefas) — rotina reduz a carga de decisão constante e ajuda a manter funcionamento mesmo sob estresse. Priorize descanso real quando disponível, especialmente antes de decisões importantes. Mantenha comunicação clara dentro do grupo/família, e reconheça que conflitos tendem a aumentar sob estresse e privação — ter um espaço combinado para resolver desentendimentos ajuda a evitar que eles se acumulem. Cuidado de crianças deve incluir manter alguma previsibilidade e explicações adequadas à idade, o que reduz ansiedade infantil.",
  why:
    "Privação de sono e estresse prolongado afetam capacidade de concentração, julgamento e controle emocional — o que aumenta o risco de erros justamente em decisões que mais importam. Rotina e previsibilidade reduzem carga cognitiva, liberando capacidade mental para lidar com o que realmente exige atenção no momento.",
  uncertain:
    "A intensidade da resposta ao estresse varia muito entre pessoas, e alguns sinais que parecem normais em curto prazo podem indicar necessidade de apoio profissional quando persistem — esse artigo não substitui avaliação de saúde mental especializada quando ela está disponível.",
  myths: [
    "\"Manter a calma é só questão de força de vontade.\" — Reações de estresse têm base fisiológica; dormir, comer e manter rotina básica têm efeito real sobre a capacidade de manter a calma, além de força de vontade.",
    "\"Falar sobre o medo das crianças só piora a ansiedade delas.\" — Explicações adequadas à idade tendem a reduzir ansiedade infantil mais do que o silêncio, que costuma ser preenchido pela imaginação da criança.",
  ],
};
