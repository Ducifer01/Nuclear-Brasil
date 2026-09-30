import type { LearnArticle } from "./types";

export const alimentacao: LearnArticle = {
  slug: "alimentacao",
  category: "Alimentação",
  title: "Alimentação: estoque, rotação e segurança alimentar",
  riskLevel: "alto",
  authorityLevel: 2,
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
    "Um estoque de alimentos útil não é sobre acumular grandes quantidades de uma vez, mas sobre ter itens estáveis, de preparo simples, que possam ser rotacionados para nunca vencer sem uso. Para os primeiros dias, o critério principal é comida pronta para comer, que não dependa de cozimento nem de refrigeração.",
  recommended:
    "Para 72 horas, priorize alimentos não perecíveis e prontos para consumo (enlatados, barras, cereais secos), que não exijam preparo complexo nem grande quantidade de água. Para duas semanas, adicione alimentos estáveis à temperatura ambiente e fáceis de rotacionar no dia a dia (grãos, massas, enlatados variados), anotando datas de validade e consumindo e repondo o estoque por ordem de vencimento. Guarde tudo em local seco, fresco e ao abrigo de luz direta e de pragas. Ao lidar com qualquer alimento após uma interrupção de energia ou possível contaminação, observe sinais de deterioração — cheiro, cor, textura e embalagens estufadas ou danificadas — e descarte sem provar se houver qualquer dúvida.",
  why:
    "Alimentos não perecíveis resistem a variações de temperatura e a ausência de refrigeração por mais tempo, o que os torna adequados para estoques de emergência. Rotacionar o estoque (consumir o mais antigo primeiro e repor) evita desperdício e garante que o alimento disponível no momento da emergência ainda esteja em boas condições. Embalagens estufadas ou danificadas podem indicar contaminação por microrganismos que produzem gás, um sinal de risco que justifica descarte.",
  uncertain:
    "A quantidade ideal de estoque varia com o número de pessoas, necessidades nutricionais específicas (crianças, gestantes, idosos, condições de saúde) e com o espaço de armazenamento disponível — não existe uma quantidade única correta para todos os lares.",
  myths: [
    "\"Comida enlatada dura para sempre.\" — Enlatados têm vida útil longa, mas não indefinida, e devem ser rotacionados e inspecionados antes do consumo.",
    "\"Se não tem mau cheiro, está seguro para comer.\" — Alguns contaminantes não alteram cheiro, cor ou sabor perceptivelmente; embalagem danificada, tempo sem refrigeração adequada e validade vencida já são motivos suficientes para descarte por segurança.",
    "\"Quanto mais comida estocada, melhor.\" — Estoque sem rotação vira desperdício; é preferível um estoque menor, bem rotacionado, do que um grande estoque esquecido.",
  ],
};
