import type { LearnArticle } from "./types";

export const regioesBrasil: LearnArticle = {
  slug: "regioes-brasil",
  category: "Brasil",
  title: "Camadas regionais: um guia por região do Brasil",
  riskLevel: "medio",
  authorityLevel: 1,
  status: "verified",
  version: "2.0",
  author: "Nuclear Survival",
  reviewer: "Pendente",
  createdAt: "01/10/2026",
  lastReview: "01/10/2026",
  nextReview: "01/04/2027",
  sources: [
    { label: "INMET — Normais Climatológicas do Brasil", url: "https://portal.inmet.gov.br/" },
    { label: "CEMADEN — Centro Nacional de Monitoramento e Alertas de Desastres Naturais", url: "https://www.gov.br/cemaden/pt-br" },
    { label: "ANA — Agência Nacional de Águas e Saneamento Básico", url: "https://www.gov.br/ana/pt-br" },
    { label: "Embrapa — Zoneamento Agrícola de Risco Climático (ZARC)", url: "https://www.embrapa.br/" },
  ],
  body: `O Brasil não tem um clima — tem cinco. Norte, Nordeste, Centro-Oeste, Sudeste e Sul diferem em regime de chuva, risco natural predominante e calendário agrícola a ponto de um mesmo conselho de preparação (quanto armazenar, quando plantar, que risco priorizar) descrever bem uma região e descrever mal todas as outras quatro. Essa divisão não é uma opinião deste site — é o que normais climatológicas do INMET, o histórico de alertas do CEMADEN e o zoneamento agrícola da Embrapa (ZARC) mostram de forma consistente.

## Por que uma média nacional falha

Clima, solo e regime de chuva são os fatores que mais determinam o que funciona na prática em água e agricultura — e são exatamente os fatores que mais variam entre as regiões brasileiras. Uma recomendação pensada para a média nacional acaba não descrevendo bem nenhum lugar específico: subestima o risco de seca para quem está no semiárido nordestino, subestima o risco de enchente para quem está no Sul, ignora o calendário de plantio real da sua região.

## Onde encontrar o que se aplica a você

- [Região Norte](/learn/regiao-norte) — ciclo de cheia e seca dos rios, lacuna histórica de saneamento
- [Região Nordeste](/learn/regiao-nordeste) — semiárido versus litoral úmido, o papel das cisternas
- [Região Centro-Oeste](/learn/regiao-centro-oeste) — estação seca definida, risco de incêndio, o maior polo de grãos do país
- [Região Sudeste](/learn/regiao-sudeste) — deslizamentos em encostas urbanas, maior densidade populacional
- [Região Sul](/learn/regiao-sul) — chuva distribuída o ano todo, temporais, o desastre de 2024 no Rio Grande do Sul

## O limite de qualquer artigo regional

Mesmo um artigo escrito para a sua região descreve um padrão geral — características hiperlocais (o bairro específico, o município, uma propriedade rural particular) exigem a fonte local: a Defesa Civil do seu município e o escritório regional de extensão rural (Embrapa/Emater) têm conhecimento que nenhum conteúdo de alcance nacional consegue replicar. Vale notar que esse conhecimento local tem utilidade antes do desastre, não só durante ele — Defesa Civil e extensão rural também orientam planejamento e preparação, não apenas resposta a emergência já em curso.`,
};
