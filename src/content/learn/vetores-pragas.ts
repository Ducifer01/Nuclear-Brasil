import type { LearnArticle } from "./types";

export const vetoresPragas: LearnArticle = {
  slug: "vetores-pragas",
  category: "Vetores e pragas",
  title: "Vetores e pragas: mosquitos, roedores e controle de doenças",
  riskLevel: "alto",
  authorityLevel: 2,
  status: "verified",
  version: "1.0",
  author: "Nuclear Survival",
  reviewer: "Pendente",
  createdAt: "30/09/2026",
  lastReview: "30/09/2026",
  nextReview: "30/03/2027",
  sources: [
    {
      label: "WHO — IPC / WASH in Emergencies",
      url: "https://www.who.int/emergencies/operations/ipc-wash",
    },
  ],
  weKnow:
    "Em emergências prolongadas, o acúmulo de lixo, água parada e comida exposta cria condições favoráveis para mosquitos, moscas, ratos e baratas — vetores que carregam doenças. Isso deve ser tratado como um problema de saúde pública, não apenas como incômodo.",
  recommended:
    "Elimine água parada sempre que possível (mesmo pequenos volumes acumulados já são suficientes para reprodução de mosquitos), mantenha alimentos guardados em recipientes fechados e fora do alcance de roedores, e destine o lixo de forma a não deixá-lo acumulado e exposto por muito tempo. Em áreas com pragas já estabelecidas, reduzir as condições que as atraem (comida exposta, água parada, lixo acumulado) é mais eficaz no longo prazo do que tentar eliminar cada indivíduo isoladamente.",
  why:
    "Mosquitos, moscas e roedores completam parte de seu ciclo de vida ou se alimentam justamente das condições que uma emergência tende a criar (água parada, lixo, comida exposta) — remover essas condições ataca a causa, não apenas o sintoma. Vetores frequentemente atuam como intermediários no ciclo de transmissão de doenças, então reduzir sua presença reduz risco de forma mais ampla do que medidas pontuais.",
  uncertain:
    "Os vetores e riscos predominantes variam por região e clima — mosquitos transmissores de determinadas doenças, por exemplo, não têm a mesma distribuição em todo o território brasileiro.",
  myths: [
    "\"Um pouco de água parada não faz diferença.\" — Pequenos volumes (um pote, um pneu, uma calha) já são suficientes para reprodução de mosquitos; o volume não precisa ser grande para representar risco.",
    "\"Pragas são só um incômodo estético.\" — Vetores estão associados à transmissão de diversas doenças; tratar o problema como saúde pública, não como limpeza opcional, muda a prioridade dada ao controle.",
  ],
};
