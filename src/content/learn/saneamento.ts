import type { LearnArticle } from "./types";

export const saneamento: LearnArticle = {
  slug: "saneamento",
  category: "Saneamento",
  title: "Saneamento sem rede de esgoto e coleta de lixo",
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
      label: "WHO — Environmental Health in Emergencies",
      url: "https://www.who.int/teams/environment-climate-change-and-health/water-sanitation-and-health/environmental-health-in-emergencies",
    },
    {
      label: "WHO — IPC / WASH in Emergencies",
      url: "https://www.who.int/emergencies/operations/ipc-wash",
    },
  ],
  weKnow:
    "Água disponível sem esgoto funcionando é um risco enorme: fezes, urina e resíduos não tratados contaminam água, mãos, superfícies e alimentos, criando condições para surtos de doença diarreica. A OMS trata água, saneamento e higiene (WASH) como pilares centrais da prevenção de doenças em qualquer emergência.",
  recommended:
    "Separe um local fixo para necessidades fisiológicas, longe de fontes de água e de onde as pessoas dormem e comem. Uma privada de emergência pode ser improvisada com um balde forrado com saco plástico duplo, material absorvente (terra, serragem ou cal) cobrindo cada uso, e tampa hermética. Lave as mãos com sabão após o uso e antes de preparar/comer alimentos — esse é o passo isolado de maior impacto para reduzir transmissão. Lixo e resíduos orgânicos devem ser ensacados, mantidos longe da área de convívio e descartados assim que houver coleta ou um local seguro de destinação.",
  why:
    "A rota fecal-oral é a principal forma de transmissão de doenças diarreicas em emergências: patógenos saem nas fezes, contaminam mãos/água/alimentos, e reentram no corpo pela boca. Isolar os resíduos, usar barreira absorvente e lavar as mãos interrompe essa rota em pontos diferentes, o que reduz o risco mesmo quando nenhuma medida isolada é perfeita.",
  uncertain:
    "A viabilidade de cada solução (privada de balde, fossa improvisada, sacos) depende do espaço disponível, do número de pessoas, do tipo de solo e drenagem do local e do tempo esperado de duração da emergência — soluções de poucos dias são diferentes de soluções de semanas.",
  myths: [
    "\"Sem privada, dá para usar qualquer lugar perto de casa.\" — Resíduos próximos à água, aos alimentos ou à área de convívio aumentam diretamente o risco de contaminação e doença.",
    "\"Álcool em gel substitui lavar as mãos.\" — É um complemento útil quando não há água, mas não remove sujeira visível nem substitui sabão e água quando disponíveis.",
    "\"Lixo orgânico pode esperar.\" — Resíduos orgânicos atraem moscas e roedores rapidamente, que por sua vez espalham contaminação; o descarte ou isolamento deve ser feito o quanto antes.",
  ],
};
