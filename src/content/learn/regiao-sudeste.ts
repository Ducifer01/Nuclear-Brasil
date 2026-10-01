import type { LearnArticle } from "./types";

export const regiaoSudeste: LearnArticle = {
  slug: "regiao-sudeste",
  category: "Brasil",
  title: "Região Sudeste: clima, água e agricultura",
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
    "O Sudeste tem verão chuvoso e inverno seco bem marcados (INMET). A concentração de chuva no verão, combinada com ocupação urbana de encostas e áreas de risco nas regiões metropolitanas, faz de deslizamentos de terra e enchentes urbanas o principal risco natural monitorado pelo CEMADEN nessa região — inclusive com notas técnicas específicas emitidas para eventos de chuva intensa no Sudeste. É também a região de maior concentração populacional e de maior demanda de água tratada do país, o que amplia o impacto de qualquer falha de abastecimento.",
  recommended:
    "Se você mora em encosta ou perto de córrego/rio urbano, conheça com antecedência os sinais de risco (rachaduras em muros/postos, água turva ou barrenta de repente, ruído de terra se movendo) e o contato local da Defesa Civil (199) — em risco iminente, priorize deixar o local em vez de esperar confirmação. Acompanhe alertas de chuva intensa do CEMADEN/INMET no período de verão. Para abastecimento de água, tenha reserva própria (ver artigo de Água) — a alta densidade urbana da região significa que uma falha de grande escala afeta muitas pessoas simultaneamente, o que pode atrasar o reestabelecimento do serviço.",
  why:
    "Encostas urbanas ocupadas de forma irregular combinadas com chuva concentrada em poucos meses do ano criam risco de deslizamento previsível em janela de tempo, mas imprevisível em local exato — por isso conhecer os sinais de alerta localmente importa mais do que confiar apenas em previsão regional. A alta densidade populacional da região Sudeste significa que problemas de infraestrutura (água, energia) tendem a ter escala de impacto maior e tempo de resposta mais lento por pessoa afetada, simplesmente pelo volume de pessoas na fila de atendimento.",
  uncertain:
    "O risco específico de deslizamento depende de características hiperlocais de solo e ocupação que variam rua a rua — este artigo não substitui o mapeamento de áreas de risco do seu município, que a prefeitura e a Defesa Civil local devem manter atualizado.",
  myths: [
    "\"Deslizamento só acontece em época de chuva muito forte, dias normais são seguros.\" — O solo pode já estar saturado de chuvas anteriores; um dia de chuva moderada pode ser o gatilho final depois de dias de chuva acumulada.",
    "\"Uma cidade grande sempre tem abastecimento de água garantido.\" — Infraestrutura de grande escala também falha, e o volume de pessoas dependentes dela nas regiões metropolitanas do Sudeste torna o impacto de qualquer falha proporcionalmente maior.",
  ],
};
