import type { LearnArticle } from "./types";

export const energia: LearnArticle = {
  slug: "energia",
  category: "Energia",
  title: "Energia: do essencial imediato à geração de longo prazo",
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
      label: "IAEA — Emergency Preparedness and Response",
      url: "https://www.iaea.org/topics/emergency-preparedness-and-response",
    },
  ],
  body: `Dimensionar energia errado — não saber quanto uma fonte realmente sustenta — é a causa mais comum de um sistema de energia de emergência falhar justamente quando mais se precisa dele. A base para evitar isso é entender uma única relação: energia consumida (Wh, watt-hora) é potência do aparelho (W) multiplicada pelo tempo de uso (horas). Com essa conta, qualquer pessoa consegue estimar se uma bateria ou gerador específico realmente cobre o que precisa, em vez de descobrir que não cobre no momento errado.

## As três escalas do problema

Energia em emergência não é um problema único — são três problemas de escala diferente que pedem soluções diferentes. Nas primeiras horas, o que importa é iluminação e comunicação básica: lanterna, pilhas sobressalentes, um power bank carregado. Essa escala resolve com itens pequenos e baratos. Em semanas, o problema muda para sustentar equipamentos maiores — uma estação de energia portátil, pilhas recarregáveis, um painel solar — dimensionados para os aparelhos essenciais, não para replicar o consumo normal da casa. Em meses ou mais, o problema se torna geração continuada, com manutenção e peças de reposição fazendo parte do planejamento, não um detalhe.

## Por que "qualquer painel solar carrega qualquer bateria" é um erro caro

Um sistema solar tem tensão, corrente e um controlador de carga que precisam ser compatíveis entre painel e bateria — ligar componentes incompatíveis não é apenas ineficiente, pode danificar o equipamento ou criar risco de incêndio. Antes de comprar qualquer peça do sistema isoladamente, confirme a compatibilidade entre painel, controlador e bateria como um conjunto, não como itens que se encaixam por definição.

## Por que gerador a combustão exige ventilação total, não parcial

Geradores movidos a combustível produzem monóxido de carbono, um gás que não tem cheiro e que se acumula em espaços fechados ou parcialmente fechados muito mais rápido do que a intuição sugere — uma porta aberta não troca ar rápido o suficiente para evitar acúmulo perigoso em uma garagem ou varanda fechada. A regra correta não é "ventilação", é operação totalmente ao ar livre, a uma distância segura de janelas e qualquer entrada de ar da casa — essa é a única forma de garantir que o gás não se acumule onde pessoas estão.

## Por que um power bank grande não substitui uma estação de energia

A diferença entre essas duas categorias não é só tamanho, é a escala de potência que cada uma entrega. Um power bank é dimensionado para eletrônicos pequenos (celular, lanterna) — ele simplesmente não tem a capacidade de corrente necessária para alimentar uma geladeira ou uma ferramenta elétrica, mesmo que sua capacidade total em Wh pareça grande no papel. Antes de decidir qual fonte comprar, identifique quais equipamentos específicos você precisa alimentar e a potência deles — essa informação, não o orçamento disponível, é o que determina qual categoria de fonte realmente resolve o problema.

## Não existe uma combinação única certa

Bateria, solar e gerador têm vantagens e limitações diferentes conforme clima local (painel solar depende de sol disponível), orçamento e espaço para instalação. A pergunta certa não é "qual é a melhor fonte de energia", é "qual combinação cobre os equipamentos que eu realmente preciso manter funcionando, pelo tempo que eu realisticamente posso esperar precisar". A calculadora de energia deste site ajuda a fazer essa conta a partir dos seus próprios equipamentos, em vez de uma estimativa genérica.`,
};
