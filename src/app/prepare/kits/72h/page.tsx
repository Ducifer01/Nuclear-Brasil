import type { Metadata } from "next";
import Link from "next/link";
import AppShell from "@/components/AppShell";
import KitChecklist from "@/components/KitChecklist";
import { kit72hItems } from "@/content/kits/kit72h";
import { PrintIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Kit 72 horas",
  description: "Sobreviver sem serviços básicos por alguns dias.",
};

export default function Kit72hPage() {
  return (
    <AppShell>
      <div className="max-w-md mx-auto px-5 py-5 flex flex-col gap-5">
        <div>
          <div className="font-mono text-[10px] font-semibold tracking-widest text-amber">
            KIT 2 · 72 HORAS
          </div>
          <h1 className="font-display font-extrabold text-[20px] text-ink mt-1">
            Kit 72 horas
          </h1>
          <p className="text-[12px] text-[#5b584f] mt-1">
            Sobreviver sem serviços básicos por alguns dias.
          </p>
        </div>

        <KitChecklist storageKey="kit-72h" items={kit72hItems} />

        <Link
          href="/print"
          className="flex items-center justify-center gap-2 p-3 border border-border rounded-[3px] no-underline"
        >
          <PrintIcon width={16} height={16} className="text-ink" />
          <span className="font-semibold text-[12px] text-ink">
            Imprimir checklist
          </span>
        </Link>

        <p className="text-[10.5px] text-muted text-center">
          Seu progresso fica salvo neste aparelho — nada é enviado para
          nenhum servidor.
        </p>
      </div>
    </AppShell>
  );
}
