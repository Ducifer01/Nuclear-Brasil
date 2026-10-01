import type { LearnArticle } from "./types";

export const descontaminacao: LearnArticle = {
  slug: "descontaminacao",
  category: "Descontaminação",
  title: "Descontaminação: pessoas e objetos após exposição",
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
  body: `Descontaminação é o processo de remover material radioativo que se depositou sobre você — não de "neutralizar radiação", que não é algo que se faça com água e sabão. Entender essa diferença muda a forma de pensar o processo: você está limpando uma superfície (a sua pele, o seu cabelo, suas roupas), da mesma forma que limparia qualquer poeira ou resíduo físico — só que esse resíduo específico é radioativo.

## A ordem importa: roupa primeiro

A sequência correta é remover a roupa antes de tentar lavar a pele, pelo mesmo motivo que você tiraria uma roupa suja de tinta antes de lavar a pele embaixo dela: a roupa concentra a maior parte do material depositado, porque foi ela, não a pele, que ficou exposta diretamente ao ar durante a passagem do fallout. Remover a camada externa de roupa primeiro evita espalhar esse material para áreas do corpo que ainda não tinham contato com ele.

Ao remover a roupa, evite sacudi-la — isso resuspende o material na forma de poeira no ar, que você ou outras pessoas podem então inalar. O movimento correto é dobrar a peça para dentro de si mesma, prendendo o material na parte externa que já estava exposta, e colocá-la em um saco plástico que possa ser fechado, mantido longe de pessoas, alimentos e água.

## Por que a técnica de lavagem é "suave", não "intensa"

A pele tem poros, e esfregar com força empurra partículas para dentro deles em vez de removê-las da superfície — o oposto do que você quer. Por isso a técnica correta é água morna (não quente, que abre poros) e sabão suave, com movimento de lavagem sem fricção forte, enxaguando bem. O objetivo é carregar o material para longe com a água, não triturá-lo contra a pele.

Cobrir nariz e boca com um pano, mesmo simples, antes de chegar a um ambiente limpo reduz a chance de inalar partículas suspensas no ar durante o processo — relevante tanto ao se mover de uma área externa contaminada para dentro quanto durante a própria remoção da roupa.

## O que essa técnica realmente resolve, e o que não resolve

O CDC estima que remover a camada externa da roupa, por si só, elimina cerca de 90% do material radioativo que uma pessoa carregava — isso faz dessa única ação a mais eficaz disponível sem qualquer equipamento. Mas é uma estimativa de redução de contaminação externa, não uma medição do seu nível real de exposição: só um instrumento de monitoramento (contador Geiger, survey meter), operado por alguém treinado, pode confirmar se ainda há contaminação residual relevante depois desse processo. A técnica descrita aqui reduz risco de forma significativa com os recursos que qualquer pessoa tem à mão — ela não substitui avaliação profissional quando essa avaliação estiver disponível.`,
};
