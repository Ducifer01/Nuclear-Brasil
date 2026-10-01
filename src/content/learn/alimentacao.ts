import type { LearnArticle } from "./types";

export const alimentacao: LearnArticle = {
  slug: "alimentacao",
  category: "Alimentação",
  title: "Alimentação: estoque, rotação e segurança alimentar",
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
      label: "CDC — Emergency Water Supply",
      url: "https://www.cdc.gov/water-emergency/about/how-to-create-and-store-an-emergency-water-supply.html",
    },
    {
      label: "WHO — Environmental Health in Emergencies",
      url: "https://www.who.int/teams/environment-climate-change-and-health/water-sanitation-and-health/environmental-health-in-emergencies",
    },
  ],
  body: `Um estoque de alimentos útil não é definido pela quantidade acumulada, mas por uma propriedade mais específica: os itens precisam ser estáveis o suficiente para esperar sem estragar, e simples o suficiente para serem consumidos sem depender de recursos que podem não estar disponíveis (eletricidade, muita água, tempo de preparo longo).

## O critério dos primeiros dias: pronto para comer

Nas primeiras 72 horas, a prioridade é comida que não exige cozimento nem refrigeração — enlatados, barras, cereais secos. A lógica é eliminar dependências: se o alimento exige fogão, você depende de energia ou combustível; se exige refrigeração, você depende de uma geladeira que pode não estar funcionando; se exige muita água para preparo, você está gastando uma reserva que já é escassa. Comida pronta para comer remove essas três dependências de uma vez.

## Rotação: por que um estoque parado é um estoque que falha

Alimentos não perecíveis duram muito, mas não indefinidamente — e a forma mais comum de um estoque de emergência falhar não é por falta de alimento, é por um estoque esquecido que venceu sem ninguém perceber. A solução é tratar o estoque como algo vivo, não como algo guardado: consuma sempre o item mais próximo do vencimento no uso diário normal, e reponha-o. Dessa forma, o que está no armário no dia da emergência é sempre o que foi comprado mais recentemente, não o que foi esquecido há dois anos. Um estoque menor, mas que gira, protege mais do que um estoque grande que ninguém revisita.

## Reconhecendo quando descartar

Cheiro, cor e textura são sinais úteis, mas não são os únicos — e às vezes não são os primeiros a aparecer. Uma embalagem estufada é um sinal de alerta por si só: gás sendo produzido dentro da embalagem geralmente indica atividade microbiana, mesmo quando o alimento ainda parece e cheira normal. Pelo mesmo motivo, embalagem danificada, tempo prolongado sem a refrigeração que o produto exigiria, ou validade vencida já são motivo suficiente para descartar, independente de como o alimento parece ou cheira — alguns contaminantes simplesmente não alteram esses sinais de forma perceptível. A regra prática: na dúvida, descarte sem provar.

## Como armazenar para que o estoque dure o esperado

Calor, luz e umidade aceleram a degradação de praticamente qualquer alimento embalado — por isso local seco, fresco e sem luz solar direta não é um detalhe estético, é o que determina se o alimento vai durar o tempo que a embalagem promete. Pragas (insetos, roedores) são atraídas por qualquer resíduo de alimento exposto, incluindo embalagens já abertas ou mal fechadas — guardar em recipientes bem vedados reduz tanto o risco de contaminação quanto o de atrair pragas que depois se tornam um problema à parte.

## Quanto estocar

Não existe uma quantidade universal correta — o número de pessoas, a presença de crianças, gestantes, idosos ou condições de saúde específicas, e o espaço de armazenamento disponível mudam o cálculo para cada família. A calculadora de alimentação deste site estima a autonomia do seu estoque atual a partir desses números, em vez de depender de uma regra genérica que não se aplica a todo lar da mesma forma.`,
};
