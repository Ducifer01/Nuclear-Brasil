import type { LearnArticle } from "./types";

export const fallout: LearnArticle = {
  slug: "fallout",
  category: "Radiação · Fallout",
  title: "Fallout: o que é e como se proteger",
  riskLevel: "critico",
  authorityLevel: 1,
  status: "verified",
  version: "1.0",
  author: "Nuclear Survival",
  reviewer: "Pendente",
  createdAt: "30/09/2026",
  lastReview: "30/09/2026",
  nextReview: "30/03/2027",
  sources: [
    {
      label: "CDC — Radiation Emergencies",
      url: "https://www.cdc.gov/radiation-emergencies/safety/index.html",
    },
    {
      label: "IAEA — Emergency Preparedness and Response",
      url: "https://www.iaea.org/topics/emergency-preparedness-and-response",
    },
  ],
  body: `Fallout é a poeira que resulta de uma explosão nuclear — partículas de solo, construções e material da própria arma, vaporizadas pela explosão e tornadas radioativas ao subir na coluna da explosão, que depois caem de volta à terra, geralmente a favor do vento. É diferente da radiação inicial da explosão (que acontece em segundos e já passou quando você lê isso): o fallout continua chegando e se depositando por horas depois do evento.

## Por que o tempo de exposição ao fallout importa tanto

A atividade radioativa do fallout cai rapidamente logo após a explosão — isso é consequência direta da física dos isótopos de meia-vida curta que o compõem, que decaem rápido no início e depois cada vez mais devagar. Uma forma simples de visualizar essa queda é a "regra do 7-10": a cada vez que o tempo decorrido multiplica por 7, a intensidade da radiação cai por volta de 10 vezes. Isso significa que as primeiras horas depois da explosão são, de longe, o período de maior risco — e que esperar dentro de abrigo durante essa janela inicial reduz a dose recebida de forma desproporcional ao tempo gasto esperando. Essa é a lógica por trás da recomendação de permanecer abrigado por pelo menos 24 horas: não é um número arbitrário, é o tempo em que a curva de decaimento já derrubou a maior parte da intensidade inicial.

## Onde o fallout se deposita, e o que isso significa na prática

Fallout se deposita em qualquer superfície exposta ao ar livre — telhados, veículos, solo, roupas penduradas, água em recipientes abertos. Uma vez depositado, ele não "evapora" nem desaparece rapidamente da superfície; perde intensidade com o tempo (ver acima), mas o material físico continua ali até ser removido ou coberto. É por isso que a orientação não é apenas "fique abrigado", mas também "evite contato com poeira depositada em superfícies externas" mesmo depois de sair do abrigo — o risco de contaminação por contato persiste além do pico de intensidade da radiação.

## A ação isolada mais eficaz: remover a roupa externa

Como o fallout se deposita sobre a superfície do que está exposto, a camada externa de roupa que esteve ao ar livre concentra boa parte do material que teria, de outra forma, ficado em contato direto com a pele. O CDC estima que remover essa camada externa elimina cerca de 90% do material radioativo que ela carregava. É uma ação simples, sem equipamento, que qualquer pessoa pode fazer — e por isso é o primeiro passo recomendado ao entrar em um ambiente limpo vindo de fora.

## Por que fervura e capas de chuva não resolvem

Dois erros comuns merecem ser desfeitos aqui porque parecem fazer sentido intuitivo e não fazem: fervura mata microrganismos ao desnaturar suas proteínas, mas não altera nem remove material radioativo dissolvido ou em suspensão na água — são processos físicos completamente diferentes. Da mesma forma, uma capa de chuva comum bloqueia o contato físico com a poeira, o que já ajuda a evitar contaminação de pele, mas não bloqueia a radiação gama que esse material emite — a penetração da radiação gama depende de densidade e espessura do material, não de ser "impermeável". Tratar os dois problemas (contato físico com poeira vs. exposição à radiação que ela emite) como se fossem o mesmo problema leva a soluções que resolvem só metade do risco.`,
};
