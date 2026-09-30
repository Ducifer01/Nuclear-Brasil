import type { LearnArticle } from "./types";

export const infeccoes: LearnArticle = {
  slug: "infeccoes",
  category: "Saúde",
  title: "Prevenção de infecções e doenças em emergência prolongada",
  riskLevel: "alto",
  authorityLevel: 2,
  status: "verified",
  lastReview: "30/09/2026",
  nextReview: "30/03/2027",
  sources: [
    {
      label: "WHO — IPC / WASH in Emergencies",
      url: "https://www.who.int/emergencies/operations/ipc-wash",
    },
    {
      label: "WHO — Environmental Health in Emergencies",
      url: "https://www.who.int/teams/environment-climate-change-and-health/water-sanitation-and-health/environmental-health-in-emergencies",
    },
  ],
  weKnow:
    "Quanto mais tempo os serviços básicos ficam fora do ar, maior a importância deste módulo. A OMS destaca prevenção e controle de infecções (IPC) junto com água, saneamento e higiene (WASH) como pilares fundamentais em emergências, especialmente onde a infraestrutura normal está comprometida.",
  recommended:
    "Lave as mãos com sabão antes de preparar ou comer alimentos e depois de usar o banheiro ou tocar em resíduos — esse hábito isolado reduz fortemente a transmissão de doenças diarreicas e respiratórias. Isole, dentro do possível, pessoas com sintomas respiratórios ou diarreicos das demais, mantenha ventilação em ambientes fechados, limpe feridas assim que ocorrerem e observe sinais de piora (calor, vermelhidão crescente, pus, febre) que indiquem necessidade de atendimento. Água usada para beber ou preparar alimentos deve passar por tratamento adequado ao tipo de risco presente.",
  why:
    "Muitos patógenos comuns em emergências se transmitem por rota fecal-oral (mãos/água/alimentos contaminados) ou por gotículas respiratórias em ambientes fechados e aglomerados. Higiene das mãos, água segura, ventilação e isolamento de sintomáticos atacam diretamente essas rotas de transmissão.",
  uncertain:
    "O risco real de surto varia conforme densidade populacional, condições sanitárias de base, clima, disponibilidade de água segura e acesso a atendimento médico — não é possível prever com precisão qual doença específica será mais provável em cada cenário.",
  myths: [
    "\"Se a água está clara, está segura.\" — Aparência não indica ausência de contaminação microbiológica, química ou radiológica; trate a água conforme o risco presente, não conforme o aspecto visual.",
    "\"Uma ferida pequena não precisa de cuidado.\" — Mesmo ferimentos pequenos podem infeccionar em condições de higiene reduzida; limpeza e observação continuam sendo necessárias.",
    "\"Isolar quem está doente é exagero.\" — Em ambientes fechados e com recursos médicos limitados, isolar sintomáticos reduz a chance de um caso se tornar um surto.",
  ],
};
