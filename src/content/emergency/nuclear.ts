import type { Scenario } from "@/lib/emergencyScenario";

export const nuclearScenario: Scenario = {
  slug: "nuclear",
  defaultPhaseIndex: 2, // "AGORA"
  sourceLabel: "CDC — Radiation Emergencies",
  sourceUrl: "https://www.cdc.gov/radiation-emergencies/safety/index.html",
  reviewDate: "01/10/2026",
  authorityLevel: 1,
  relatedArticleHref: "/learn/fallout",
  relatedArticleLabel: "Entender fallout e descontaminação",
  phases: [
    {
      key: "antes",
      tab: "ANTES",
      phaseLabel: "FASE 0 · PREPARAÇÃO",
      title: "ANTES",
      subtitle: "O que fazer com antecedência, quando nada está acontecendo.",
      steps: [
        "Identifique com antecedência onde se abrigar rapidamente em casa, no trabalho e na escola — de preferência um porão ou o centro de um prédio de concreto ou tijolo. No momento do evento você não vai ter tempo de avaliar opções; a decisão precisa já estar tomada.",
        "Monte o Kit 72h e mantenha-o em local de fácil acesso — ele existe para que você não precise sair do abrigo nas primeiras horas para buscar o que precisa.",
        "Combine com a família um ponto de encontro e um contato fora da região: redes de celular locais tendem a ficar congestionadas primeiro, então um contato fora da área afetada tem mais chance de conseguir repassar informação entre todos.",
        "Aprenda a sintonizar um rádio a pilha em uma emissora local antes de precisar — rádio não depende de rede de celular para funcionar, o que o torna mais confiável quando a infraestrutura de comunicação está sobrecarregada.",
      ],
    },
    {
      key: "durante",
      tab: "DURANTE",
      phaseLabel: "FASE 0 · NO MOMENTO",
      title: "DURANTE A EXPLOSÃO",
      subtitle: "Se você vir o clarão, o que você faz nos próximos segundos importa mais do que qualquer preparação anterior.",
      steps: [
        "Nunca olhe diretamente para o clarão — a intensidade da luz pode causar cegueira temporária ou permanente, dependendo da distância e do tempo de exposição aos olhos.",
        "Jogue-se no chão imediatamente e proteja a cabeça e o pescoço atrás de qualquer barreira disponível — a onda de choque que segue a explosão carrega destroços e pressão suficiente para causar ferimentos graves a quem está de pé e exposto.",
        "Só se levante depois que a onda de choque passar completamente — isso pode levar de poucos segundos a cerca de um minuto, dependendo da sua distância do centro da explosão. Levantar-se cedo demais expõe você à própria onda ainda em curso.",
        "Se estiver dirigindo, pare com segurança fora da via e abrigue-se imediatamente — continuar dirigindo nesse momento soma o risco da onda de choque ao risco de perder controle do veículo.",
      ],
    },
    {
      key: "agora",
      tab: "AGORA",
      phaseLabel: "FASE 1 · AGORA",
      title: "AGORA",
      subtitle: "Primeiros minutos após o clarão. A lógica aqui é simples: tempo, distância e blindagem reduzem a dose de radiação que você recebe.",
      steps: [
        "Entre em um edifício assim que possível — qualquer estrutura de concreto ou tijolo já oferece blindagem significativa comparada a ficar ao ar livre, onde fallout está se depositando.",
        "Vá para o porão ou para a parte mais central da estrutura — isso maximiza tanto a blindagem (mais massa entre você e o ambiente externo) quanto a distância das superfícies onde o material radioativo se deposita.",
        "Afaste-se de janelas, paredes externas e do teto — vidro e paredes finas oferecem pouca blindagem real, e ficar perto delas anula boa parte da proteção que o resto do prédio está te dando.",
        "Fique dentro e acompanhe as instruções oficiais — a orientação de quando é seguro sair depende de informação sobre o evento específico que você não tem de dentro do abrigo.",
      ],
    },
    {
      key: "primeira-hora",
      tab: "1ª HORA",
      phaseLabel: "FASE 2 · 1ª HORA",
      title: "PRIMEIRA HORA",
      subtitle: "Se você esteve exposto do lado de fora, a descontaminação começa aqui — e a camada externa da roupa é a prioridade.",
      steps: [
        "Remova a camada externa das roupas com cuidado, sem sacudi-las, e guarde-as longe de pessoas e alimentos — essa roupa concentrou boa parte do material depositado durante a exposição, e o CDC estima que essa única ação remove cerca de 90% da contaminação radioativa que ela carregava.",
        "Lave a pele exposta com água morna e sabão suave, sem esfregar com força — esfregar empurra partículas para dentro dos poros em vez de removê-las da superfície, o oposto do efeito desejado.",
        "Cubra nariz e boca com um pano até estar em um ambiente limpo — isso reduz a chance de inalar partículas que ainda possam estar suspensas no ar ao seu redor.",
        "Evite comer ou beber qualquer coisa que tenha ficado exposta ao ar livre depois da explosão — alimentos e água destampados podem ter recebido o mesmo material que se depositou em superfícies externas.",
        "Reduza o uso de celular e rádio ao mínimo necessário — a rede provavelmente está sobrecarregada, e conservar bateria agora significa ter comunicação disponível quando for mais necessária, nas horas seguintes.",
      ],
    },
    {
      key: "24h",
      tab: "24H",
      phaseLabel: "FASE 3 · 24 HORAS",
      title: "PRIMEIRAS 24 HORAS",
      subtitle: "A intensidade do fallout cai de forma acentuada logo após a explosão — é por isso que esperar é a estratégia certa.",
      steps: [
        "O decaimento da radiação do fallout segue aproximadamente a regra do '7-10': a cada vez que o tempo decorrido se multiplica por 7, a intensidade cai por volta de 10 vezes. Isso significa que as primeiras horas concentram a maior parte do risco, e esperar dentro do abrigo reduz a dose recebida de forma desproporcional ao tempo gasto esperando.",
        "Permaneça abrigado — autoridades costumam recomendar ao menos 24 horas antes de avaliar a saída, podendo ser mais tempo dependendo da quantidade de material liberado e das condições de vento. Esse número reflete o ponto em que a curva de decaimento já derrubou a maior parte da intensidade inicial.",
        "Beba apenas água armazenada ou de fontes fechadas (garrafas, caixa-d'água fechada) — água que ficou exposta ao ar livre durante esse período pode ter recebido deposição de material radioativo.",
        "Comece a racionar o Kit 72h — não presuma que o fornecimento normal de serviços vai ser restabelecido rapidamente; planejar para um período mais longo custa pouco e evita ficar sem o essencial se a espera se estender.",
      ],
    },
    {
      key: "dias",
      tab: "DIAS",
      phaseLabel: "FASE 4 · DIAS SEGUINTES",
      title: "DIAS SEGUINTES",
      subtitle: "A decisão de sair do abrigo deve vir de orientação oficial, não de uma sensação de que já passou tempo suficiente.",
      steps: [
        "Saia apenas quando autoridades confirmarem que é seguro — elas têm acesso a medições reais da área que você não tem de dentro do abrigo, e são a única fonte confiável sobre o momento certo.",
        "Ao sair, evite contato direto com poeira depositada em superfícies externas — não mexa em solo, telhados ou veículos sem necessidade real, porque o material depositado continua fisicamente presente ali mesmo depois que sua intensidade caiu.",
        "Continue acompanhando comunicados oficiais — rádio costuma seguir mais confiável que celular nesse período, pela mesma razão de resiliência de rede discutida na fase de preparação.",
        "Comece a avaliar o estado de água, alimentos e abrigo para os próximos dias — a transição de 'esperar em abrigo' para 'reorganizar a vida ao redor do que restou' começa aqui.",
      ],
    },
  ],
};
