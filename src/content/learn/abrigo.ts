import type { LearnArticle } from "./types";

export const abrigo: LearnArticle = {
  slug: "abrigo",
  category: "Abrigo",
  title: "Abrigo: proteção radiológica dentro de um edifício",
  riskLevel: "critico",
  authorityLevel: 1,
  status: "verified",
  version: "1.0",
  author: "Nuclear Survival",
  reviewer: "Pendente",
  createdAt: "30/09/2026",
  lastReview: "30/09/2026",
  nextReview: "30/03/2027",
  sources: [
    {
      label: "CDC — Radiation Emergencies",
      url: "https://www.cdc.gov/radiation-emergencies/safety/index.html",
    },
  ],
  body: `Proteção contra radiação se resume a três variáveis que você pode controlar diretamente: tempo, distância e blindagem. Entender como cada uma funciona é o que permite escolher o melhor abrigo disponível em segundos, em vez de seguir uma regra memorizada sem saber por quê ela funciona.

## Tempo

A dose de radiação que um corpo recebe é proporcional ao tempo de exposição. Isso parece óbvio, mas tem uma consequência prática direta: não vale a pena esperar o abrigo "perfeito" se um abrigo "bom" está mais perto. Entrar rapidamente em qualquer estrutura de concreto ou tijolo reduz mais a dose do que atravessar a cidade em busca de um porão específico.

## Distância

A intensidade da radiação cai com o quadrado da distância da fonte — dobrar a distância reduz a intensidade a um quarto, não à metade. Isso explica por que o centro de um edifício é mais seguro que a periferia dele: cada parede, cada metro de ar e cada andar entre você e a área externa (onde o material radioativo se deposita) soma distância real à fonte de contaminação.

## Blindagem

Massa entre você e a fonte absorve radiação. Concreto, terra e tijolo são densos e absorvem bem; vidro de janela e chapa fina de veículo, quase nada. Por isso um porão subterrâneo é o melhor abrigo comum disponível: tem terra ao redor (blindagem) e fica abaixo do nível onde o fallout se deposita (distância). Um veículo, por comparação, tem paredes finas de metal e vidro — oferece pouca blindagem real, mesmo parecendo um espaço "fechado e protegido".

## Combinando os três fatores na prática

Ao entrar em um prédio durante uma emergência radiológica, o raciocínio é: busque o ponto que maximiza as três variáveis ao mesmo tempo — o mais interno possível (distância das paredes externas, que é por onde a radiação do ambiente externo penetra), o mais baixo possível (um porão soma blindagem de terra à blindagem da própria estrutura) e o mais rápido possível (tempo de exposição mínimo até chegar lá). Afaste-se de janelas não porque "janela é perigosa" em abstrato, mas porque vidro oferece blindagem quase nula e normalmente está nas paredes externas, que são justamente onde a distância da fonte é menor.

A blindagem exata de um edifício específico depende de variáveis que você não vai conseguir calcular no momento — espessura e material das paredes, quantos andares estão acima de você, quanto material foi depositado nas proximidades. Por isso a orientação é sempre relativa ("mais interno", "mais baixo", "mais longe de janelas"), não um número fixo de proteção — qualquer estrutura de concreto ou tijolo bem posicionada já reduz a dose de forma significativa frente a ficar ao ar livre, mesmo sem você saber o valor exato dessa redução.`,
};
