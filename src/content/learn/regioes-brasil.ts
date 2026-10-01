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
  weKnow:
    "O Brasil tem cinco grandes regiões (Norte, Nordeste, Centro-Oeste, Sudeste, Sul) com climas, regimes de chuva, riscos naturais e calendários agrícolas muito diferentes entre si — confirmado pelas normais climatológicas do INMET, pelo histórico de alertas do CEMADEN e pelo zoneamento agrícola da Embrapa (ZARC). Um mesmo conselho de preparação (quanto armazenar, quando plantar, que risco climático priorizar) não é igualmente aplicável em todas elas.",
  recommended:
    "Leia o artigo específico da sua região — cada um cita fontes oficiais (INMET, CEMADEN, ANA, Embrapa) com o dado aplicável àquela região, em vez de uma média nacional que não descreve bem nenhum lugar específico:\n\n- [Região Norte](/learn/regiao-norte) — cheia/seca dos rios, lacuna histórica de saneamento\n- [Região Nordeste](/learn/regiao-nordeste) — semiárido vs. litoral úmido, cisternas\n- [Região Centro-Oeste](/learn/regiao-centro-oeste) — estação seca, risco de incêndio, polo de grãos\n- [Região Sudeste](/learn/regiao-sudeste) — deslizamentos urbanos, maior densidade populacional\n- [Região Sul](/learn/regiao-sul) — chuva o ano todo, temporais, o desastre de 2024 no RS\n\nPara decisões críticas (quando plantar, que fonte de água é segura localmente, que riscos naturais são mais prováveis na sua cidade), procure também a Defesa Civil municipal/estadual e órgãos de extensão rural da sua região — eles têm conhecimento hiperlocal que nenhum artigo nacional substitui.",
  why:
    "Clima, solo e regime de chuvas são os fatores que mais determinam o que funciona na prática em água e agricultura — dois dos pilares deste projeto. Dividir por região, em vez de generalizar nacionalmente, permite citar a fonte certa para o risco certo em cada lugar.",
  uncertain:
    "Mesmo os artigos regionais descrevem padrões gerais da região — características hiperlocais (bairro, município, propriedade rural específica) exigem sempre a fonte local (Defesa Civil do seu município, escritório regional da Embrapa/Emater).",
  myths: [
    "\"O que funciona em uma região do Brasil funciona em todas.\" — Clima, solo, regime de chuva e riscos naturais variam fortemente entre as cinco regiões; adaptação local é necessária.",
    "\"A Defesa Civil só é útil durante o desastre.\" — Órgãos de Defesa Civil municipal/estadual e de extensão rural também orientam preparação e planejamento antes de qualquer evento.",
  ],
};
