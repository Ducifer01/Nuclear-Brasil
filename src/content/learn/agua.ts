import type { LearnArticle } from "./types";

export const agua: LearnArticle = {
  slug: "agua",
  category: "Água",
  title: "Água: armazenamento e tratamento em emergência",
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
      label: "CDC — Emergency Water Supply",
      url: "https://www.cdc.gov/water-emergency/about/how-to-create-and-store-an-emergency-water-supply.html",
    },
    {
      label: "WHO — Environmental Health in Emergencies",
      url: "https://www.who.int/teams/environment-climate-change-and-health/water-sanitation-and-health/environmental-health-in-emergencies",
    },
  ],
  body: `Sem água, o corpo humano para de funcionar em poucos dias — é o recurso que menos tolera improviso. O problema raramente é a ausência total de água; é a dificuldade de saber se a água disponível é segura, e de ter volume suficiente guardado para não depender do acaso.

## Quanto guardar, e por quê

A referência do CDC é cerca de 3,8 litros (1 galão) por pessoa por dia, para um mínimo de 3 dias — idealmente duas semanas, se o espaço permitir. Esse número não é arbitrário: cobre beber (a maior parte), mais uma margem para higiene básica das mãos e para preparar os poucos alimentos que exigem água. Calor, esforço físico, gestação, amamentação e febre aumentam a perda de água do corpo, então esse volume é um piso, não um teto — em dias de calor intenso, a necessidade real pode ser bem maior.

Para calcular o volume certo para o seu número de pessoas, dias e clima, use a calculadora de água deste site em vez de fazer a conta de cabeça — ela já aplica esse ajuste por clima.

## Como guardar sem perder a água depois

Use recipientes próprios para armazenar água potável — não qualquer garrafa reaproveitada, que pode ter resíduos ou plástico inadequado para armazenamento longo. Mantenha-os longe de luz solar direta e de fontes de calor: calor acelera tanto a degradação do plástico quanto a proliferação de qualquer microrganismo que tenha entrado no recipiente. Rotacione o estoque — mesmo água bem guardada e em recipiente fechado deve ser trocada periodicamente, porque a integridade da embalagem (não a "validade" da água em si) é o que determina se ela continua segura.

## Por que não existe um único método de tratamento

O risco na água pode ser de três naturezas diferentes, e cada uma exige uma resposta diferente:

- **Microbiológico** (bactérias, vírus, parasitas) — fervura mata a maioria desses organismos porque o calor desnatura suas proteínas e rompe suas estruturas. É eficaz aqui.
- **Químico** (metais, combustível, agrotóxico dissolvido) — fervura não remove nada disso; alguns contaminantes químicos ficam mais concentrados depois de fervida, porque a água evapora e o contaminante não. É preciso identificar o contaminante e tratar especificamente para ele, ou buscar outra fonte.
- **Radiológico** — fervura também não remove material radioativo dissolvido ou em suspensão. Nesse cenário específico, a orientação correta é esperar avaliação oficial antes de considerar uma fonte segura, não tentar "tratar" a água em casa.

Entender essa distinção é o que evita o erro mais comum: tratar qualquer água turva ou suspeita com o mesmo método (geralmente fervura) e assumir que está resolvido, quando o risco real pode ser de outra natureza.

## Avaliando uma fonte de água desconhecida

Antes de beber água de uma fonte que não seja seu estoque original, pergunte: de onde ela vem, e o que pode ter entrado nela entre a origem e o ponto onde você a está coletando? Água de chuva recém-caída tende a ter risco microbiológico mais baixo do que água de poça ou rio, mas ainda pode conter resíduos da superfície por onde escorreu. Água parada por dias tem mais tempo para acumular contaminação biológica. Esse raciocínio — rastrear a origem e o percurso — importa mais do que a aparência da água, que não indica de forma confiável nenhum dos três tipos de risco.`,
};
