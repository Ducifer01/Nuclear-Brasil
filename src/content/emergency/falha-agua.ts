import type { Scenario } from "@/lib/emergencyScenario";

export const falhaAguaScenario: Scenario = {
  slug: "falha-agua",
  defaultPhaseIndex: 2,
  sourceLabel: "ANA — Agência Nacional de Águas e Saneamento Básico",
  sourceUrl: "https://www.gov.br/ana/pt-br",
  reviewDate: "01/10/2026",
  authorityLevel: 1,
  relatedArticleHref: "/learn/agua",
  relatedArticleLabel: "Água: armazenamento e tratamento",
  phases: [
    {
      key: "antes",
      tab: "ANTES",
      phaseLabel: "FASE 0 · PREPARAÇÃO",
      title: "ANTES",
      subtitle: "Uma reserva de água só existe de verdade se foi montada antes de faltar.",
      steps: [
        "Mantenha uma reserva de água armazenada equivalente a pelo menos 3 dias de consumo da casa — use a calculadora de água deste site para estimar o volume certo para o número de pessoas, clima e dias que você quer cobrir.",
        "Saiba localizar o registro geral de água da sua casa — ele é o que permite isolar um vazamento interno, que pode ser confundido com uma falha de abastecimento externa.",
        "Tenha pelo menos um método de tratamento disponível (fervura é suficiente para risco microbiológico; pastilhas ou filtro específico ampliam as opções) para o caso de precisar usar uma fonte alternativa de água.",
      ],
    },
    {
      key: "durante",
      tab: "FALTA",
      phaseLabel: "FASE 0 · AO PERCEBER A FALTA",
      title: "AO PERCEBER A FALTA DE ÁGUA",
      subtitle: "O primeiro passo é diagnosticar a causa, porque a resposta certa depende dela.",
      steps: [
        "Verifique se o problema é isolado à sua casa (vazamento, registro fechado) ou atinge a rede toda — pergunte a vizinhos ou consulte o aplicativo/site da concessionária local antes de assumir que é uma falha geral.",
        "Se o registro geral estiver fechado ou com defeito, esse é um problema que você mesmo pode resolver ou que exige um encanador — diferente de uma falha de abastecimento, que depende da concessionária.",
      ],
    },
    {
      key: "agora",
      tab: "AGORA",
      phaseLabel: "FASE 1 · AGORA",
      title: "AGORA",
      subtitle: "Com a causa identificada como falha externa, a prioridade passa a ser usar bem o que já está armazenado.",
      steps: [
        "Comece a usar a reserva armazenada com racionamento deliberado — beber vem antes de higiene pessoal, que vem antes de qualquer uso não essencial.",
        "Pare imediatamente qualquer uso não essencial de água (lavar veículo, irrigar jardim, lavar calçada) — esse é o primeiro ajuste de consumo que não compromete nada essencial.",
        "Se possível, feche o registro geral da sua casa até a situação se normalizar — isso evita que a água que eventualmente retornar à rede escoe sem controle por uma torneira esquecida aberta.",
      ],
    },
    {
      key: "primeira-hora",
      tab: "1ª HORA",
      phaseLabel: "FASE 2 · 1ª HORA",
      title: "PRIMEIRA HORA",
      subtitle: "Buscar informação oficial reduz a incerteza sobre quanto tempo a reserva precisa durar.",
      steps: [
        "Contate a concessionária de água local ou acompanhe comunicados oficiais sobre a causa e a previsão de normalização.",
        "Avalie fontes alternativas disponíveis na região (caminhão-pipa, pontos de distribuição) caso a previsão de retorno seja longa — mas trate qualquer água dessas fontes com o mesmo cuidado de tratamento que daria a uma fonte desconhecida.",
      ],
    },
    {
      key: "24h",
      tab: "24H",
      phaseLabel: "FASE 3 · 24 HORAS",
      title: "PRIMEIRAS 24 HORAS",
      subtitle: "Toda água que não veio do seu estoque original precisa ser avaliada antes de beber.",
      steps: [
        "Trate qualquer água de fonte alternativa (poço, chuva coletada, caminhão-pipa) antes de beber — a origem e o que pode ter contaminado essa água no caminho até você determinam o método de tratamento certo, não a aparência dela.",
        "Priorize o uso da água disponível nesta ordem: beber, higiene básica, outros usos — essa ordem reflete o que o corpo tolera perder primeiro.",
        "Continue monitorando comunicados sobre a normalização — a duração real de uma falha de abastecimento de grande escala costuma ser maior do que a estimativa inicial.",
      ],
    },
    {
      key: "dias",
      tab: "DIAS",
      phaseLabel: "FASE 4 · DIAS SEGUINTES",
      title: "AO NORMALIZAR",
      subtitle: "O retorno da água também exige um cuidado específico antes de voltar ao uso normal.",
      steps: [
        "Deixe a torneira correr por alguns instantes antes de usar a água para beber — a tubulação pode ter acumulado ar ou sedimento durante o período sem fluxo normal.",
        "Reponha a reserva de água consumida assim que possível — o próximo evento de falha pode acontecer antes que você espere, e um estoque não reposto é um estoque que falha na próxima vez.",
      ],
    },
  ],
};
