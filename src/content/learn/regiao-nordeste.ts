import type { LearnArticle } from "./types";

export const regiaoNordeste: LearnArticle = {
  slug: "regiao-nordeste",
  category: "Brasil",
  title: "Região Nordeste: clima, água e agricultura",
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
    "O interior semiárido do Nordeste (o histórico \"polígono das secas\") tem regime de chuva altamente irregular ano a ano — o INMET documenta essa variabilidade nas normais climatológicas da região — o que tornou a seca prolongada o risco natural mais recorrente monitorado pelo CEMADEN nessa área. A faixa litorânea tem clima mais úmido e, em anos de chuva concentrada, também registra risco de enchente e deslizamento. A zona rural semiárida desenvolveu ao longo de décadas soluções de armazenamento como cisternas domésticas — uma adaptação já consolidada à irregularidade da chuva.",
  recommended:
    "Se você mora no semiárido, trate a cisterna (ou reservatório equivalente) como infraestrutura crítica: verifique regularmente sua vedação e a qualidade da água, e planeje o consumo considerando períodos de seca mais longos que o normal — a variabilidade histórica é alta. No litoral, em período de chuvas concentradas, acompanhe alertas de enchente/deslizamento do CEMADEN e da Defesa Civil municipal. Para agricultura, o zoneamento da Embrapa (ZARC) indica que o calendário de plantio varia bastante dentro da própria região — em alguns estados do Nordeste (segundo pesquisa realizada para Alagoas e Sergipe) a janela de plantio de determinadas culturas começa em março/abril, período diferente do resto do país — consulte o zoneamento específico do seu estado antes de plantar.",
  why:
    "A irregularidade de chuva no semiárido não é um evento raro, é a norma climática da região — por isso soluções de longo prazo (cisternas, poços, armazenamento) têm mais retorno aqui do que em regiões de chuva regular. O clima do Nordeste não é uniforme: tratar \"seca\" como o único risco da região inteira ignora o risco de enchente real na faixa litorânea mais úmida.",
  uncertain:
    "A intensidade e a duração de cada período de seca não são previsíveis com precisão de longo prazo — o monitoramento do CEMADEN informa tendência e alerta, não uma garantia sobre quanto tempo vai durar uma seca específica. O calendário agrícola exato varia por município dentro do estado; sempre confirme com a Embrapa/Emater local antes de decidir o que plantar.",
  myths: [
    "\"Nordeste é tudo seco.\" — A região tem sub-climas muito diferentes: semiárido no interior, úmido no litoral — tratar a região como uniformemente seca leva a subestimar o risco de enchente costeira.",
    "\"Cisterna cheia uma vez resolve o problema de água do ano.\" — A variabilidade de chuva no semiárido é alta; o planejamento de consumo deve considerar o pior cenário histórico de seca prolongada, não o ano médio.",
  ],
};
