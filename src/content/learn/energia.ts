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
  weKnow:
    "Energia em emergência tem três escalas diferentes: manter luz e comunicação funcionando nas primeiras horas/dias (lanternas, pilhas, power banks), sustentar equipamentos maiores por semanas (estações de energia, bateria, painel solar, gerador), e, em colapsos longos, gerar e manter energia de forma continuada, com manutenção e peças de reposição.",
  recommended:
    "Para o curto prazo, mantenha lanternas, pilhas sobressalentes e um power bank carregado como prioridade — isso cobre iluminação e comunicação básica. Para o médio prazo, avalie uma estação de energia portátil com painel solar dimensionado para os equipamentos essenciais (não para tudo que você usa no dia a dia), priorizando consumo mínimo. Geradores a combustível exigem ventilação externa obrigatória pelo risco de intoxicação por monóxido de carbono, e nunca devem operar em ambientes fechados. Para qualquer equipamento elétrico, conheça a potência (W) e o consumo de energia (Wh) dos aparelhos que pretende alimentar, para dimensionar a fonte corretamente.",
  why:
    "Dimensionar energia errado — subestimando consumo ou superestimando capacidade da bateria/gerador — é a causa mais comum de falha nesses sistemas em emergência. Entender tensão, corrente e potência permite calcular quanto tempo uma fonte específica sustenta um conjunto de equipamentos, evitando surpresas quando a energia é mais necessária.",
  uncertain:
    "A melhor combinação de fontes de energia (bateria, solar, gerador) depende do clima local, do orçamento disponível, do espaço para instalação e da duração esperada da interrupção — não existe uma solução única recomendável para todos os contextos.",
  myths: [
    "\"Gerador pode funcionar dentro de casa se a porta estiver aberta.\" — O monóxido de carbono se acumula rapidamente mesmo com ventilação parcial; geradores a combustão exigem operação totalmente ao ar livre, longe de janelas e entradas de ar.",
    "\"Qualquer painel solar carrega qualquer bateria.\" — A compatibilidade de tensão, corrente e controlador de carga precisa ser verificada; ligações incorretas podem danificar equipamentos ou representar risco de incêndio.",
    "\"Power bank grande substitui estação de energia.\" — Power banks atendem eletrônicos pequenos; equipamentos de maior consumo (geladeiras, ferramentas) exigem fontes com capacidade muito maior.",
  ],
};
