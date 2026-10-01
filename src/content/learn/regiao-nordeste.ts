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
  body: `Tratar o Nordeste como "a região seca do Brasil" é impreciso e tem uma consequência prática ruim: ignora o risco real de enchente na faixa litorânea, que tem clima bem mais úmido que o interior. A região tem dois sub-climas que pedem preparação diferente, não um clima único.

## O semiárido: por que irregularidade é a norma, não a exceção

No interior semiárido — o histórico "polígono das secas" — o regime de chuva é irregular de forma estrutural, confirmado pelas normais climatológicas do INMET ao longo de décadas de medição. Isso não é um evento raro que eventualmente passa; é a característica climática permanente da região. Por isso soluções de armazenamento de longo prazo, como a cisterna doméstica, têm retorno muito maior aqui do que teriam em uma região de chuva regular — elas existem precisamente porque a chuva não é confiável ano a ano.

Se você mora no semiárido, trate a cisterna como infraestrutura crítica, não como um reservatório qualquer: verifique a vedação regularmente (uma rachadura pequena pode significar perda de água justamente quando ela é mais necessária) e monitore a qualidade da água armazenada. O erro mais comum aqui é planejar o consumo baseado no ano médio de chuva — a variabilidade histórica é alta o suficiente para que o planejamento correto considere o cenário de seca mais longa já registrada, não a média.

## O litoral: o risco que a imagem de "Nordeste seco" esconde

Em anos de chuva concentrada, a faixa litorânea, mais úmida, registra risco real de enchente e deslizamento — um risco que a imagem popular da região como "toda seca" leva as pessoas a subestimar. Quem mora no litoral nordestino deve acompanhar alertas de enchente e deslizamento do CEMADEN e da Defesa Civil municipal com a mesma atenção que quem mora em qualquer outra região costeira do país.

## Agricultura: por que o calendário muda dentro do próprio estado

O zoneamento agrícola da Embrapa (ZARC) mostra que o calendário de plantio varia significativamente dentro da própria região — em Alagoas e Sergipe, por exemplo, a janela de plantio de determinadas culturas começa em março/abril, período diferente do resto do país. Isso reforça um ponto geral: mesmo dentro do Nordeste, não existe um único calendário correto — consulte o zoneamento específico do seu estado, e idealmente do seu município, antes de decidir quando plantar.

A duração e a intensidade de cada período de seca específico não são previsíveis com precisão de longo prazo — o monitoramento do CEMADEN informa tendência e alerta, não uma garantia de quanto tempo uma seca em curso vai durar.`,
};
