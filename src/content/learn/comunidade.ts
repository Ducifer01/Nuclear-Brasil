import type { LearnArticle } from "./types";

export const comunidade: LearnArticle = {
  slug: "comunidade",
  category: "Comunidade",
  title: "Comunidade: cooperação em vez de isolamento",
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
    "Em cenários de longo prazo, sobreviver sozinho tende a ser mais difícil e mais arriscado do que fazer parte de um grupo cooperativo. Divisão de tarefas, compartilhamento de conhecimento e apoio mútuo aumentam a capacidade coletiva de atravessar uma interrupção prolongada.",
  recommended:
    "Onde possível, construa e mantenha relação com vizinhos e conhecidos próximos antes de qualquer emergência — é mais fácil cooperar com quem você já conhece. Divida tarefas conforme habilidades e disponibilidade de cada pessoa do grupo, mantenha algum sistema simples de registro (quem tem o quê, quem fez o quê) para evitar desorganização, e priorize proteção de pessoas vulneráveis do grupo (crianças, idosos, pessoas com deficiência ou condições de saúde). Resolução de conflitos deve ter um espaço combinado, em vez de ser deixada para acontecer de forma improvisada sob estresse.",
  why:
    "Grupos cooperativos conseguem cobrir mais funções simultaneamente (vigilância, cuidado de crianças, produção, manutenção) do que uma pessoa ou família isolada consegue sozinha. Registros simples reduzem erros de comunicação e desperdício de recursos, que tendem a aumentar quando a organização é apenas informal e de memória.",
  uncertain:
    "A viabilidade de organização comunitária depende muito do contexto local — vizinhança, cultura, confiança prévia entre as pessoas — e não pode ser padronizada de forma genérica.",
  myths: [
    "\"Em uma crise, cada um por si é o mais seguro.\" — Evidências de resposta a desastres mostram que cooperação comunitária tende a aumentar, não reduzir, a capacidade de sobrevivência coletiva.",
    "\"Organização comunitária significa abrir mão da própria segurança.\" — Cooperação não exige abrir mão de limites pessoais; ela pode (e deve) incluir regras claras de proteção e respeito mútuo.",
  ],
};
