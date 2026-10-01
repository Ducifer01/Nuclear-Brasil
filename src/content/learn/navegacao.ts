import type { LearnArticle } from "./types";

export const navegacao: LearnArticle = {
  slug: "navegacao",
  category: "Navegação",
  title: "Navegação sem GPS: mapas, bússola e pontos de encontro",
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
      label: "IAEA — Emergency Preparedness and Response",
      url: "https://www.iaea.org/topics/emergency-preparedness-and-response",
    },
  ],
  body: `GPS e navegação por celular compartilham uma mesma cadeia de dependências: bateria, sinal de satélite ou de rede, e muitas vezes conexão de internet para carregar o mapa. Numa emergência, qualquer um desses três elos pode falhar — e quando um falha, a navegação digital para por completo. Mapas impressos e uma bússola não têm essa cadeia de dependências: funcionam exatamente igual com bateria zero ou com toda a rede de celular fora do ar.

## Por que ponto de encontro resolve um problema que comunicação não resolve

Quando a comunicação por celular falha, o problema não é só "não consigo avisar que estou bem" — é "não sei onde encontrar minha família". Um ponto de encontro combinado com antecedência resolve esse segundo problema sem depender de nenhuma comunicação: cada pessoa já sabe para onde ir, independentemente de conseguir avisar as outras. A escolha certa é ter dois pontos — um próximo de casa, para separações de curto alcance, e outro fora da vizinhança, para o cenário em que a própria área precisa ser evacuada e o primeiro ponto deixa de ser seguro ou acessível.

## Por que uma rota alternativa importa mais do que parece

A maioria das pessoas conhece só uma forma de ir de casa ao trabalho ou à escola. Numa emergência, essa única rota pode estar bloqueada, congestionada ou inacessível — e sem uma alternativa já mapeada, a decisão de como contornar precisa ser tomada no momento, sob pressão, com informação incompleta. Planejar com antecedência pelo menos um caminho alternativo para cada trajeto importante transforma essa decisão de "pensar sob pressão" para "lembrar de um plano já feito".

## Por que um mapa genérico não serve

Um mapa de grande escala (do país, do estado) mostra proporção e distância, mas não os detalhes que importam numa decisão real de deslocamento — qual rua tem acesso a pé viável, onde fica a passagem alternativa quando a via principal está bloqueada. Esse nível de detalhe só existe em um mapa local da sua própria região, impresso com antecedência — não é algo para improvisar no momento, porque a disponibilidade de internet para consultar um mapa digital detalhado é exatamente o tipo de recurso que pode não estar disponível quando mais se precisa dele.`,
};
