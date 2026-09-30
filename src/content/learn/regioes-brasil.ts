import type { LearnArticle } from "./types";

export const regioesBrasil: LearnArticle = {
  slug: "regioes-brasil",
  category: "Brasil",
  title: "Camadas regionais: clima, água e agricultura por região",
  riskLevel: "medio",
  authorityLevel: 4,
  status: "review",
  lastReview: "30/09/2026",
  nextReview: "30/03/2027",
  sources: [
    {
      label: "Brasil · Defesa Civil — Proteção e Defesa Civil",
      url: "https://www.gov.br/mdr/pt-br/assuntos/protecao-e-defesa-civil",
    },
  ],
  weKnow:
    "O Brasil tem cinco grandes regiões (Norte, Nordeste, Centro-Oeste, Sudeste, Sul) com climas, regimes de chuva, riscos naturais e calendários agrícolas muito diferentes entre si. Um mesmo conselho de preparação (quanto armazenar, quando plantar, que risco climático priorizar) não é igualmente aplicável em todas elas.",
  recommended:
    "Use os princípios gerais deste site (água, abrigo, saneamento, alimentação, energia) como estrutura, mas adapte os detalhes práticos à sua região: no Norte e partes do Nordeste, a estação de chuvas/seca muda diretamente a disponibilidade de água e o planejamento agrícola; no Nordeste semiárido, armazenamento de água tem prioridade ainda maior pela variabilidade histórica de chuva; no Centro-Oeste e Sudeste, o regime de chuvas concentradas em parte do ano exige atenção a cheias e também a estiagem em outros meses; no Sul, eventos climáticos como frentes frias intensas e temporais têm mais peso no planejamento de abrigo e energia. Para decisões críticas (quando plantar, que fonte de água é segura localmente, que riscos naturais são mais prováveis na sua cidade), procure a Defesa Civil municipal/estadual e órgãos de extensão rural da sua região — eles têm o conhecimento local específico que este site, de alcance nacional, não substitui.",
  why:
    "Clima, solo e regime de chuvas são os fatores que mais determinam o que funciona na prática em água e agricultura — dois dos pilares deste projeto. Generalizar esses detalhes nacionalmente arrisca dar uma recomendação inadequada para uma região específica, então o papel deste site é estruturar o raciocínio (o que considerar), não substituir o conhecimento local por região.",
  uncertain:
    "Este artigo está em nível de 'em revisão' (não 'verificado') porque ainda não tem, por região, fontes específicas e verificadas de clima, calendário agrícola e riscos naturais — esse é o próximo passo de aprofundamento previsto no roadmap (§29, §62). O conteúdo atual é orientação geral, não uma referência regional completa.",
  myths: [
    "\"O que funciona em uma região do Brasil funciona em todas.\" — Clima, solo, regime de chuva e riscos naturais variam fortemente entre as cinco regiões; adaptação local é necessária.",
    "\"A Defesa Civil só é útil durante o desastre.\" — Órgãos de Defesa Civil municipal/estadual e de extensão rural também orientam preparação e planejamento antes de qualquer evento.",
  ],
};
