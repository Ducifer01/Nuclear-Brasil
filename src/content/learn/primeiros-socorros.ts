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
  body: `Primeiros socorros não transformam ninguém em profissional de saúde — o objetivo é conter o agravamento de uma lesão nos minutos ou horas até que atendimento profissional esteja disponível, e reconhecer quando buscar esse atendimento não pode esperar. Cada técnica abaixo existe porque resolve um mecanismo físico específico do corpo; entender esse mecanismo é o que permite aplicar a técnica corretamente sob pressão, em vez de lembrar uma lista de regras soltas.

## Hemorragias: por que pressão direta vem antes de tudo

Um ferimento que sangra perde volume de sangue continuamente até que algo interrompa o fluxo. Pressão direta e firme sobre o local, com um pano limpo, funciona porque comprime o vaso sanguíneo lesionado contra o tecido ao redor, dando tempo para que o próprio processo de coagulação do corpo feche o ferimento. É por isso que a pressão precisa ser contínua — soltar para checar se "já parou" interrompe a formação do coágulo e reinicia o sangramento.

Torniquete não é a primeira opção: ele interrompe toda a circulação abaixo do ponto onde é aplicado, o que tem custo (risco para o tecido que fica sem sangue) e exige saber exatamente onde e como aplicá-lo. Pressão direta resolve a maioria dos sangramentos; torniquete é reservado para hemorragias graves em membros que pressão direta não consegue conter, e seu uso correto exige treinamento específico — não é um recurso para usar "por garantia".

## Queimaduras: por que água corrente, não gelo

Uma queimadura continua danificando o tecido pelo calor residual mesmo depois que a fonte de calor foi removida — é um processo que continua se desenrolando por minutos. Água corrente em temperatura ambiente absorve esse calor residual de forma gradual e contínua, interrompendo o avanço do dano. Gelo parece lógico (resfriar mais rápido), mas o choque térmico extremo constringe os vasos sanguíneos locais de forma abrupta e pode danificar ainda mais o tecido já fragilizado — o resfriamento precisa ser gradual, não extremo. Cubra a área com um pano limpo depois, sem estourar bolhas: a bolha é uma barreira natural contra infecção enquanto a pele se regenera por baixo.

## Fraturas: por que imobilizar na posição encontrada

Um osso fraturado pode ter fragmentos próximos a vasos sanguíneos e nervos. Qualquer movimento adicional da região — incluindo a tentativa de "recolocar no lugar" — arrisca que esses fragmentos se desloquem e lesionem essas estruturas, transformando uma fratura simples em uma complicada. Por isso a técnica correta é estabilizar o membro na posição exata em que foi encontrado, usando talas improvisadas (uma revista enrolada, um pedaço de madeira) amarradas sem apertar a ponto de cortar circulação, e aguardar atendimento — não tentar corrigir o alinhamento.

## Choque: por que elevar as pernas

Em um quadro de choque (pele fria e pálida, pulso rápido e fraco, confusão mental), o corpo está com dificuldade de manter fluxo sanguíneo suficiente para os órgãos vitais. Deitar a pessoa e elevar as pernas — quando não há suspeita de fratura nessa região — usa a gravidade para ajudar o sangue das pernas a retornar mais facilmente ao tronco, onde está concentrada a demanda dos órgãos vitais. Manter a pessoa aquecida evita que o corpo gaste energia adicional tentando se aquecer, energia que nesse momento está mais necessária em outro lugar.

## Quando parar de tentar resolver sozinho

Sangramento que não cede à pressão direta, dificuldade real para respirar, perda de consciência, queimadura extensa ou fratura exposta (o osso rompe a pele) são sinais de que o quadro excede o que primeiros socorros conseguem resolver — nesses casos, acionar ou buscar atendimento profissional é a prioridade, e as técnicas acima servem para estabilizar enquanto esse atendimento chega, não para substituí-lo.`,
};
