import type { LearnArticle } from "./types";

export const saudeDental: LearnArticle = {
  slug: "saude-dental",
  category: "Saúde dental",
  title: "Saúde dental: prevenção quando o dentista não está disponível",
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
    "Em cenários longos, quando atendimento odontológico profissional está limitado ou indisponível, prevenir é muito mais eficaz do que tentar improvisar tratamento. Um problema dental não tratado pode evoluir de dor leve para infecção grave, e infecções na região da boca podem se espalhar para outras partes do corpo.",
  recommended:
    "Mantenha escovação regular mesmo com água limitada — mesmo escovar sem pasta, usando apenas água limpa e escova (ou um pano limpo enrolado no dedo, na ausência de escova), já reduz acúmulo de placa. Guarde escovas em local seco e ventilado, sem contato entre cerdas de pessoas diferentes. Observe sinais de alerta — dor persistente, inchaço, sensibilidade a temperatura, sangramento gengival — e busque atendimento profissional assim que houver qualquer via de acesso, em vez de esperar o quadro piorar. Em caso de trauma dental (dente solto ou deslocado), evite manipular excessivamente e busque atendimento o quanto antes; o tempo entre o trauma e o atendimento profissional pode ser decisivo para salvar o dente.",
  why:
    "A cárie e a doença gengival são processos que avançam ao longo de dias a semanas de acúmulo de placa bacteriana; interromper esse acúmulo com escovação regular, mesmo básica, já reduz significativamente o risco. Infecções dentais não tratadas podem evoluir para abscessos, que representam risco de disseminação da infecção — por isso sinais de piora (inchaço, febre) justificam buscar atendimento com prioridade.",
  uncertain:
    "A eficácia de soluções improvisadas (escovação sem pasta, fio dental improvisado) varia por pessoa e não substitui acompanhamento odontológico regular quando ele volta a estar disponível.",
  myths: [
    "\"Sem pasta de dente, não adianta escovar.\" — A ação mecânica de remover placa com escova e água já tem benefício relevante, mesmo sem pasta.",
    "\"Dor de dente que passa sozinha significa que o problema se resolveu.\" — Muitas vezes a dor diminui quando o nervo do dente morre, mas a infecção pode continuar progredindo; a ausência de dor não significa ausência de problema.",
    "\"Dá para tratar uma infecção dentária só com antibiótico, sem avaliação profissional.\" — Antibiótico pode ajudar a controlar uma infecção temporariamente, mas não resolve a causa; a avaliação e o tratamento definitivo exigem atendimento odontológico.",
  ],
};
