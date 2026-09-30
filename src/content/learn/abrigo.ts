import type { LearnArticle } from "./types";

export const abrigo: LearnArticle = {
  slug: "abrigo",
  category: "Abrigo",
  title: "Abrigo: proteção radiológica dentro de um edifício",
  riskLevel: "critico",
  authorityLevel: 1,
  status: "verified",
  version: "1.0",
  author: "Nuclear Survival",
  reviewer: "Pendente",
  createdAt: "30/09/2026",
  lastReview: "30/09/2026",
  nextReview: "30/03/2027",
  sources: [
    {
      label: "CDC — Radiation Emergencies",
      url: "https://www.cdc.gov/radiation-emergencies/safety/index.html",
    },
  ],
  weKnow:
    "Três fatores reduzem a dose de radiação recebida: tempo (quanto menos tempo exposto, menor a dose), distância (quanto mais longe da fonte, menor a dose) e blindagem (quanto mais massa entre você e a fonte, menor a dose). Um edifício de concreto ou tijolo já oferece blindagem significativa em relação a ficar ao ar livre.",
  recommended:
    "Entre em um edifício o mais rápido possível e vá para o porão ou para a parte mais central da estrutura, afastado de janelas, paredes externas e do teto. Permaneça dentro até que a orientação oficial indique que é seguro sair.",
  why:
    "Paredes externas, andares acima e o solo ao redor de um porão funcionam como blindagem, absorvendo parte da radiação antes que ela alcance você. Ficar no centro da estrutura maximiza a distância até as superfícies externas, onde o fallout se deposita.",
  uncertain:
    "A blindagem exata depende do material e da espessura das paredes, do número de andares acima de você e de quanto material radioativo foi depositado nas proximidades — não é possível dar um número único de proteção válido para todos os prédios.",
  myths: [
    "Um veículo não é um abrigo adequado — oferece pouquíssima blindagem em comparação a um edifício.",
    "Ficar perto de uma janela 'só para olhar lá fora' já reduz a proteção que o resto do prédio oferece.",
  ],
};
