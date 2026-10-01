export type RiskLevel = "critico" | "alto" | "medio";
export type ArticleStatus = "verified" | "review" | "draft";

export type SourceRef = {
  label: string;
  url: string;
};

export type LearnArticle = {
  slug: string;
  category: string;
  title: string;
  riskLevel: RiskLevel;
  authorityLevel: 1 | 2 | 3 | 4 | 5;
  status: ArticleStatus;
  /** Versão editorial do artigo — roadmap §45 "Sistema de revisão". */
  version: string;
  /** Autor do artigo. Projeto sem IA no produto: a autoria é atribuída ao
   * projeto ("Nuclear Survival"), não a uma pessoa física. */
  author: string;
  /** Revisor humano do artigo, ou "Pendente" enquanto não houver revisão
   * humana artigo-a-artigo registrada. */
  reviewer: string;
  /** Data de criação do conteúdo (dd/mm/aaaa). */
  createdAt: string;
  lastReview: string;
  nextReview: string;
  sources: SourceRef[];
  /**
   * Corpo do artigo em markdown — texto livre, sem template fixo. Cada
   * artigo usa a estrutura (seções, listas, parágrafos) que fizer sentido
   * para o assunto específico; nenhum formato é reaplicado universalmente.
   * O objetivo é ensinar a técnica e o raciocínio por trás dela, não
   * apenas listar instruções.
   */
  body: string;
};

export const RISK_LABEL: Record<RiskLevel, string> = {
  critico: "CRÍTICO",
  alto: "ALTO",
  medio: "MÉDIO",
};
