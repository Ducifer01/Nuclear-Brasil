import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AppShell from "@/components/AppShell";
import { learnArticles, getLearnArticle } from "@/content/learn";
import { RISK_LABEL } from "@/content/learn/types";
import { EvidenceSection, MythsSection, VerifiedBadge } from "@/components/EvidenceBlock";
import { BatteryLowIcon } from "@/components/icons";

export function generateStaticParams() {
  return learnArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getLearnArticle(slug);
  if (!article) return {};
  return { title: article.title };
}

const RISK_TONE: Record<string, string> = {
  critico: "bg-red-tint text-[#8c2018]",
  alto: "bg-amber-tint text-amber",
  medio: "bg-panel text-[#5b584f]",
};

export default async function LearnArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getLearnArticle(slug);
  if (!article) notFound();

  return (
    <AppShell>
      <div className="max-w-md mx-auto px-5 py-5 flex flex-col gap-4">
        <div className="font-mono text-[10px] font-semibold tracking-widest text-teal">
          {article.category.toUpperCase()}
        </div>

        <div>
          <h1 className="font-display font-extrabold text-[22px] leading-tight text-ink">
            {article.title}
          </h1>
          <div className="flex flex-wrap gap-1.5 mt-2.5">
            <span
              className={`px-2.5 py-1 font-mono text-[9.5px] font-bold rounded-full ${RISK_TONE[article.riskLevel]}`}
            >
              {RISK_LABEL[article.riskLevel]}
            </span>
            <VerifiedBadge status={article.status} />
            <span className="px-2.5 py-1 bg-panel text-[#5b584f] font-mono text-[9.5px] font-bold rounded-full">
              NÍVEL {article.authorityLevel}
            </span>
          </div>
          <div className="text-[10.5px] text-muted mt-2">
            Última revisão: {article.lastReview} · Próxima revisão: {article.nextReview}
          </div>
          <div className="text-[10.5px] text-muted mt-1">
            v{article.version} · Autor: {article.author} · Revisor: {article.reviewer} · Criado em{" "}
            {article.createdAt}
          </div>
        </div>

        <div className="h-px bg-border" />

        <EvidenceSection label="O QUE SABEMOS" tone="teal">
          {article.weKnow}
        </EvidenceSection>
        <EvidenceSection label="O QUE É RECOMENDADO" tone="teal">
          {article.recommended}
        </EvidenceSection>
        <EvidenceSection label="POR QUE FUNCIONA" tone="neutral">
          {article.why}
        </EvidenceSection>
        <EvidenceSection label="O QUE É INCERTO" tone="amber">
          {article.uncertain}
        </EvidenceSection>
        <MythsSection items={article.myths} />

        <div className="h-px bg-border" />

        <div className="flex flex-col gap-1">
          <div className="font-mono text-[9.5px] font-semibold tracking-wide text-muted">
            FONTES
          </div>
          <ul className="text-[11.5px] text-[#5b584f] leading-relaxed">
            {article.sources.map((s) => (
              <li key={s.url}>
                <a href={s.url} className="underline" target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <Link
          href={`/low-power?article=${article.slug}`}
          className="flex items-center justify-center gap-2 p-3 border border-border rounded-[3px]"
        >
          <BatteryLowIcon width={16} height={16} />
          <span className="font-semibold text-[12px] text-ink">
            Ler em modo baixa energia
          </span>
        </Link>
      </div>
    </AppShell>
  );
}
