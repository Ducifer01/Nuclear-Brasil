import type { LearnArticle } from "./types";

export const fallout: LearnArticle = {
  slug: "fallout",
  category: "Radiação · Fallout",
  title: "Fallout: o que é e como se proteger",
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
    {
      label: "IAEA — Emergency Preparedness and Response",
      url: "https://www.iaea.org/topics/emergency-preparedness-and-response",
    },
  ],
  weKnow:
    "Fallout é a poeira radioativa que se deposita após uma explosão nuclear, formada por material do solo e da própria arma ativados pela radiação. Ele contamina superfícies, água exposta e alimentos não protegidos.",
  recommended:
    "Permaneça abrigado nas primeiras horas após a explosão, remova a camada externa das roupas antes de entrar em áreas limpas e monitore comunicados oficiais para saber quando é seguro sair.",
  why:
    "A radiação do fallout perde intensidade rapidamente nas primeiras horas. Tempo, distância e blindagem reduzem a dose recebida; roupas externas concentram boa parte do material depositado — removê-las pode eliminar cerca de 90% da contaminação.",
  uncertain:
    "O tempo exato de abrigo depende da quantidade de material, do clima e da distância da explosão. Varia caso a caso e deve seguir a orientação oficial local, não uma regra fixa.",
  myths: [
    "Ferver a água não remove contaminação radiológica — isso funciona apenas contra risco microbiológico.",
    "Roupas de chuva comuns não bloqueiam radiação gama, só evitam contato direto com a poeira.",
  ],
};
