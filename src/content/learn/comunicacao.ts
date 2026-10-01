import type { LearnArticle } from "./types";

export const comunicacao: LearnArticle = {
  slug: "comunicacao",
  category: "Comunicação",
  title: "Comunicação: antes, durante e sem internet",
  riskLevel: "alto",
  authorityLevel: 3,
  status: "verified",
  version: "1.0",
  author: "Nuclear Survival",
  reviewer: "Pendente",
  createdAt: "30/09/2026",
  lastReview: "30/09/2026",
  nextReview: "30/03/2027",
  sources: [
    {
      label: "IAEA — Emergency Preparedness and Response",
      url: "https://www.iaea.org/topics/emergency-preparedness-and-response",
    },
  ],
  body: `Uma rede de celular não cai, na maioria dos incidentes, porque as torres foram destruídas — ela fica congestionada porque todo mundo na área tenta usá-la ao mesmo tempo. Entender essa diferença muda a estratégia: o problema não é "não há rede", é "a rede tem uma capacidade finita de chamadas simultâneas, e você está competindo por uma fatia dela com todos os seus vizinhos".

## Por que SMS passa quando ligação não passa

Uma ligação de voz mantém um canal de rede aberto e dedicado durante toda a duração da chamada. Um SMS é um pacote pequeno, enviado e armazenado pela rede até ser entregue, sem precisar de um canal contínuo. Isso faz com que SMS continue sendo entregue — às vezes com atraso — em situações de congestionamento onde chamadas de voz simplesmente não completam. Na prática: se sua ligação não completa, não insista ligando de novo repetidamente — cada tentativa de chamada consome capacidade da rede sem necessariamente completar, piorando o congestionamento para todos. Envie um SMS e espere.

## Por que rádio funciona quando celular não funciona

Rádio AM/FM é transmissão de um ponto para muitos receptores — cada aparelho de rádio só precisa captar o sinal que a emissora já está transmitindo, sem nenhuma negociação de rede, sem limite de quantas pessoas podem "se conectar" ao mesmo tempo. É por isso que um rádio a pilha continua funcionando mesmo quando toda a rede de celular da região está saturada: ele não depende dessa rede para nada. Essa é a razão para manter um rádio a pilha ou manivela como parte do kit básico, não apenas uma recomendação genérica de "ter um rádio".

## Montando um plano de comunicação antes da emergência

Um plano de comunicação eficaz tem duas peças: um ponto de encontro físico combinado com antecedência (para quando ninguém consegue se comunicar) e um contato fora da região afetada (porque chamadas de longa distância, fora da área congestionada, costumam completar mais facilmente que chamadas dentro da própria área do incidente — cada pessoa da família liga ou manda mensagem para esse contato externo, que centraliza a informação de que todos estão bem). Esse plano só funciona se for combinado e testado antes — durante a emergência não é o momento de decidir isso pela primeira vez.

## Durante a emergência

Priorize SMS sobre ligação. Mantenha o celular em modo de economia de energia entre tentativas de contato — sintonizar o rádio custa muito menos bateria do que deixar o celular tentando se conectar repetidamente a uma rede congestionada. Um rádio comum de recepção (AM/FM) é suficiente para captar comunicados oficiais; ele não serve para transmitir, apenas para receber — se você precisar transmitir uma mensagem para fora, isso exige equipamento diferente (rádio amador, dentro da legislação aplicável), que é um nível de preparação além do básico.`,
};
