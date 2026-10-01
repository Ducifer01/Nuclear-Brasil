import type { LearnArticle } from "./types";

export const vetoresPragas: LearnArticle = {
  slug: "vetores-pragas",
  category: "Vetores e pragas",
  title: "Vetores e pragas: mosquitos, roedores e controle de doenças",
  riskLevel: "alto",
  authorityLevel: 2,
  status: "verified",
  version: "1.0",
  author: "Nuclear Survival",
  reviewer: "Pendente",
  createdAt: "30/09/2026",
  lastReview: "30/09/2026",
  nextReview: "30/03/2027",
  sources: [
    {
      label: "WHO — IPC / WASH in Emergencies",
      url: "https://www.who.int/emergencies/operations/ipc-wash",
    },
  ],
  body: `Mosquitos, moscas e roedores não aparecem por acaso em uma emergência prolongada — eles respondem diretamente às condições que esse tipo de cenário tende a criar: água parada, lixo acumulado, comida exposta. Entender essa relação de causa muda a estratégia de controle: em vez de combater cada praga individualmente, o ponto de alavancagem está em remover as condições que as atraem e sustentam.

## Por que um pote de água já é suficiente para um problema

Mosquitos completam parte do ciclo de vida na água parada — e o volume necessário para isso é muito menor do que a intuição sugere. Um pote esquecido, um pneu abandonado, uma calha entupida já acumulam água suficiente para servir de criadouro; o risco não escala com o tamanho do volume de água parada, ele existe a partir de quantidades pequenas. Isso significa que eliminar água parada é uma varredura de muitos pontos pequenos pela propriedade, não a eliminação de um ou dois grandes focos óbvios.

## Por que comida exposta e lixo acumulado atraem mais do que moscas

Lixo orgânico e comida exposta são fonte de alimento tanto para moscas quanto para roedores — e cada um desses vetores, ao circular entre esse lixo e superfícies ou alimentos que pessoas vão tocar depois, atua como ponte de transmissão de patógenos. O vetor em si raramente é o problema final; ele é o intermediário que carrega o patógeno de um lugar contaminado para um lugar que não estava. Reduzir a atratividade do ambiente (lixo bem fechado, alimento guardado, água parada eliminada) ataca essa ponte na origem, antes mesmo de o vetor se estabelecer.

## Por que tratar pragas como saúde pública muda a prioridade

É fácil tratar mosquitos e roedores como um incômodo estético, algo que se resolve "quando der tempo". Essa classificação está errada: vetores estão associados à transmissão de diversas doenças, o que os coloca na mesma categoria de prioridade que água segura e saneamento, não na categoria de limpeza opcional. Reconhecer isso é o que justifica dedicar atenção regular à eliminação de água parada e ao fechamento de lixo, mesmo quando há outras prioridades aparentemente mais urgentes competindo por atenção.

Os vetores predominantes e os riscos associados variam por região e clima — mosquitos transmissores de determinadas doenças não têm a mesma distribuição em todo o território brasileiro, então o risco específico mais relevante para você depende de onde você está.`,
};
