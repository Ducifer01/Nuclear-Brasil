import type { Scenario } from "@/lib/emergencyScenario";

export const incendioScenario: Scenario = {
  slug: "incendio",
  defaultPhaseIndex: 2, // "AGORA"
  sourceLabel: "Corpo de Bombeiros (CBMSC) — Instrução Técnica de referência",
  sourceUrl: "https://documentoscbmsc.cbm.sc.gov.br/uploads/ff2c91d98cae93cbf18917b5f5f992b3.pdf",
  reviewDate: "01/10/2026",
  authorityLevel: 4,
  relatedArticleHref: "/learn/primeiros-socorros",
  relatedArticleLabel: "Primeiros socorros para queimaduras",
  phases: [
    {
      key: "antes",
      tab: "ANTES",
      phaseLabel: "FASE 0 · PREPARAÇÃO",
      title: "ANTES",
      subtitle: "Cada estado tem Corpo de Bombeiros e normas próprias — o que segue é o princípio comum entre elas.",
      steps: [
        "Um detector de fumaça funciona porque reage à fumaça antes que o calor ou o fogo cheguem a um ponto visível — ele existe para dar o alerta nos primeiros instantes, quando ainda há tempo de agir. Teste a bateria periodicamente; um detector sem pilha é só um objeto na parede.",
        "Memorize duas rotas de saída de casa e do trabalho, não uma só — se o fogo bloquear a rota principal, a segunda é o que evita ficar preso. Portas e corredores de saída nunca devem ficar trancados ou com móveis na frente, mesmo temporariamente.",
        "Combine com quem mora com você um ponto de encontro fora do prédio. Sem isso, famílias se dividem para procurar umas às outras durante a evacuação, o que atrasa todo mundo e aumenta o risco.",
        "Tomadas sobrecarregadas e fiação antiga são uma das causas mais comuns de início de incêndio residencial — verificar isso de tempos em tempos previne o problema na origem, em vez de só se preparar para reagir a ele.",
      ],
    },
    {
      key: "durante",
      tab: "DURANTE",
      phaseLabel: "FASE 0 · NO MOMENTO",
      title: "AO PERCEBER O FOGO",
      subtitle: "Cada segundo entre perceber e agir é tempo que o fogo usa para crescer.",
      steps: [
        "Avise todas as pessoas por perto em voz alta imediatamente. Fogo cresce de forma exponencial nos primeiros minutos — quanto mais cedo todos souberem, mais tempo têm para sair.",
        "Feche as portas atrás de você ao se deslocar. Uma porta fechada retarda a entrada de oxigênio e a propagação de fumaça para o ambiente seguinte — é uma barreira física simples que ganha tempo para quem ainda está saindo.",
        "Nunca use elevador durante um incêndio: ele pode parar entre andares por falha elétrica, prendendo você exatamente na estrutura que está em risco.",
        "Se houver fumaça, abaixe-se e avance o mais próximo do chão possível. Fumaça quente sobe; o ar mais respirável, com menos partículas e menos calor, fica na camada mais baixa do ambiente.",
      ],
    },
    {
      key: "agora",
      tab: "AGORA",
      phaseLabel: "FASE 1 · AGORA",
      title: "AGORA",
      subtitle: "Evacuar é a única prioridade neste momento — qualquer outra coisa pode esperar.",
      steps: [
        "Saia pela rota mais segura disponível, sem parar para reunir pertences — cada segundo gasto procurando algo é tempo a menos de margem de segurança.",
        "Se alguém ou um animal ficou para trás, não volte sozinho: informe os bombeiros assim que possível, para que uma equipe equipada faça essa busca — uma segunda pessoa entrando no incêndio sem equipamento tende a virar uma segunda vítima, não um resgate.",
        "Vá direto ao ponto de encontro combinado, para que seja possível confirmar rapidamente quem já está em segurança.",
        "Ligue 193 e descreva com clareza o endereço, se há alguém dentro e o que está pegando fogo — essa informação determina que tipo de equipe e equipamento serão enviados.",
      ],
    },
    {
      key: "primeira-hora",
      tab: "1ª HORA",
      phaseLabel: "FASE 2 · 1ª HORA",
      title: "PRIMEIRA HORA",
      subtitle: "A partir daqui, a prioridade passa a ser não atrapalhar o trabalho de quem está combatendo o fogo.",
      steps: [
        "Mantenha distância do perímetro do incêndio — equipamentos, mangueiras e a própria instabilidade da estrutura em chamas representam risco para quem fica perto, mesmo sem estar envolvido diretamente.",
        "Informe aos bombeiros qualquer pessoa que você souber que pode ainda estar dentro, com a localização mais precisa possível dentro do imóvel.",
        "Se teve contato com fumaça, procure ar livre e observe sua própria respiração nos minutos seguintes — tosse persistente ou falta de ar são sinais de que a exposição exigiu mais do que o esperado.",
        "Evite divulgar informação não confirmada sobre o incêndio para outras pessoas — rumores sem base atrapalham a resposta e geram pânico desnecessário em quem ainda não está em segurança.",
      ],
    },
    {
      key: "24h",
      tab: "24H",
      phaseLabel: "FASE 3 · 24 HORAS",
      title: "PRIMEIRAS 24 HORAS",
      subtitle: "O fogo visível apagar não significa que o risco acabou.",
      steps: [
        "Não retorne ao local até a liberação formal do Corpo de Bombeiros — calor residual pode reacender pontos que pareciam extintos, e isso acontece horas depois do incêndio aparentemente controlado.",
        "Uma estrutura atingida pelo fogo pode estar com integridade comprometida mesmo sem dano visível a olho nu — vigas e lajes perdem resistência com o calor de formas que não aparecem imediatamente.",
        "Se ficou desabrigado, buscar apoio da assistência social ou da Defesa Civil local é o próximo passo prático, não algo para esperar se resolver sozinho.",
        "Documente os danos com fotos assim que for seguro fazê-lo — esse registro é o que vai sustentar qualquer acionamento de seguro depois.",
      ],
    },
    {
      key: "dias",
      tab: "DIAS",
      phaseLabel: "FASE 4 · DIAS SEGUINTES",
      title: "DIAS SEGUINTES",
      subtitle: "Reocupar o espaço exige inspeção, não apenas a aparência de normalidade.",
      steps: [
        "Só reocupe um espaço afetado depois de inspeção estrutural, quando houve dano à construção — a aparência de que \"está tudo bem\" não é garantia de segurança estrutural real.",
        "Alimentos e água expostos a fumaça ou calor intenso devem ser descartados mesmo sem sinal visível de dano: contaminação por fuligem nem sempre altera aparência, cheiro ou sabor de forma perceptível.",
        "Revise o que funcionou e o que falhou no seu plano de prevenção — detector, extintor, rotas de saída — e ajuste antes de considerar o assunto encerrado; é mais fácil corrigir uma falha de plano agora do que descobrir essa falha num próximo evento.",
      ],
    },
  ],
};
