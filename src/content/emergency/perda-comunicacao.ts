import type { Scenario } from "@/lib/emergencyScenario";

export const perdaComunicacaoScenario: Scenario = {
  slug: "perda-comunicacao",
  defaultPhaseIndex: 2,
  sourceLabel: "Anatel — Gestão de Risco em Desastres e Emergências",
  sourceUrl: "https://www.gov.br/anatel/pt-br",
  reviewDate: "01/10/2026",
  authorityLevel: 1,
  relatedArticleHref: "/learn/comunicacao",
  relatedArticleLabel: "Comunicação sem internet",
  phases: [
    {
      key: "antes",
      tab: "ANTES",
      phaseLabel: "FASE 0 · PREPARAÇÃO",
      title: "ANTES",
      subtitle: "Um plano de comunicação só funciona se foi combinado antes de precisar dele.",
      steps: [
        "Tenha um rádio a pilha ou manivela disponível — ele não depende de rede de celular para receber comunicados oficiais.",
        "Mantenha uma lista de contatos de emergência em papel, não só salva no celular — se o aparelho ficar sem bateria ou danificado, a cópia física continua acessível.",
        "Combine um ponto de encontro físico com a família, e um contato fora da região para centralizar informação de que todos estão bem — isso resolve o problema de reencontro sem depender de nenhuma comunicação funcionando.",
      ],
    },
    {
      key: "durante",
      tab: "SEM SINAL",
      phaseLabel: "FASE 0 · AO PERCEBER A PERDA",
      title: "AO PERCEBER A PERDA DE SINAL",
      subtitle: "A causa pode ser congestionamento de rede, não necessariamente destruição de infraestrutura.",
      steps: [
        "Verifique se o problema é só o seu aparelho ou se outras pessoas ao redor também estão sem sinal — isso indica se é um problema pontual ou uma falha mais ampla na área.",
        "Tente enviar SMS mesmo que a ligação de voz não complete — SMS usa muito menos capacidade de rede e costuma passar em situações de congestionamento onde chamadas não completam.",
        "Não insista ligando repetidamente quando a chamada não completa — cada tentativa consome capacidade de rede sem necessariamente completar, piorando o congestionamento para todos ao seu redor.",
      ],
    },
    {
      key: "agora",
      tab: "AGORA",
      phaseLabel: "FASE 1 · AGORA",
      title: "AGORA",
      subtitle: "Sem conseguir confirmar informação por celular, siga o plano já combinado.",
      steps: [
        "Se a situação exigir, vá ao ponto de encontro já combinado com a família — não espere conseguir contato por celular para tomar essa decisão.",
        "Ligue o rádio a pilha para acompanhar comunicados oficiais — ele não compete pela mesma rede congestionada que o celular.",
        "Avalie se a situação exige ação imediata independente de comunicação, ou se pode esperar a rede normalizar — nem toda perda de sinal exige mudança de comportamento.",
      ],
    },
    {
      key: "primeira-hora",
      tab: "1ª HORA",
      phaseLabel: "FASE 2 · 1ª HORA",
      title: "PRIMEIRA HORA",
      subtitle: "Conservar bateria é mais útil do que insistir continuamente tentando se conectar.",
      steps: [
        "Mantenha o celular em modo de economia de energia entre tentativas espaçadas de contato — deixá-lo continuamente buscando uma rede congestionada gasta bateria sem resultado proporcional.",
        "Tente contato em horários espaçados, não continuamente — a rede pode ter picos e vales de congestionamento, e uma nova tentativa alguns minutos depois tem chance real de funcionar quando a anterior não funcionou.",
      ],
    },
    {
      key: "24h",
      tab: "24H",
      phaseLabel: "FASE 3 · 24 HORAS",
      title: "PRIMEIRAS 24 HORAS",
      subtitle: "A Anatel pode coordenar prestadoras para priorizar áreas de desastre — isso leva tempo para se refletir na prática.",
      steps: [
        "Entenda que o restabelecimento de rede em uma área de desastre pode levar horas a dias, dependendo da causa e da prioridade dada pelas prestadoras de telecomunicação em coordenação com órgãos governamentais.",
        "Continue priorizando SMS sobre ligação de voz, e rádio para informação oficial — essas duas alternativas continuam mais confiáveis que tentar restabelecer uma chamada de voz em rede ainda congestionada.",
      ],
    },
    {
      key: "dias",
      tab: "DIAS",
      phaseLabel: "FASE 4 · DIAS SEGUINTES",
      title: "AO NORMALIZAR",
      subtitle: "A comunicação voltar ao normal é o momento de fechar o ciclo e revisar o plano.",
      steps: [
        "Avise seu contato fora da região, combinado com antecedência, de que a situação está resolvida — ele é quem estava centralizando a informação sobre todos.",
        "Revise o que funcionou e o que não funcionou no seu plano de comunicação durante o evento, e ajuste antes do próximo — um plano de comunicação que nunca foi testado tem mais chance de ter falhas que só aparecem na prática.",
      ],
    },
  ],
};
