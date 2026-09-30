import type { LearnArticle } from "./types";

export const longoPrazo: LearnArticle = {
  slug: "longo-prazo",
  category: "Longo prazo",
  title: "Colapso longo: de sobreviver 3 dias a continuar vivendo",
  riskLevel: "medio",
  authorityLevel: 4,
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
      label: "IAEA — Emergency Preparedness and Response",
      url: "https://www.iaea.org/topics/emergency-preparedness-and-response",
    },
  ],
  weKnow:
    "Quando energia, água encanada, internet e atendimento médico normal não voltam em poucos dias, a pergunta muda: deixa de ser \"como sobrevivo 3 dias\" e passa a ser \"como continuo vivendo\". Esse é o cenário de colapso prolongado — semanas, meses ou mais — e exige pensar em infraestrutura, não apenas em uma mochila de emergência.",
  recommended:
    "A ordem conceitual de prioridades em colapso longo é: água, abrigo, saneamento, saúde, alimentação, energia, comunicação, produção, manutenção e organização comunitária — mas o contexto real pode alterar essa ordem; não trate como ranking universal e rígido. Cada módulo (água, energia, alimentação etc.) deixa de ser um item comprado uma vez e passa a ser algo que precisa de manutenção contínua: reposição, reparo, checagem regular. Documentação pessoal (médica, de identidade, contatos) em cópia física passa a ter grande importância quando sistemas digitais podem estar indisponíveis.",
  why:
    "A ordem de prioridades reflete o tempo de sobrevida sem cada recurso: a falta de água mata em dias, a falta de abrigo adequado agrava exposição e doença rapidamente, enquanto a falta de comunicação ou produção têm impacto que se acumula ao longo de semanas e meses. Pensar em infraestrutura, não em itens isolados, reconhece que cada recurso depende de manutenção continuada para seguir funcionando.",
  uncertain:
    "A duração real de qualquer colapso é imprevisível, e a prioridade real entre módulos varia conforme clima, composição familiar, condições de saúde prévias e características da região — o modelo apresentado aqui é um ponto de partida conceitual, não uma previsão.",
  myths: [
    "\"Colapso longo é sobre sobreviver sozinho.\" — Organização comunitária (divisão de tarefas, cooperação, apoio a vulneráveis) tende a aumentar as chances de continuidade, não reduzi-las.",
    "\"Se sobrevivi aos primeiros dias, o pior já passou.\" — Riscos de saúde (infecção, desnutrição, saúde mental) tendem a se acumular ao longo de semanas e meses, exigindo atenção contínua, não apenas nos primeiros dias.",
    "\"Não dá para se preparar para algo tão incerto.\" — Preparação por camadas (módulos de água, abrigo, saúde, etc., cada um reforçando o seguinte) reduz risco mesmo sem saber exatamente qual cenário vai ocorrer.",
  ],
};
