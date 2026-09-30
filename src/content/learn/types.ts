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
  lastReview: string;
  nextReview: string;
  sources: SourceRef[];
  /** Markdown — "O que sabemos" */
  weKnow: string;
  /** Markdown — "O que é recomendado" */
  recommended: string;
  /** Markdown — "Por que funciona" */
  why: string;
  /** Markdown — "O que é incerto" */
  uncertain: string;
  /** Cada item é um mito/erro a desfazer */
  myths: string[];
};

export const RISK_LABEL: Record<RiskLevel, string> = {
  critico: "CRÍTICO",
  alto: "ALTO",
  medio: "MÉDIO",
};
