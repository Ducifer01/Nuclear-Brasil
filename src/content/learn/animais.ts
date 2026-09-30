import type { LearnArticle } from "./types";

export const animais: LearnArticle = {
  slug: "animais",
  category: "Animais",
  title: "Animais de estimação e produção em emergência",
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
    "Animais dependem inteiramente de seus tutores em uma emergência — eles não conseguem planejar, estocar ou se proteger sozinhos. O planejamento de água, alimentação e abrigo da família deve incluir os animais desde o início, não como um item à parte.",
  recommended:
    "Inclua os animais no cálculo de água e alimentos do domicílio, com reserva própria para eles. Em caso de contaminação externa (fallout, por exemplo), traga animais para dentro assim que possível e evite que eles circulem entre área potencialmente contaminada e área limpa, para não espalhar contaminação. Mantenha higiene básica e observe sinais de doença. Tutores devem reconhecer os limites do que podem fazer em casa — problemas de saúde além de cuidados básicos exigem atendimento veterinário assim que disponível, e não devem ser tratados com automedicação.",
  why:
    "Animais que circulam entre áreas contaminadas e limpas podem transportar material contaminante (poeira, fallout, resíduos) para dentro de casa, ampliando a exposição das pessoas. Reservar água e comida especificamente para os animais evita que o cálculo do estoque familiar fique subestimado quando a emergência chega.",
  uncertain:
    "As necessidades específicas variam muito por espécie, porte e número de animais — este artigo cobre princípios gerais, não protocolos específicos por espécie.",
  myths: [
    "\"Animais não precisam de água extra estocada, eles se viram.\" — Animais têm as mesmas necessidades básicas de água que pessoas, na proporção do seu porte, e dependem do tutor para isso em confinamento ou emergência.",
    "\"Dá para tratar qualquer problema de saúde animal em casa com o que tiver disponível.\" — Cuidados básicos (higiene, observação, primeiros cuidados simples) têm seu lugar, mas problemas de saúde mais sérios exigem avaliação veterinária.",
  ],
};
