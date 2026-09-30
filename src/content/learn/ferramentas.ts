import type { LearnArticle } from "./types";

export const ferramentas: LearnArticle = {
  slug: "ferramentas",
  category: "Ferramentas",
  title: "Alfabetização mecânica: ferramentas e manutenção básica",
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
    "Uma pessoa pode ter equipamentos de qualidade e ainda assim não conseguir usá-los ou mantê-los funcionando. \"Alfabetização mecânica\" é a capacidade básica de identificar um problema simples, escolher a ferramenta certa e resolvê-lo — ou reconhecer quando o problema exige um profissional.",
  recommended:
    "Mantenha um conjunto básico de ferramentas manuais: alicate, chave de fenda e Phillips, martelo, serrote pequeno, fita métrica, fita adesiva resistente, cordas e abraçadeiras, além de parafusos e materiais de reparo variados. Aprenda o uso correto de cada uma antes de precisar — não durante a emergência. Vedação de vazamentos pequenos, reparos elétricos simples (trocar um fusível, por exemplo) e manutenção preventiva de equipamentos (limpeza, lubrificação, verificação de folgas) evitam que problemas pequenos se tornem grandes.",
  why:
    "Manutenção preventiva é sistematicamente mais barata e mais segura do que reparo emergencial: verificar e ajustar um equipamento regularmente evita falhas súbitas no momento em que ele é mais necessário. Conhecer os limites da própria habilidade evita danos maiores — reparos elétricos e hidráulicos mais complexos envolvem riscos reais (choque, incêndio, vazamento) quando feitos sem conhecimento adequado.",
  uncertain:
    "O nível de conhecimento técnico necessário varia muito conforme o tipo de moradia, os equipamentos disponíveis e a duração esperada da interrupção de serviços — uma casa isolada em zona rural tem necessidades diferentes de um apartamento urbano.",
  myths: [
    "\"Fita adesiva resolve qualquer vazamento definitivamente.\" — Serve como reparo temporário em muitos casos, mas não substitui reparo adequado assim que possível.",
    "\"Se funciona, não precisa de manutenção.\" — Falhas em equipamentos costumam ser precedidas por sinais (ruído, folga, desgaste) que a manutenção preventiva identifica antes da quebra total.",
    "\"Reparo elétrico é sempre simples de fazer sozinho.\" — Trocar um fusível é diferente de mexer em fiação; sem conhecimento e sem desligar a energia corretamente, o risco de choque e incêndio é real.",
  ],
};
