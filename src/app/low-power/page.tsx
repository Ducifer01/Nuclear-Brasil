import type { Metadata } from "next";
import Link from "next/link";
import { getLearnArticle } from "@/content/learn";
import { BatteryLowIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Modo baixa energia",
};

const DEFAULT_STEPS = [
  "ENTRE EM UM EDIFÍCIO.",
  "VÁ PARA O PORÃO OU PARTE CENTRAL.",
  "AFASTE-SE DE JANELAS, PAREDES E TETO.",
  "FIQUE DENTRO.",
  "ACOMPANHE AS INSTRUÇÕES OFICIAIS.",
];

export default async function LowPowerPage({
  searchParams,
}: {
  searchParams: Promise<{ article?: string }>;
}) {
  const { article: slug } = await searchParams;
  const article = slug ? getLearnArticle(slug) : undefined;

  return (
    <div className="min-h-dvh bg-black text-[#e8e6df] font-mono px-5 py-6 flex flex-col max-w-md mx-auto">
      <div className="flex items-center justify-between">
        <Link
          href={article ? `/learn/${article.slug}` : "/emergency/nuclear"}
          className="text-[10.5px] tracking-wide text-[#8a8677] no-underline"
        >
          ← MODO NORMAL
        </Link>
        <div className="flex items-center gap-1.5 text-[#8a8677]">
          <BatteryLowIcon width={15} height={15} />
          <span className="text-[9.5px] tracking-wide">BAIXA ENERGIA</span>
        </div>
      </div>

      {article ? (
        <>
          <div className="mt-8">
            <div className="text-[10.5px] tracking-[0.09em] text-[#8a8677]">
              {article.category.toUpperCase()}
            </div>
            <div className="text-[21px] font-bold mt-2 leading-snug text-white">
              {article.title}
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-5 flex-1">
            <div>
              <div className="text-[9.5px] text-[#8a8677] mb-1">O QUE SABEMOS</div>
              <p className="text-[13px] leading-relaxed text-white">{article.weKnow}</p>
            </div>
            <div>
              <div className="text-[9.5px] text-[#8a8677] mb-1">RECOMENDADO</div>
              <p className="text-[13px] leading-relaxed text-white">
                {article.recommended}
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="mt-8">
            <div className="text-[10.5px] tracking-[0.09em] text-[#8a8677]">
              EXPLOSÃO NUCLEAR · AGORA
            </div>
            <div className="text-[21px] font-bold mt-2 leading-snug text-white">
              O que fazer nos primeiros minutos
            </div>
          </div>
          <div className="mt-6 flex flex-col flex-1">
            {DEFAULT_STEPS.map((step, i) => (
              <div
                key={i}
                className="py-3.5 border-b border-[#1c1f21] text-[15px] leading-snug text-white"
              >
                {i + 1}. {step}
              </div>
            ))}
          </div>
        </>
      )}

      <div className="flex flex-col gap-2.5">
        <div className="text-[9.5px] text-[#5a584f] leading-relaxed">
          SEM IMAGENS · SEM ANIMAÇÕES · TEXTO APENAS
        </div>
        <Link href="/offline" className="text-[11px] underline text-[#e8e6df]">
          Baixar somente o essencial →
        </Link>
      </div>
    </div>
  );
}
