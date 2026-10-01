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
  body: `O Norte tem clima equatorial, com chuva abundante o ano todo (as normais climatológicas do INMET documentam isso por estação meteorológica da região) e um ciclo anual bem marcado de cheia e seca dos grandes rios amazônicos. A primeira coisa a entender sobre essa região é que o risco de água não é escassez — é tratamento. Dados de saneamento do país mostram historicamente a menor cobertura de abastecimento de água tratada e esgotamento sanitário justamente aqui, apesar da abundância de água na natureza. São dois problemas diferentes, e confundi-los leva à conclusão errada.

## Por que "água abundante" não significa "água segura"

Água na natureza não precisa de tratamento para existir — precisa de tratamento para ser segura de beber. A lacuna histórica de saneamento na região significa que, proporcionalmente, mais esgoto não tratado chega a rios e poços aqui do que em regiões com maior cobertura. O efeito prático: trate toda água de rio, poço ou chuva antes de beber, mesmo quando parece limpa — a aparência não indica contaminação microbiológica, e a probabilidade dessa contaminação é mais alta nesta região especificamente, não mais baixa por conta do volume de água disponível.

## Por que um rio cheio não é mais seguro

Existe uma intuição de que mais volume de água dilui qualquer contaminante, tornando-o mais seguro. Na prática, cheias frequentemente arrastam esgoto e resíduos acumulados para dentro dos próprios rios, o que pode piorar a contaminação em vez de diluí-la. O volume de água não é um indicador confiável de segurança — a origem e o que pode ter entrado nela entre a origem e o ponto de coleta continuam sendo o que importa, como em qualquer avaliação de fonte de água.

## Planejando em torno do ciclo de cheia e seca

O regime de cheia e seca dos rios amazônicos segue um ciclo anual previsível, mas a magnitude de cada cheia varia de ano para ano — algumas isolam comunidades ribeirinhas por dias, outras por semanas. Isso significa que o planejamento de estoque (água, alimento) para quem vive perto desses rios precisa considerar o cenário de isolamento mais longo plausível, não a média histórica, porque é o pior cenário que determina se o estoque é suficiente quando mais importa. Boletins do CEMADEN e da Defesa Civil municipal são a fonte certa para acompanhar a previsão de cada ciclo específico.

## Agricultura adaptada ao clima úmido

O zoneamento agrícola da Embrapa (ZARC) indica calendários de plantio específicos por município para culturas adaptadas ao clima úmido da região, como mandioca e frutas tropicais. Antes de plantar, consultar a Emater ou o escritório local da Embrapa não é um passo opcional — é o que traduz o padrão regional geral descrito aqui para a realidade específica do seu município.

A situação de saneamento varia muito entre capitais (cobertura melhor) e comunidades ribeirinhas ou rurais isoladas (cobertura pior) — nenhuma média regional descreve bem os dois extremos ao mesmo tempo.`,
};
