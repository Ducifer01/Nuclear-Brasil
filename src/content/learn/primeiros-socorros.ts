import type { LearnArticle } from "./types";

export const primeirosSocorros: LearnArticle = {
  slug: "primeiros-socorros",
  category: "Medicina",
  title: "Primeiros socorros: o essencial antes do atendimento profissional",
  riskLevel: "critico",
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
      label: "CDC — Radiation Emergencies",
      url: "https://www.cdc.gov/radiation-emergencies/safety/index.html",
    },
  ],
  weKnow:
    "Este conteúdo não transforma ninguém em profissional de saúde. O objetivo é aumentar a capacidade de reconhecer, prevenir e dar os primeiros cuidados enquanto o atendimento profissional está limitado, demorado ou indisponível — e reconhecer quando algo exige atendimento médico real, assim que for possível buscá-lo.",
  recommended:
    "Na dúvida sobre qualquer sinal grave (sangramento que não para, dificuldade para respirar, perda de consciência, sinais de choque, queimadura extensa, fratura exposta), a prioridade é buscar ou acionar atendimento profissional assim que houver qualquer via de acesso. Enquanto isso: em hemorragias, aplique pressão direta firme e contínua sobre o ferimento com pano limpo; em queimaduras, resfrie com água corrente em temperatura ambiente (nunca gelo) e cubra com pano limpo, sem estourar bolhas; em suspeita de fratura, imobilize a região na posição em que foi encontrada, sem tentar realinhar; em sinais de choque (pele fria e pálida, pulso rápido e fraco, confusão), deite a pessoa, eleve as pernas se não houver suspeita de fratura, e mantenha-a aquecida.",
  why:
    "Pressão direta contém a perda de sangue reduzindo o risco de choque hipovolêmico. Resfriar queimaduras limita o dano térmico contínuo aos tecidos. Imobilizar fraturas evita que movimento adicional cause lesão em vasos, nervos ou tecidos ao redor do osso. Elevar as pernas em um quadro de choque ajuda a manter fluxo sanguíneo para órgãos vitais.",
  uncertain:
    "A gravidade real de um ferimento muitas vezes só pode ser avaliada por um profissional com exame físico e, quando necessário, exames de imagem — primeiros socorros reduzem risco imediato, mas não substituem avaliação médica.",
  myths: [
    "\"Torniquete é sempre a primeira opção em sangramento.\" — Pressão direta é o primeiro passo na maioria dos casos; torniquete é reservado para hemorragias graves em membros que não param com pressão direta, e exige treinamento para uso correto.",
    "\"Gelo direto ajuda na queimadura.\" — Gelo pode agravar a lesão térmica dos tecidos; o indicado é água corrente em temperatura ambiente.",
    "\"É seguro tentar 'encaixar' um osso quebrado de volta no lugar.\" — Isso pode piorar a lesão; o correto é imobilizar na posição encontrada e buscar atendimento.",
  ],
};
