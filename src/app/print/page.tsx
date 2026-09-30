import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "@/components/PrintButton";
import { learnArticles } from "@/content/learn";
import { kit72hItems } from "@/content/kits/kit72h";
import { TrefoilIcon, ArrowLeftIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Manual de bolso — impressão",
  description: "Versão pronta para imprimir em preto e branco.",
};

const NUCLEAR_STEPS = [
  "ENTRE EM UM EDIFÍCIO.",
  "VÁ PARA O PORÃO OU PARTE CENTRAL.",
  "AFASTE-SE DE JANELAS, PAREDES EXTERNAS E TETO.",
  "FIQUE DENTRO.",
  "ACOMPANHE AS INSTRUÇÕES OFICIAIS.",
];

export default function PrintPage() {
  return (
    <div className="bg-white text-black min-h-dvh">
      <div className="no-print flex items-center justify-between px-5 py-4 border-b border-border max-w-2xl mx-auto">
        <Link href="/" className="flex items-center gap-1.5 text-[#5b584f] no-underline">
          <ArrowLeftIcon width={16} height={16} />
          <span className="text-[12px]">Voltar</span>
        </Link>
        <PrintButton />
      </div>

      <div className="max-w-2xl mx-auto px-6 py-8 flex flex-col gap-8 print:px-0">
        <header className="flex items-center gap-2 border-b-2 border-black pb-4">
          <TrefoilIcon width={24} height={24} />
          <div>
            <div className="font-display font-black text-lg">
              NUCLEAR SURVIVAL — EMERGÊNCIA
            </div>
            <div className="text-[11px] text-neutral-600">
              Manual de bolso · gerado para uso sem internet
            </div>
          </div>
        </header>

        <section>
          <h2 className="font-display font-extrabold text-base mb-2">
            01 — Explosão nuclear: AGORA
          </h2>
          <ol className="list-decimal list-inside flex flex-col gap-1 text-[13px]">
            {NUCLEAR_STEPS.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
          <p className="text-[10.5px] text-neutral-600 mt-1.5">
            Fonte: CDC — Radiation Emergencies (cdc.gov/radiation-emergencies)
          </p>
        </section>

        <section>
          <h2 className="font-display font-extrabold text-base mb-2">
            02 — Kit 72 horas
          </h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-[12.5px]">
            {kit72hItems.map((item) => (
              <div key={item.id}>
                ☐ {item.label}{" "}
                <span className="text-neutral-500">— {item.hint}</span>
              </div>
            ))}
          </div>
        </section>

        {learnArticles.map((a, i) => (
          <section key={a.slug} className="break-inside-avoid">
            <h2 className="font-display font-extrabold text-base mb-2">
              {String(i + 3).padStart(2, "0")} — {a.title}
            </h2>
            <div className="flex flex-col gap-1.5 text-[12.5px]">
              <p>
                <strong>O que sabemos:</strong> {a.weKnow}
              </p>
              <p>
                <strong>Recomendado:</strong> {a.recommended}
              </p>
              <p>
                <strong>Mitos:</strong> {a.myths.join(" ")}
              </p>
            </div>
            <p className="text-[10.5px] text-neutral-600 mt-1.5">
              Fontes: {a.sources.map((s) => s.label).join(" · ")} · revisado em{" "}
              {a.lastReview}
            </p>
          </section>
        ))}

        <footer className="border-t border-black pt-3 text-[10px] text-neutral-600">
          Nuclear Survival não usa IA no produto. Conteúdo verificado contra
          fontes oficiais — ver /sources. Este manual não substitui
          orientação de autoridades locais durante uma emergência real.
        </footer>
      </div>
    </div>
  );
}
