import type { LearnArticle } from "./types";

export const descontaminacao: LearnArticle = {
  slug: "descontaminacao",
  category: "Descontaminação",
  title: "Descontaminação: pessoas e objetos após exposição",
  riskLevel: "critico",
  authorityLevel: 1,
  status: "verified",
  lastReview: "30/09/2026",
  nextReview: "30/03/2027",
  sources: [
    {
      label: "CDC — Radiation Emergencies",
      url: "https://www.cdc.gov/radiation-emergencies/safety/index.html",
    },
  ],
  weKnow:
    "Se você esteve do lado de fora durante ou logo após a explosão, poeira radioativa pode ter se depositado nas suas roupas, cabelo e pele — mas isso não significa que você está inevitavelmente contaminado, nem impede a descontaminação.",
  recommended:
    "Remova a camada externa das roupas com cuidado (evite sacudi-las) e guarde-as longe de pessoas, alimentos e água, de preferência em um saco fechado. Lave a pele exposta e o cabelo com água morna e sabão suave, sem esfregar com força. Se possível, cubra nariz e boca com um pano até estar em um ambiente limpo.",
  why:
    "Segundo o CDC, remover a camada externa da roupa pode eliminar cerca de 90% do material radioativo presente nela — é a ação isolada mais eficaz de descontaminação disponível para qualquer pessoa, sem equipamento especial.",
  uncertain:
    "O nível real de contaminação de uma pessoa específica só pode ser confirmado com instrumentos de monitoramento (contador Geiger, survey meter) operados por equipes treinadas — a orientação aqui reduz risco, mas não substitui avaliação oficial quando ela estiver disponível.",
  myths: [
    "Esfregar a pele com força para 'tirar a radiação' pode empurrar contaminação para dentro dos poros e piorar a situação — lave suavemente.",
    "Água fria e sabão comum são suficientes; não é necessário nenhum produto especial para a descontaminação básica da pele.",
  ],
};
