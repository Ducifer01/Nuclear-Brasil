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
  body: `O Sudeste tem verão chuvoso e inverno seco bem marcados pelas normais climatológicas do INMET. O que torna essa concentração de chuva um risco real, e não apenas uma estatística, é a combinação com ocupação urbana de encostas nas regiões metropolitanas — essa combinação é o que o CEMADEN monitora de perto, a ponto de emitir notas técnicas específicas para eventos de chuva intensa na região.

## Por que o risco de deslizamento é previsível em janela, não em local

Chuva concentrada em poucos meses do ano, caindo sobre encostas urbanas muitas vezes ocupadas de forma irregular, cria uma janela de tempo em que o risco de deslizamento sobe de forma previsível — mas o local exato onde um deslizamento específico vai acontecer continua imprevisível a partir de dados regionais. É por isso que conhecer os sinais de risco localmente (rachaduras em muros ou postes, água de repente turva ou barrenta, ruído de terra se movendo) importa mais, na prática, do que confiar apenas na previsão de chuva da região — o sinal local é o que avisa sobre o risco específico do seu terreno, não a estatística da cidade inteira.

Um erro comum é presumir que só chuva muito forte traz risco. Solo que já está saturado de chuvas anteriores pode ser levado ao ponto de ruptura por um dia de chuva apenas moderada — o gatilho final de um deslizamento muitas vezes não é o pior dia de chuva, é o último de uma sequência de dias que já saturou o solo. Diante de qualquer sinal de risco, para quem mora em encosta ou perto de córrego/rio urbano, a decisão correta é deixar o local e contatar a Defesa Civil (199), em vez de esperar confirmação adicional.

## Por que densidade populacional muda a escala de qualquer falha

O Sudeste concentra a maior população e a maior demanda de água tratada do país. Isso não torna a infraestrutura mais frágil tecnicamente, mas significa que, quando uma falha de grande escala acontece, ela afeta um volume de pessoas muito maior simultaneamente — e o tempo de resposta por pessoa afetada tende a ser mais lento, simplesmente pelo volume na fila de atendimento. "Cidade grande" não é sinônimo de "abastecimento garantido" — é sinônimo de "mais gente dependendo da mesma infraestrutura ao mesmo tempo", o que amplia, não reduz, a importância de ter reserva própria de água em casa.

O risco específico de deslizamento depende de características de solo e ocupação que variam rua a rua — este artigo descreve o padrão regional, não substitui o mapeamento de áreas de risco que a prefeitura e a Defesa Civil do seu município devem manter atualizado.`,
};
