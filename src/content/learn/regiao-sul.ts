import type { LearnArticle } from "./types";

export const regiaoSul: LearnArticle = {
  slug: "regiao-sul",
  category: "Brasil",
  title: "Região Sul: clima, água e agricultura",
  riskLevel: "alto",
  authorityLevel: 1,
  status: "verified",
  version: "1.0",
  author: "Nuclear Survival",
  reviewer: "Pendente",
  createdAt: "30/09/2026",
  lastReview: "30/09/2026",
  nextReview: "30/03/2027",
  sources: [
    { label: "INMET — Normais Climatológicas do Brasil", url: "https://portal.inmet.gov.br/" },
    { label: "CEMADEN — Nota técnica sobre o desastre de abril/maio de 2024 no Rio Grande do Sul", url: "https://www.gov.br/cemaden/pt-br/assuntos/monitoramento/notas-tecnicas/nota-tecnica-no-412-2024-sei-cemaden-mapeamento-dos-movimentos-de-massa-relacionados-ao-desastre-de-abril-maio-2024-no-estado-do-rio-grande-do-sul" },
    { label: "ANA — Agência Nacional de Águas e Saneamento Básico", url: "https://www.gov.br/ana/pt-br" },
    { label: "Embrapa — Zoneamento Agrícola de Risco Climático (ZARC)", url: "https://www.embrapa.br/" },
    { label: "SEDEC/MDR — Guia Prático de Utilização de Alertas do Governo Federal", url: "https://www.gov.br/mdr/pt-br/centrais-de-conteudo/publicacoes/protecao-e-defesa-civil-sedec/guiapraticodesastres.pdf" },
  ],
  weKnow:
    "O Sul é a única região brasileira sem estação seca bem definida — chuva se distribui ao longo do ano todo (INMET), associada à passagem de frentes frias vindas do sul do continente, o que também traz risco de temporais, granizo, vento forte e geada no inverno. O CEMADEN documentou em nota técnica específica o desastre de grandes proporções de abril/maio de 2024 no Rio Grande do Sul, com mapeamento de movimentos de massa — um exemplo concreto, verificado, do potencial de enchente severa na região, não um cenário hipotético.",
  recommended:
    "Não presuma uma \"estação segura\" no Sul: eventos de temporal, enchente e vento forte podem ocorrer em qualquer mês. Mantenha-se inscrito nos sistemas de alerta da Defesa Civil do seu município durante todo o ano, não apenas em períodos historicamente chuvosos. Depois do desastre de 2024 no RS, reforçar plano de evacuação e ponto de encontro familiar é especialmente relevante para quem mora perto de rios na região — o evento mostrou que a escala de uma enchente pode superar o planejamento baseado apenas na experiência de eventos anteriores. Para agricultura, o zoneamento ZARC da Embrapa considera o risco de geada no inverno, relevante para culturas sensíveis ao frio nesta região especificamente.",
  why:
    "A ausência de estação seca definida significa que o solo pode estar saturado em qualquer época do ano, o que eleva o risco de enchente mesmo fora dos meses tradicionalmente mais chuvosos — é uma característica climática estrutural da região, não uma anomalia. O evento de 2024 no Rio Grande do Sul, documentado oficialmente pelo CEMADEN, demonstrou que a magnitude de um desastre pode exceder os cenários historicamente esperados, reforçando por que planos de evacuação não devem assumir um \"pior caso\" fixo baseado só no passado recente.",
  uncertain:
    "A frequência de eventos climáticos extremos na região pode estar mudando ao longo dos anos; este artigo não faz projeções sobre tendência futura, apenas descreve o padrão e um evento documentado recente. O risco hiperlocal de enchente depende da proximidade a rios/encostas específicos, informação que deve vir da Defesa Civil do seu município.",
  myths: [
    "\"No Sul, o verão é a única época de risco de temporal.\" — Frentes frias e temporais associados ocorrem ao longo do ano inteiro na região, não só no verão.",
    "\"Uma enchente nunca vai ser maior do que a maior já vista.\" — O evento de 2024 no Rio Grande do Sul, oficialmente documentado, mostrou um desastre de escala que superou expectativas baseadas em eventos anteriores — planos de evacuação devem ter margem além do \"pior caso\" histórico conhecido.",
  ],
};
