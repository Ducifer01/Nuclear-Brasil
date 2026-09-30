import type { Metadata } from "next";
import Link from "next/link";
import PrintSections from "@/components/PrintSections";
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
  description: "Versão pronta para imprimir em preto e branco, com seções selecionáveis.",
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
      <div className="no-print flex items-center px-6 py-4 max-w-2xl mx-auto">
        <Link href="/" className="flex items-center gap-1.5 text-[#5b584f] no-underline">
          <ArrowLeftIcon width={16} height={16} />
          <span className="text-[12px]">Voltar</span>
        </Link>
      </div>

      <div className="max-w-2xl mx-auto px-6 pb-8 flex flex-col gap-8 print:px-0">
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

        <PrintSections nuclearSteps={NUCLEAR_STEPS} kits={KITS} articles={learnArticles} />

        <footer className="border-t border-black pt-3 text-[10px] text-neutral-600">
          Nuclear Survival não usa IA no produto. Conteúdo verificado contra
          fontes oficiais — ver /sources. Este manual não substitui
          orientação de autoridades locais durante uma emergência real.
        </footer>
      </div>
    </div>
  );
}
