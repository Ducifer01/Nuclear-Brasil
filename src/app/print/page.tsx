import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "@/components/PrintButton";
import { learnArticles } from "@/content/learn";
import { kit0Items } from "@/content/kits/kit0";
import { kit1Items } from "@/content/kits/kit1";
import { kit72hItems } from "@/content/kits/kit72h";
import { kit3Items } from "@/content/kits/kit3";
import { kit4Items } from "@/content/kits/kit4";
import { kit5Items } from "@/content/kits/kit5";
import { kit6Items } from "@/content/kits/kit6";
import { documentosItems } from "@/content/kits/documentos";
import type { KitItem } from "@/content/kits/types";
import { TrefoilIcon, ArrowLeftIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Manual completo — impressão",
  description: "Versão pronta para imprimir em preto e branco, com todos os artigos e checklists.",
};

const KITS: { title: string; items: KitItem[] }[] = [
  { title: "Kit 0 — No bolso", items: kit0Items },
  { title: "Kit 1 — 10 minutos", items: kit1Items },
  { title: "Kit 2 — 72 horas", items: kit72hItems },
  { title: "Kit 3 — 14 dias", items: kit3Items },
  { title: "Kit 4 — 30 dias", items: kit4Items },
  { title: "Kit 5 — 90 dias", items: kit5Items },
  { title: "Kit 6 — Longo prazo", items: kit6Items },
  { title: "Checklist de documentos", items: documentosItems },
];

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
              NUCLEAR SURVIVAL — MANUAL COMPLETO
            </div>
            <div className="text-[11px] text-neutral-600">
              Gerado no seu aparelho para uso sem internet — nenhum dado é enviado a servidor
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

        <section className="break-inside-avoid">
          <h2 className="font-display font-extrabold text-base mb-3">
            02 — Kits de preparação
          </h2>
          <div className="flex flex-col gap-4">
            {KITS.map((kit) => (
              <div key={kit.title} className="break-inside-avoid">
                <h3 className="font-semibold text-[13px] mb-1">{kit.title}</h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-[12.5px]">
                  {kit.items.map((item) => (
                    <div key={item.id}>
                      ☐ {item.label}{" "}
                      <span className="text-neutral-500">— {item.hint}</span>
                    </div>
                  ))}
                </div>
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
