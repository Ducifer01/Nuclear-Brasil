import type { Metadata } from "next";
import Link from "next/link";
import AppShell from "@/components/AppShell";
import { learnArticles } from "@/content/learn";
import { RISK_LABEL } from "@/content/learn/types";
import { ChevronRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Aprender",
  description: "Conhecimento verificado, com fontes, para ler antes da emergência.",
};

const RISK_TONE: Record<string, string> = {
  critico: "bg-red-tint text-[#8c2018]",
  alto: "bg-amber-tint text-amber",
  medio: "bg-panel text-[#5b584f]",
};

export default function LearnIndexPage() {
  return (
    <AppShell>
      <div className="max-w-md mx-auto px-5 py-5 flex flex-col gap-5">
        <div>
          <h1 className="font-display font-black text-[19px] text-ink">
            Leia antes da emergência
          </h1>
          <p className="text-[12px] text-[#5b584f] mt-1">
            Conhecimento aprofundado, com fonte, data e nível de autoridade em
            cada página.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          {learnArticles.map((a) => (
            <Link
              key={a.slug}
              href={`/learn/${a.slug}`}
              className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-[3px]"
            >
              <div className="flex-1">
                <div className="font-mono text-[9.5px] font-semibold tracking-wide text-teal">
                  {a.category.toUpperCase()}
                </div>
                <div className="font-semibold text-[13.5px] text-ink mt-0.5">
                  {a.title}
                </div>
                <span
                  className={`inline-block mt-1.5 px-2 py-0.5 font-mono text-[9px] font-bold rounded-full ${RISK_TONE[a.riskLevel]}`}
                >
                  {RISK_LABEL[a.riskLevel]}
                </span>
              </div>
              <ChevronRightIcon className="text-[#b0aa96]" width={16} height={16} />
            </Link>
          ))}
        </div>

        <div className="p-3.5 bg-panel border border-border rounded-[3px]">
          <div className="font-mono text-[10px] font-semibold tracking-widest text-muted">
            EM DESENVOLVIMENTO
          </div>
          <p className="text-[11.5px] text-[#5b584f] mt-1">
            O artigo de camadas regionais do Brasil está em revisão — fontes
            específicas por região (clima, água, agricultura) ainda serão
            adicionadas. O pacote ZIP completo para download também está em
            desenvolvimento.
          </p>
        </div>
      </div>
    </AppShell>
  );
}
