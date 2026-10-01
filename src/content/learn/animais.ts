import type { LearnArticle } from "./types";

export const animais: LearnArticle = {
  slug: "animais",
  category: "Animais",
  title: "Animais de estimação e produção em emergência",
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
  ],
  body: `Um animal doméstico não consegue estocar sua própria água, planejar sua própria fuga ou reconhecer sozinho um ambiente contaminado — ele depende inteiramente de decisões que o tutor toma por ele. Isso tem uma consequência direta de planejamento: água, alimento e abrigo para os animais não são um item extra a considerar depois, são parte do mesmo cálculo que você já faz para as pessoas da casa.

## Por que subestimar a necessidade de água dos animais é um erro comum

Animais têm necessidade de água proporcional ao próprio porte, da mesma forma que pessoas — a ideia de que "eles se viram" geralmente parte de observar animais em ambiente normal, com acesso livre a água, e não se aplica quando esse acesso está comprometido. Se o cálculo de água do domicílio não reserva volume específico para os animais, o estoque pensado para a família humana fica subestimado na prática — ou os animais ficam sem, ou a reserva humana é consumida mais rápido do que planejado.

## Por que circulação entre áreas é o risco central em contaminação

Em um cenário de contaminação externa — fallout é o exemplo mais extremo, mas vale para outros tipos de resíduo também — um animal que entra e sai de uma área exposta carrega material físico (poeira, partículas) no pelo e nas patas para dentro de casa, cada vez que entra. Trazer o animal para dentro assim que possível depois de um evento, e evitar que ele volte a circular entre área exposta e área limpa, é o que impede que ele se torne um vetor de contaminação para o ambiente que você está tentando manter seguro — o mesmo raciocínio aplicado a pessoas que removem a camada externa de roupa antes de entrar em área limpa.

## Onde o cuidado do tutor termina e o veterinário começa

Higiene básica, observação de comportamento e sinais visíveis de desconforto são coisas que qualquer tutor pode e deve fazer. O limite aparece quando o problema é mais sério do que isso — um sinal de doença que não melhora, um ferimento que não é superficial. Nesse ponto, automedicação ou tratamento improvisado em casa tem mais risco de piorar a situação do que de ajudar; a decisão correta é buscar atendimento veterinário assim que ele estiver disponível, tratando o cuidado doméstico como ponte até lá, não como substituto.

Necessidades específicas variam bastante por espécie e porte — os princípios acima (reservar recursos, evitar contaminação cruzada, reconhecer os limites do cuidado doméstico) se aplicam de forma geral, mas não substituem protocolo específico para a espécie e porte do seu animal.`,
};
