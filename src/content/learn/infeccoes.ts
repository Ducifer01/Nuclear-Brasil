import type { LearnArticle } from "./types";

export const infeccoes: LearnArticle = {
  slug: "infeccoes",
  category: "Saúde",
  title: "Prevenção de infecções e doenças em emergência prolongada",
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
    {
      label: "WHO — Environmental Health in Emergencies",
      url: "https://www.who.int/teams/environment-climate-change-and-health/water-sanitation-and-health/environmental-health-in-emergencies",
    },
  ],
  body: `Em uma emergência de poucos dias, infecção costuma ser um risco secundário. Quanto mais tempo os serviços básicos ficam fora do ar, mais esse risco cresce — porque as duas rotas principais de transmissão de doença (contato com água/alimento/mãos contaminadas, e proximidade respiratória em ambientes fechados) ficam mais fáceis de completar quando saneamento, água tratada e espaço para isolamento estão comprometidos.

## A rota fecal-oral e por que a mão é o elo mais fácil de cortar

Patógenos que causam diarreia saem do corpo de uma pessoa infectada e entram no corpo de outra através de um caminho que quase sempre passa pelas mãos — tocando uma superfície contaminada, preparando comida, levando a mão à boca. Esse caminho tem um ponto de estrangulamento óbvio: lavar as mãos com sabão antes de preparar ou comer alimentos e depois de usar o banheiro interrompe a cadeia nesse ponto, independentemente de onde a contaminação original veio. É por isso que esse hábito isolado tem impacto desproporcional comparado a outras medidas — ele corta a rota no ponto por onde ela quase sempre passa.

## Por que ventilação importa tanto quanto distância

Doenças respiratórias se espalham por gotículas que ficam suspensas no ar em ambientes fechados. Ventilação — abrir janelas, criar fluxo de ar — dilui a concentração dessas gotículas no ambiente, reduzindo a chance de alguém inalar uma dose infecciosa. Isolar uma pessoa com sintomas respiratórios de um ambiente fechado e mal ventilado faz as duas coisas ao mesmo tempo: reduz a exposição direta e evita que o espaço compartilhado acumule concentração de partículas infecciosas ao longo do tempo.

## Por que a aparência da água não diz nada sobre o risco

Contaminação microbiológica, química e radiológica são invisíveis a olho nu — nenhuma delas altera de forma confiável a aparência da água o suficiente para servir como teste. Água clara pode estar cheia de bactérias; água turva pode estar microbiologicamente segura, mas quimicamente contaminada. A decisão de como tratar uma fonte de água precisa vir do que você sabe sobre a origem dela e o risco mais provável naquele contexto, não da aparência.

## Por que uma ferida pequena ainda merece atenção

Em condições normais, uma ferida pequena cicatriza sem intervenção na maioria dos casos. O que muda em uma emergência prolongada é a condição de higiene ao redor — mãos menos lavadas, água de limpeza possivelmente contaminada, roupas usadas por mais tempo sem trocar — fatores que aumentam a chance de uma ferida pequena infeccionar, mesmo que normalmente ela não infeccionasse. Limpar o ferimento assim que ocorre e observar os sinais clássicos de infecção (calor local, vermelhidão que aumenta, pus, febre) nos dias seguintes continua sendo necessário — a ferida não ficou "menos séria" só porque o contexto ao redor mudou; mudou o risco de ela complicar.

## Por que o cenário real é imprevisível, e o que fazer com isso

Não é possível prever com precisão qual doença específica vai aparecer em qualquer emergência — isso depende de densidade populacional, clima, condições sanitárias de base e acesso a atendimento, variáveis que mudam de lugar para lugar e de evento para evento. A resposta prática a essa incerteza não é tentar adivinhar a doença certa, é manter as poucas medidas que reduzem risco contra a maioria dos patógenos ao mesmo tempo: mãos lavadas, água tratada, ventilação, isolamento de sintomáticos e cuidado com feridas — um conjunto pequeno de hábitos que funciona independentemente de qual ameaça específica se materializa.`,
};
