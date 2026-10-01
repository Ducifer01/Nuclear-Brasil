import type { Scenario } from "@/lib/emergencyScenario";

export const colapsoAtendimentoScenario: Scenario = {
  slug: "colapso-atendimento",
  defaultPhaseIndex: 2,
  sourceLabel: "Ministério da Saúde — SAMU 192 / Política Nacional de Atenção às Urgências",
  sourceUrl: "https://www.gov.br/saude/pt-br/composicao/saes/samu-192",
  reviewDate: "01/10/2026",
  authorityLevel: 1,
  relatedArticleHref: "/learn/primeiros-socorros",
  relatedArticleLabel: "Primeiros socorros",
  phases: [
    {
      key: "antes",
      tab: "ANTES",
      phaseLabel: "FASE 0 · PREPARAÇÃO",
      title: "ANTES",
      subtitle: "Boa parte do que ajuda aqui não depende do sistema de saúde estar funcionando bem.",
      steps: [
        "Aprenda primeiros socorros básicos antes de precisar — pressão direta em sangramento, reconhecimento de sinais de gravidade, isso não depende de nenhum recurso externo para ser aplicado.",
        "Mantenha documentação médica impressa de cada pessoa da casa (alergias, medicamentos em uso, condições crônicas) — ela pode ser decisiva numa triagem rápida, quando não há tempo para levantar esse histórico com calma.",
        "Saiba onde ficam a UBS (Unidade Básica de Saúde) e o pronto-socorro mais próximos de casa, e qual atende cada tipo de necessidade — nem toda necessidade de saúde exige pronto-socorro.",
      ],
    },
    {
      key: "durante",
      tab: "SUPERLOTAÇÃO",
      phaseLabel: "FASE 0 · AO PERCEBER SUPERLOTAÇÃO",
      title: "AO PERCEBER QUE O ATENDIMENTO ESTÁ SOBRECARREGADO",
      subtitle: "A primeira decisão real é avaliar a gravidade antes de escolher onde buscar atendimento.",
      steps: [
        "Avalie com honestidade se a situação é uma emergência real (risco à vida, sangramento grave, dificuldade respiratória severa) ou algo que pode esperar ou ser resolvido numa UBS — essa distinção determina se buscar o pronto-socorro superlotado é mesmo a opção certa.",
        "Para uma emergência real, buscar atendimento não é opcional independentemente da superlotação — é a decisão correta mesmo com espera, porque o risco de não buscar é maior do que o risco de esperar.",
      ],
    },
    {
      key: "agora",
      tab: "AGORA",
      phaseLabel: "FASE 1 · AGORA",
      title: "AGORA",
      subtitle: "Para emergências reais, o canal certo é o SAMU — e a forma como você descreve a situação importa.",
      steps: [
        "Para uma emergência real, ligue 192 (SAMU) e descreva a situação com a maior clareza possível: o que aconteceu, sinais visíveis (consciência, respiração, sangramento), e a localização exata — essa informação determina a prioridade e o tipo de resposta enviada.",
        "Enquanto espera, aplique os primeiros socorros que você souber fazer com segurança — estabilizar, não tentar curar, é o objetivo nesse intervalo.",
        "Mantenha a pessoa monitorada: consciência, respiração e qualquer mudança no quadro são informações que você vai precisar relatar a quem chegar para atender.",
      ],
    },
    {
      key: "primeira-hora",
      tab: "1ª HORA",
      phaseLabel: "FASE 2 · 1ª HORA",
      title: "PRIMEIRA HORA",
      subtitle: "Continuar monitorando e se comunicar com clareza ajuda quem está vindo atender.",
      steps: [
        "Continue observando sinais de piora enquanto aguarda atendimento — uma mudança no quadro é informação relevante para relatar na chegada da equipe.",
        "Se o quadro mudar de forma significativa antes do atendimento chegar, uma nova ligação ao 192 com essa atualização pode mudar a prioridade da resposta.",
      ],
    },
    {
      key: "24h",
      tab: "24H",
      phaseLabel: "FASE 3 · 24 HORAS",
      title: "SE O SISTEMA ESTIVER SOBRECARREGADO POR UM EVENTO MAIOR",
      subtitle: "Entender como funciona a triagem ajuda a não interpretar a espera como abandono.",
      steps: [
        "Em sobrecarga por um evento de grande escala, hospitais e equipes aplicam triagem — atendem primeiro quem tem risco mais imediato à vida. Isso significa que casos leves esperam mais, por definição, não por falha do sistema ou descaso individual.",
        "Reavalie periodicamente se o quadro que parecia leve continua leve — um sintoma que parecia menor pode evoluir, e isso muda a prioridade de triagem.",
      ],
    },
    {
      key: "dias",
      tab: "DIAS",
      phaseLabel: "FASE 4 · DIAS SEGUINTES",
      title: "DIAS SEGUINTES",
      subtitle: "Condições que não eram urgência ainda precisam de acompanhamento.",
      steps: [
        "Busque acompanhamento numa UBS para qualquer condição que não era urgência mas precisa de seguimento — o alívio imediato de uma emergência resolvida não significa que não há mais nada a cuidar.",
        "Reponha o kit de primeiros socorros e qualquer medicamento usado durante o evento — isso garante que você está preparado para o próximo episódio, não apenas para o que já passou.",
      ],
    },
  ],
};
