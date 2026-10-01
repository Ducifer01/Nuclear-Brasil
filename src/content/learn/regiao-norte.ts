import type { LearnArticle } from "./types";

export const regiaoNorte: LearnArticle = {
  slug: "regiao-norte",
  category: "Brasil",
  title: "Região Norte: clima, água e agricultura",
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
    "A região Norte tem clima predominantemente equatorial, com chuva abundante ao longo do ano e um ciclo bem marcado de cheia e seca dos grandes rios amazônicos (o INMET publica as normais climatológicas de temperatura, chuva e umidade por estação meteorológica da região). Apesar da abundância de água na natureza, o SNIS (Sistema Nacional de Informações sobre Saneamento) registra historicamente os menores índices de cobertura de abastecimento de água tratada e esgotamento sanitário do país nesta região — ou seja, o risco predominante não é falta de água na natureza, mas falta de tratamento e distribuição.",
  recommended:
    "Priorize o planejamento em torno do calendário de cheia/seca dos rios da sua sub-região (fonte local: Defesa Civil municipal e, quando disponível, boletins do CEMADEN) — cheias podem isolar comunidades ribeirinhas por dias ou semanas. Trate toda água de rio, poço ou chuva antes de beber, mesmo com aparência limpa — a diferença entre cobertura de saneamento aqui e em outras regiões torna a contaminação microbiológica um risco maior, não menor, do que a escassez. Para produção de alimentos, o zoneamento agrícola da Embrapa (ZARC) indica calendários de plantio específicos por município para cultivos adaptados ao clima úmido da região (como mandioca e frutas tropicais) — consulte a Emater ou escritório local da Embrapa antes de plantar.",
  why:
    "O regime de cheia e seca dos rios amazônicos é previsível em ciclo anual, mas a magnitude varia ano a ano — por isso planejamento de estoque (água, alimento) precisa considerar o pior cenário de isolamento, não a média. A lacuna histórica de saneamento na região (SNIS) significa que rios e poços recebem mais esgoto não tratado, proporcionalmente, do que em regiões com maior cobertura — o que eleva o risco de contaminação mesmo em fontes que parecem limpas.",
  uncertain:
    "A situação varia muito entre capitais (melhor cobertura de saneamento) e comunidades ribeirinhas/rurais isoladas (pior cobertura) — não existe uma média regional que descreva bem os dois extremos. Dados hiperlocais de risco de desastre e calendário agrícola exigem consulta direta à Defesa Civil do seu município e ao escritório local da Embrapa/Emater, que este artigo não substitui.",
  myths: [
    "\"Na Amazônia, água nunca falta.\" — Água na natureza é abundante, mas água tratada e segura para beber depende de infraestrutura de saneamento, que tem cobertura historicamente mais baixa na região — os dois problemas são diferentes.",
    "\"Se o rio está cheio, a água está mais diluída e mais segura.\" — O volume de água não indica ausência de contaminação; cheias frequentemente arrastam esgoto e resíduos para dentro dos rios, podendo piorar a contaminação.",
  ],
};
