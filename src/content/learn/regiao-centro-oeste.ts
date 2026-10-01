import type { LearnArticle } from "./types";

export const regiaoCentroOeste: LearnArticle = {
  slug: "regiao-centro-oeste",
  category: "Brasil",
  title: "Região Centro-Oeste: clima, água e agricultura",
  riskLevel: "medio",
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
    { label: "CEMADEN — Centro Nacional de Monitoramento e Alertas de Desastres Naturais", url: "https://www.gov.br/cemaden/pt-br" },
    { label: "ANA — Agência Nacional de Águas e Saneamento Básico", url: "https://www.gov.br/ana/pt-br" },
    { label: "Embrapa — Zoneamento Agrícola de Risco Climático (ZARC)", url: "https://www.embrapa.br/" },
    { label: "SEDEC/MDR — Guia Prático de Utilização de Alertas do Governo Federal", url: "https://www.gov.br/mdr/pt-br/centrais-de-conteudo/publicacoes/protecao-e-defesa-civil-sedec/guiapraticodesastres.pdf" },
  ],
  weKnow:
    "O Centro-Oeste tem clima tropical com estação seca e chuvosa bem definidas (INMET) — a estação seca (aproximadamente maio a setembro) concentra o maior risco de incêndio florestal e de vegetação, especialmente no Pantanal e no Cerrado, monitorado pelo CEMADEN. A região é o maior polo de grãos do país (soja, milho), com calendário de plantio definido pelo zoneamento da Embrapa (ZARC) por município. O índice de cobertura de abastecimento de água, segundo dados de saneamento, fica em posição intermediária no país — melhor que Norte/Nordeste, próximo de Sul/Sudeste.",
  recommended:
    "Na estação seca, trate risco de incêndio como prioridade: evite queimadas mesmo controladas perto de vegetação seca, mantenha faixas de segurança ao redor de estruturas rurais, e seja conservador com fontes de ignição (fogueiras, churrasqueiras) em dias secos e com vento. No Pantanal e áreas de planície inundável, monitore o calendário de cheia/vazante, que pode limitar acesso por estrada em certos meses. Para agricultura, siga o zoneamento ZARC do seu município — a Embrapa valida datas de plantio pensando em reduzir o risco de perda por seca ou geada fora da janela recomendada.",
  why:
    "A combinação de vegetação nativa inflamável (Cerrado) com estação seca longa e bem definida cria uma janela de risco de incêndio previsível — por isso a prevenção concentrada nesse período tem mais retorno do que vigilância constante o ano todo. O zoneamento agrícola (ZARC) existe justamente porque plantar fora da janela recomendada aumenta o risco de perda por condições climáticas desfavoráveis — é uma ferramenta de redução de risco, não uma formalidade burocrática.",
  uncertain:
    "A extensão e a severidade da estação seca variam ano a ano; alertas de incêndio do CEMADEN e de órgãos estaduais de meio ambiente devem ser acompanhados em tempo real, não substituídos pela expectativa histórica. O risco específico de cheia no Pantanal varia por sub-região e depende de dados hidrológicos locais que este artigo não cobre em detalhe.",
  myths: [
    "\"Queimada controlada não tem risco na estação seca.\" — Vegetação seca e vento tornam qualquer fogo mais difícil de controlar do que em outras épocas do ano, mesmo com intenção de controle.",
    "\"O calendário de plantio é só uma recomendação, pode plantar quando quiser.\" — O zoneamento agrícola de risco climático (ZARC) é baseado em décadas de dados; plantar fora da janela aumenta mensuravelmente o risco de perda da safra.",
  ],
};
