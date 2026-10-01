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
  body: `A maior parte das doenças que se espalham em uma emergência prolongada não vem da falta de comida ou de abrigo — vem de uma rota de transmissão específica, chamada fecal-oral: um patógeno sai do corpo de alguém infectado pelas fezes, contamina mãos, água ou alimento, e entra no corpo de outra pessoa pela boca. Saneamento, na prática, é o conjunto de barreiras que você constrói para cortar essa rota em diferentes pontos — nenhuma barreira sozinha é perfeita, mas cada uma reduz a probabilidade de a cadeia se completar.

## Construindo uma privada de emergência

Sem rede de esgoto, o objetivo é isolar os resíduos fisicamente, impedindo contato com água, alimento e com as mãos de outras pessoas. Uma solução simples e eficaz: um balde forrado com saco plástico duplo (o segundo saco é reserva caso o primeiro rasgue), com uma camada de material absorvente — terra, serragem ou cal — adicionada depois de cada uso. Esse material cumpre duas funções: absorve umidade (o que reduz odor e a atratividade para moscas) e cria uma barreira física entre o resíduo e o ar, limitando a dispersão. Mantenha o balde com tampa que feche bem, e posicione-o longe de onde a família dorme, come e armazena água — distância física é, por si só, uma camada de proteção.

## Por que lavar as mãos é a ação de maior retorno

De todas as barreiras possíveis contra a rota fecal-oral, lavar as mãos com sabão depois de usar a privada e antes de preparar ou comer alimentos é a que tem maior impacto isolado, porque ataca o ponto da cadeia onde o patógeno passa das fezes para tudo que você toca depois — incluindo comida que outras pessoas vão comer. Álcool em gel ajuda quando não há água disponível, mas não remove sujeira visível e tem eficácia reduzida contra determinados patógenos — ele é um complemento para quando sabão e água não são opção, não um substituto equivalente.

## Lixo e resíduos orgânicos: por que não podem esperar

Resíduo orgânico exposto atrai moscas em questão de horas, não dias. Moscas que pousam em fezes ou lixo orgânico e depois em alimento transportam patógenos de um lugar para o outro de forma direta — são um vetor mecânico de transmissão, não apenas um incômodo. Por isso resíduos orgânicos devem ser ensacados e isolados da área de convívio assim que gerados, e descartados ou enterrados (longe de fontes de água) assim que possível, em vez de acumulados "para resolver depois".

## Adaptando a solução ao tempo e ao espaço disponíveis

Uma solução de balde funciona bem para poucos dias e poucas pessoas. Para uma interrupção de semanas, ou para mais pessoas, a mesma lógica (isolamento + barreira absorvente + distância da água e do convívio) precisa de mais escala — uma fossa mais profunda, por exemplo, ou rotação entre múltiplos recipientes. A decisão de qual solução construir depende do espaço disponível, do tipo de solo (solo que drena mal aumenta o risco de contaminação de lençol freático) e de quantas pessoas estão usando o mesmo sistema — não existe uma solução única correta para todos os cenários, mas o princípio por trás de todas elas é sempre o mesmo.`,
};
