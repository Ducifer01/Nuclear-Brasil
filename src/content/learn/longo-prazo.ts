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
  body: `Existe um ponto, numa interrupção prolongada, em que a pergunta certa deixa de ser "como eu sobrevivo aos próximos três dias" e passa a ser "como eu continuo vivendo quando energia, água encanada, internet e atendimento médico normal simplesmente não voltam". Essa mudança de pergunta é o que separa preparação de emergência (uma mochila, um kit) de preparação para colapso longo (infraestrutura que precisa de manutenção contínua).

## Por que a ordem de prioridades segue o tempo de sobrevida

Água, abrigo, saneamento, saúde, alimentação, energia, comunicação, produção, manutenção, organização comunitária — essa ordem não é arbitrária, ela reflete quanto tempo o corpo ou a situação tolera a ausência de cada recurso. Falta de água mata em poucos dias; falta de abrigo adequado agrava exposição e doença em questão de horas a dias, dependendo do clima; já a falta de comunicação ou de capacidade de produção própria tem impacto que se acumula ao longo de semanas e meses, não de horas. Essa ordem é um ponto de partida conceitual, não um ranking fixo — clima, composição familiar e características da região podem inverter prioridades específicas, mas o raciocínio por trás dela (o que mata mais rápido vem primeiro) continua válido.

## Por que "infraestrutura" é a palavra certa, não "itens"

Um kit de emergência é algo que você monta uma vez e guarda. Um colapso longo transforma cada módulo — água, energia, alimentação — em algo que precisa de atenção contínua: reposição do que foi consumido, reparo do que quebrou, checagem regular do que ainda está funcionando. Pensar em "o que eu já tenho" é suficiente para 72 horas; pensar em "o que eu consigo manter funcionando indefinidamente" é o que colapso longo exige.

## Por que documentação física ganha peso nesse cenário

Sistemas digitais (nuvem, aplicativos, bancos de dados online) dependem de internet e de energia para funcionar — exatamente os dois recursos que podem estar indisponíveis num colapso longo. Documentos médicos, de identidade e contatos em cópia física continuam acessíveis independentemente do estado da infraestrutura digital. Essa não é uma recomendação sobre desconfiar de tecnologia; é reconhecer que redundância física cobre o cenário específico em que a tecnologia falha.

## Por que isolamento tende a piorar as chances, não melhorar

A ideia de que colapso longo é uma questão de sobreviver sozinho ignora como divisão de tarefas funciona na prática: um grupo cooperativo cobre mais funções simultâneas (vigilância, cuidado de crianças, produção, manutenção) do que uma pessoa ou família isolada consegue cobrir sozinha, simplesmente porque há mais pessoas disponíveis para fazer coisas diferentes ao mesmo tempo. Organização comunitária — mesmo informal, mesmo pequena — tende a aumentar a capacidade de continuidade, não reduzi-la.

## Por que o risco não termina quando os primeiros dias passam

Uma crença comum é que, superados os primeiros dias, "o pior já passou". Na prática, riscos de saúde como infecção, desnutrição progressiva e desgaste de saúde mental tendem a se acumular ao longo de semanas e meses de privação continuada — eles não aparecem de uma vez como um evento agudo, aparecem gradualmente, o que os torna mais fáceis de ignorar até que já estejam avançados. Atenção contínua a esses riscos, não apenas nos primeiros dias, é parte do que diferencia sobreviver uma emergência de atravessar um colapso longo.`,
};
