import type { LearnArticle } from "./types";

export const agua: LearnArticle = {
  slug: "agua",
  category: "Água",
  title: "Água: armazenamento e tratamento em emergência",
  riskLevel: "critico",
  authorityLevel: 1,
  status: "verified",
  lastReview: "30/09/2026",
  nextReview: "30/03/2027",
  sources: [
    {
      label: "CDC — Emergency Water Supply",
      url: "https://www.cdc.gov/water-emergency/about/how-to-create-and-store-an-emergency-water-supply.html",
    },
    {
      label: "WHO — Environmental Health in Emergencies",
      url: "https://www.who.int/teams/environment-climate-change-and-health/water-sanitation-and-health/environmental-health-in-emergencies",
    },
  ],
  weKnow:
    "Água é o recurso mais urgente em qualquer emergência prolongada — o corpo humano resiste poucos dias sem ela. O risco pode ser microbiológico (bactérias, vírus, parasitas), químico ou radiológico, e cada um exige um tratamento diferente.",
  recommended:
    "O CDC recomenda armazenar pelo menos 1 galão (cerca de 3,8 litros) por pessoa por dia, para no mínimo 3 dias — uma reserva de duas semanas é preferível quando possível. Guarde em recipientes próprios para água potável, longe de calor e luz direta, e rotacione o estoque periodicamente.",
  why:
    "O volume de referência cobre beber, higiene básica e preparo mínimo de alimentos. Recipientes fechados e ao abrigo de calor retardam a proliferação de microrganismos e a degradação do plástico.",
  uncertain:
    "A necessidade real varia com clima, idade, gestação, amamentação e condições de saúde — em climas quentes ou esforço físico intenso, o consumo pode precisar ser maior que a referência.",
  myths: [
    "Ferver a água resolve contaminação microbiológica, mas não remove contaminantes químicos nem radiológicos — cada tipo de contaminante exige um tratamento específico, e não existe um método universal.",
    "Água engarrafada não dura para sempre: verifique a integridade da embalagem e rotacione o estoque mesmo assim.",
  ],
};
