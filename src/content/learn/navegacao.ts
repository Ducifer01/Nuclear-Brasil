import type { LearnArticle } from "./types";

export const navegacao: LearnArticle = {
  slug: "navegacao",
  category: "Navegação",
  title: "Navegação sem GPS: mapas, bússola e pontos de encontro",
  riskLevel: "medio",
  authorityLevel: 4,
  status: "verified",
  lastReview: "30/09/2026",
  nextReview: "30/03/2027",
  sources: [
    {
      label: "IAEA — Emergency Preparedness and Response",
      url: "https://www.iaea.org/topics/emergency-preparedness-and-response",
    },
  ],
  weKnow:
    "Celular e GPS dependem de bateria, sinal e, em muitos casos, de internet — nenhum dos três é garantido em uma emergência prolongada. Mapas impressos e conhecimento básico de orientação não dependem de nenhum desses fatores.",
  recommended:
    "Mantenha mapas impressos da sua região e das rotas mais prováveis de evacuação, junto com uma bússola simples, mesmo que você normalmente use apenas navegação digital. Defina com antecedência pontos de encontro para a família — um próximo de casa e outro fora da vizinhança, caso a área precise ser evacuada — e garanta que todos os membros da família saibam chegar até eles sem depender de celular. Planeje pelo menos uma rota alternativa para cada trajeto importante (casa-trabalho-escola), pensando em vias que podem ficar bloqueadas ou congestionadas.",
  why:
    "Ter pontos de encontro combinados com antecedência resolve o problema de reencontro quando comunicação por celular falha — cada pessoa sabe para onde ir sem precisar de contato direto com as demais. Mapas impressos e bússola são ferramentas passivas: não dependem de energia, sinal ou rede para funcionar, o que os torna confiáveis mesmo em falhas de infraestrutura prolongadas.",
  uncertain:
    "A viabilidade de cada ponto de encontro e rota depende de características específicas da região, do tipo de evento e de restrições de mobilidade da família — não existe um plano padrão que sirva para todos os contextos.",
  myths: [
    "\"Sempre vou ter sinal de celular para me localizar.\" — Sobrecarga de rede, falta de energia em torres de celular e área sem cobertura são cenários comuns em emergências; não presuma disponibilidade de GPS.",
    "\"Um mapa genérico do país serve para qualquer situação.\" — Mapas locais e detalhados da sua região são muito mais úteis do que mapas de grande escala para decisões práticas de deslocamento.",
  ],
};
