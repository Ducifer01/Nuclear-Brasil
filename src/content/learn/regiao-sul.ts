import type { LearnArticle } from "./types";

export const regiaoSul: LearnArticle = {
  slug: "regiao-sul",
  category: "Brasil",
  title: "Região Sul: clima, água e agricultura",
  riskLevel: "alto",
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
    { label: "CEMADEN — Nota técnica sobre o desastre de abril/maio de 2024 no Rio Grande do Sul", url: "https://www.gov.br/cemaden/pt-br/assuntos/monitoramento/notas-tecnicas/nota-tecnica-no-412-2024-sei-cemaden-mapeamento-dos-movimentos-de-massa-relacionados-ao-desastre-de-abril-maio-2024-no-estado-do-rio-grande-do-sul" },
    { label: "ANA — Agência Nacional de Águas e Saneamento Básico", url: "https://www.gov.br/ana/pt-br" },
    { label: "Embrapa — Zoneamento Agrícola de Risco Climático (ZARC)", url: "https://www.embrapa.br/" },
    { label: "SEDEC/MDR — Guia Prático de Utilização de Alertas do Governo Federal", url: "https://www.gov.br/mdr/pt-br/centrais-de-conteudo/publicacoes/protecao-e-defesa-civil-sedec/guiapraticodesastres.pdf" },
  ],
  body: `O Sul é a única região brasileira sem estação seca bem definida — as normais climatológicas do INMET mostram chuva distribuída ao longo do ano inteiro, associada à passagem constante de frentes frias vindas do sul do continente. Essa é uma característica estrutural do clima da região, não uma anomalia ocasional, e ela muda a forma correta de pensar risco por aqui.

## Por que não existe "estação segura" no Sul

Em regiões com estação seca definida, é possível relaxar a vigilância de risco climático em certos meses do ano. No Sul, isso não se aplica: temporais, granizo, vento forte e enchente podem ocorrer em qualquer mês, porque não há um período estrutural de estiagem que reduza a chance de chuva intensa. Manter-se inscrito nos sistemas de alerta da Defesa Civil do seu município o ano inteiro, não apenas "na época de chuva", é a adaptação direta a essa característica.

## O que o desastre de 2024 no Rio Grande do Sul ensina sobre planejamento

O CEMADEN documentou oficialmente, em nota técnica específica com mapeamento de movimentos de massa, o desastre de abril/maio de 2024 no Rio Grande do Sul — não um cenário hipotético, um evento real, verificado, de magnitude que superou o que a experiência histórica da região levava a esperar. A lição prática disso não é sobre o evento em si, é sobre como planejar depois dele: planos de evacuação e pontos de encontro familiar que assumem um "pior caso" fixo, baseado apenas em eventos anteriores conhecidos, podem subestimar o que de fato é possível. Para quem mora perto de rios na região, isso significa construir margem de segurança além do histórico, não apenas replicar o histórico.

## Por que o solo pode estar saturado em qualquer mês

A ausência de estação seca definida significa que o solo da região pode já estar saturado de chuva acumulada em qualquer época do ano — o que eleva o risco de enchente mesmo fora dos meses tradicionalmente mais chuvosos. Essa é mais uma consequência direta da mesma característica estrutural: sem um período longo de estiagem para o solo drenar e secar, a capacidade de absorver uma nova chuva forte fica reduzida de forma mais constante ao longo do ano do que em outras regiões.

## Agricultura: o risco de geada que não existe em outras regiões

O zoneamento agrícola da Embrapa (ZARC) para o Sul considera explicitamente o risco de geada no inverno — um fator que praticamente não aparece no zoneamento de regiões mais ao norte do país, e que é relevante especificamente para culturas sensíveis ao frio cultivadas aqui.

A frequência de eventos climáticos extremos pode estar mudando ao longo dos anos; este artigo descreve o padrão regional e um evento documentado recente, não faz projeção sobre tendência futura. O risco hiperlocal de enchente depende da proximidade a rios e encostas específicos — informação que vem da Defesa Civil do seu município, não de um padrão regional geral.`,
};
