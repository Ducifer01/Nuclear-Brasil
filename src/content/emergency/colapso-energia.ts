import type { Scenario } from "@/lib/emergencyScenario";

export const colapsoEnergiaScenario: Scenario = {
  slug: "colapso-energia",
  defaultPhaseIndex: 2,
  sourceLabel: "ONS — Operador Nacional do Sistema Elétrico",
  sourceUrl: "https://www.ons.org.br/",
  reviewDate: "01/10/2026",
  authorityLevel: 1,
  relatedArticleHref: "/learn/energia",
  relatedArticleLabel: "Energia: do essencial à geração de longo prazo",
  phases: [
    {
      key: "antes",
      tab: "ANTES",
      phaseLabel: "FASE 0 · PREPARAÇÃO",
      title: "ANTES",
      subtitle: "Um apagão de grande escala não se resolve em minutos — a preparação é o que separa um incômodo de um problema sério.",
      steps: [
        "Mantenha lanternas e pilhas sobressalentes em um lugar fixo e conhecido por todos em casa — procurá-las no escuro, pela primeira vez, é mais difícil do que parece.",
        "Mantenha um power bank sempre carregado — ele é o que preserva sua capacidade de comunicação nas primeiras horas, antes de qualquer outra solução de energia entrar em ação.",
        "Saiba localizar o disjuntor geral da sua casa — ele é relevante tanto para desligar aparelhos sensíveis durante a falta de energia quanto para isolar um problema elétrico específico depois.",
        "Se alguém em casa depende de equipamento médico ligado à energia elétrica, tenha um plano alternativo específico para esse equipamento — esse é o cenário onde a falta de energia deixa de ser incômodo e passa a ser risco direto à saúde.",
      ],
    },
    {
      key: "durante",
      tab: "QUEDA",
      phaseLabel: "FASE 0 · NO MOMENTO",
      title: "AO FALTAR ENERGIA",
      subtitle: "Os primeiros minutos definem se você vai proteger ou arriscar seus próprios equipamentos.",
      steps: [
        "Desligue aparelhos eletrônicos sensíveis da tomada — quando a energia retorna, picos de tensão no restabelecimento podem danificar equipamentos que ficaram ligados durante a queda.",
        "Mantenha a geladeira e o freezer fechados o máximo possível — cada abertura deixa entrar ar quente e acelera a perda da temperatura interna, reduzindo o tempo que os alimentos continuam seguros.",
        "Verifique se a falta de energia atinge só sua casa ou a vizinhança inteira — isso muda completamente o que fazer a seguir: um problema isolado pode ser um disjuntor da sua própria casa, resolvido localmente; um apagão de área exige esperar a concessionária.",
      ],
    },
    {
      key: "agora",
      tab: "AGORA",
      phaseLabel: "FASE 1 · AGORA",
      title: "AGORA",
      subtitle: "Resolver iluminação e informação, sem desperdiçar os recursos que você tem.",
      steps: [
        "Use lanternas para iluminação, não velas — vela aberta é uma fonte de ignição real num ambiente onde você pode estar menos atento que o normal, e perto de materiais inflamáveis sem perceber no escuro.",
        "Ligue o rádio a pilha para acompanhar informação sobre a extensão e a causa da falha — essa informação muda sua expectativa de quanto tempo esperar.",
        "Conserve a bateria do celular: ative o modo avião ou economia de energia entre as tentativas de contato, em vez de deixá-lo continuamente procurando sinal de uma rede que pode também estar afetada.",
      ],
    },
    {
      key: "primeira-hora",
      tab: "1ª HORA",
      phaseLabel: "FASE 2 · 1ª HORA",
      title: "PRIMEIRA HORA",
      subtitle: "Avaliar a escala real do problema direciona o que fazer nas horas seguintes.",
      steps: [
        "Verifique com a concessionária de energia (telefone ou aplicativo, se a rede de dados ainda funcionar) se há previsão de restabelecimento e qual a causa informada.",
        "Avise vizinhos ou familiares próximos que dependem de equipamentos médicos à energia elétrica, caso você saiba de alguém nessa situação — esse é o grupo que mais precisa de atenção prioritária num apagão prolongado.",
        "Evite abrir a geladeira e o freezer além do estritamente necessário — a cada hora sem energia, a margem de segurança dos alimentos armazenados diminui.",
      ],
    },
    {
      key: "24h",
      tab: "24H",
      phaseLabel: "FASE 3 · 24 HORAS",
      title: "PRIMEIRAS 24 HORAS",
      subtitle: "Apagões de grande escala podem levar horas a dias para normalizar — planeje para o cenário mais longo, não o mais otimista.",
      steps: [
        "Racione o uso de qualquer fonte de energia reserva (power bank, bateria, gerador) — se a falta se estender, você vai precisar dela distribuída ao longo de mais tempo do que imaginou inicialmente.",
        "Alimentos no freezer que não foi aberto costumam se manter seguros por cerca de 24 a 48 horas, dependendo de quão cheio ele está — um freezer cheio retém frio por mais tempo que um parcialmente vazio.",
        "Se estiver usando gerador a combustão, opere-o totalmente ao ar livre, longe de janelas e entradas de ar — monóxido de carbono se acumula rapidamente mesmo em espaços parcialmente ventilados.",
      ],
    },
    {
      key: "dias",
      tab: "DIAS",
      phaseLabel: "FASE 4 · DIAS SEGUINTES",
      title: "AO NORMALIZAR",
      subtitle: "O retorno da energia tem seus próprios riscos — não é só o fim do problema.",
      steps: [
        "Religue equipamentos aos poucos, não todos de uma vez — o retorno de energia depois de uma falha grande pode vir acompanhado de picos de tensão, e ligar tudo simultaneamente também sobrecarrega sua própria instalação elétrica.",
        "Descarte alimentos que ficaram tempo demais sem refrigeração adequada — na dúvida sobre quanto tempo passou ou qual temperatura foi atingida, descartar é mais seguro do que arriscar.",
        "Revise o que faltou no seu preparo (lanterna sem pilha, power bank descarregado) e corrija antes do próximo evento — cada apagão é uma oportunidade de identificar a lacuna real do seu plano, não só de atravessar o momento.",
      ],
    },
  ],
};
