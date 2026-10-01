import type { LearnArticle } from "./types";

export const saudeDental: LearnArticle = {
  slug: "saude-dental",
  category: "Saúde dental",
  title: "Saúde dental: prevenção quando o dentista não está disponível",
  riskLevel: "medio",
  authorityLevel: 4,
  status: "verified",
  version: "1.0",
  author: "Nuclear Survival",
  reviewer: "Pendente",
  createdAt: "30/09/2026",
  lastReview: "30/09/2026",
  nextReview: "30/03/2027",
  sources: [
    {
      label: "WHO — Environmental Health in Emergencies",
      url: "https://www.who.int/teams/environment-climate-change-and-health/water-sanitation-and-health/environmental-health-in-emergencies",
    },
  ],
  body: `Um problema dental quase nunca começa como emergência — ele começa como placa bacteriana acumulada ao longo de dias ou semanas, e só se torna dor ou infecção depois de um processo que teve tempo de ser interrompido antes. Isso torna prevenção, não tratamento improvisado, a estratégia correta quando atendimento odontológico profissional está limitado ou indisponível.

## Por que escovar sem pasta ainda vale a pena

Cárie e doença gengival avançam porque placa bacteriana se acumula sobre o dente e a gengiva ao longo do tempo. O que remove essa placa é a ação mecânica de esfregar a superfície — a pasta de dente contribui com flúor e sabor, mas não é ela que remove a placa fisicamente, é a escovação. Por isso escovar com água e escova, sem pasta, ou mesmo com um pano limpo enrolado no dedo na ausência de escova, ainda interrompe o acúmulo que causaria o problema — a diferença de eficácia entre "com pasta" e "sem pasta" é bem menor do que entre "escovar" e "não escovar".

## Por que a ausência de dor não significa que o problema passou

Um padrão que confunde muita gente: a dor de um dente pode diminuir sozinha, não porque o problema melhorou, mas porque o nervo dentro do dente morreu — e um nervo morto não transmite mais dor, mesmo que a infecção ao redor dele continue avançando. Esse é o motivo pelo qual "a dor passou" não é um sinal confiável de melhora; os sinais que realmente importam são inchaço, sensibilidade a temperatura e sangramento gengival, que indicam atividade da infecção independentemente da dor.

## Por que trauma dental tem janela de tempo

Um dente deslocado ou arrancado por impacto tem uma janela de tempo em que a reimplantação profissional ainda tem chance real de sucesso — quanto mais tempo passa, menor essa chance. Isso significa que, diante de um trauma dental, a prioridade não é tentar resolver em casa, é buscar atendimento o mais rápido possível; manipular excessivamente o dente nesse meio tempo só reduz ainda mais a chance de um tratamento bem-sucedido depois.

## Por que antibiótico sozinho não resolve

Antibiótico pode conter temporariamente uma infecção dentária, reduzindo sintomas, mas não remove a causa física do problema (cárie, abscesso) — ele compra tempo, não cura. Tratar isso como solução definitiva adia o atendimento profissional necessário enquanto a causa continua presente, com risco de a infecção retornar, às vezes pior, quando o efeito do antibiótico passa.`,
};
