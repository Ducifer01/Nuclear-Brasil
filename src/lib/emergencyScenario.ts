export type Phase = {
  key: string;
  tab: string;
  phaseLabel: string;
  title: string;
  subtitle: string;
  steps: string[];
};

export type Scenario = {
  slug: string;
  phases: Phase[];
  /** Índice da fase mostrada por padrão ao abrir a página (geralmente "AGORA"). */
  defaultPhaseIndex: number;
  sourceLabel: string;
  sourceUrl: string;
  reviewDate: string;
  authorityLevel: 1 | 2 | 3 | 4 | 5;
  relatedArticleHref: string;
  relatedArticleLabel: string;
};
