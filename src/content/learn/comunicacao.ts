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
  weKnow:
    "Redes de celular e internet costumam ficar sobrecarregadas ou indisponíveis logo após um grande incidente — não porque a infraestrutura necessariamente foi destruída, mas porque muitas pessoas tentam usá-la ao mesmo tempo. Rádio (AM/FM) é mais resiliente, pois é uma transmissão de um para muitos.",
  recommended:
    "Antes de qualquer emergência, combine com a família um ponto de encontro e um contato fora da região (mensagens curtas costumam passar mais fácil que ligações). Durante a emergência, prefira SMS a ligações, mantenha o celular em modo de economia de energia e sintonize um rádio a pilha ou manivela em uma emissora local para instruções oficiais.",
  why:
    "SMS usa muito menos capacidade de rede que uma ligação de voz, por isso tende a passar mesmo quando a rede está congestionada. Rádio não depende de uma rede compartilhada — cada aparelho só precisa captar o sinal da emissora.",
  uncertain:
    "A disponibilidade real de rede varia por operadora, região e pela extensão do incidente — não há garantia de que SMS funcione em todos os cenários, apenas maior probabilidade em relação à voz.",
  myths: [
    "Ligar repetidamente quando a chamada não completa piora o congestionamento da rede para todo mundo — espere e tente novamente depois, ou use SMS.",
    "Um rádio comum (AM/FM) não substitui um rádio amador para transmitir, mas é suficiente e mais simples para apenas receber informações oficiais.",
  ],
};
