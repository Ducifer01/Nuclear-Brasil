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
  body: `O Centro-Oeste tem estação seca e chuvosa bem definidas pelas normais climatológicas do INMET — e é a extensão e a regularidade dessa estação seca (aproximadamente maio a setembro) que molda os dois riscos mais relevantes da região: incêndio e janela agrícola.

## Por que a estação seca concentra o risco de incêndio

Vegetação nativa do Cerrado é naturalmente inflamável, e uma estação seca longa e bem definida desidrata essa vegetação de forma previsível todo ano — a combinação das duas coisas cria uma janela de risco de incêndio concentrada, monitorada pelo CEMADEN, especialmente no Pantanal e no Cerrado. Essa previsibilidade tem uma implicação prática direta: prevenção concentrada nesse período específico (evitar qualquer queimada perto de vegetação seca, manter faixas de segurança ao redor de estruturas rurais, ser conservador com fogueiras e churrasqueiras em dias secos e com vento) tem retorno muito maior do que vigilância constante e uniforme o ano todo. "Queimada controlada" não elimina esse risco — vegetação seca e vento tornam qualquer fogo mais difícil de conter do que em outras épocas, mesmo com intenção de controle total.

## O Pantanal: cheia e vazante como variável de planejamento

Em áreas de planície inundável como o Pantanal, o calendário de cheia e vazante pode limitar acesso por estrada em determinados meses do ano — uma variável concreta de planejamento, não um detalhe secundário, para quem depende dessas rotas. O risco específico de cheia varia por sub-região e depende de dados hidrológicos locais que vão além do que este artigo cobre; para decisões específicas, a fonte correta é o monitoramento hidrológico local, não uma expectativa genérica regional.

## Por que o zoneamento agrícola não é burocracia

O Centro-Oeste é o maior polo de grãos do país, e o zoneamento agrícola da Embrapa (ZARC) define, por município, a janela de plantio que reduz o risco de perda por seca ou geada fora dessa janela. Isso existe porque décadas de dados mostram que plantar fora do período recomendado aumenta mensuravelmente o risco de perda de safra — não é uma recomendação formal que pode ser ignorada "se der tempo", é uma ferramenta construída especificamente para reduzir um risco real e documentado.

## Água: posição intermediária, não motivo para menos atenção

A cobertura de abastecimento de água na região fica em posição intermediária no país — melhor que Norte e Nordeste, próxima de Sul e Sudeste. Isso não elimina a necessidade de atenção a fontes de água e à qualidade da água disponível, apenas indica que o risco predominante na região está mais concentrado em incêndio e calendário agrícola do que em escassez estrutural de água tratada.

A extensão e a severidade de cada estação seca específica variam ano a ano — alertas de incêndio do CEMADEN e de órgãos estaduais de meio ambiente, acompanhados em tempo real, informam melhor a situação de um ano específico do que a expectativa histórica da região.`,
};
