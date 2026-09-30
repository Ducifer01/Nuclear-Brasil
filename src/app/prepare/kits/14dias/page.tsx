import type { Metadata } from "next";
import AppShell from "@/components/AppShell";
import KitChecklist from "@/components/KitChecklist";
import { kit3Items } from "@/content/kits/kit3";

export const metadata: Metadata = {
  title: "Kit 3 — 14 dias",
  description: "Atravessar uma interrupção prolongada.",
};

export default function Kit3Page() {
  return (
    <AppShell>
      <div className="max-w-md mx-auto px-5 py-5 flex flex-col gap-5">
        <div>
          <div className="font-mono text-[10px] font-semibold tracking-widest text-amber">
            KIT 3 · 14 DIAS
          </div>
          <h1 className="font-display font-extrabold text-[20px] text-ink mt-1">
            Kit 14 dias
          </h1>
          <p className="text-[12px] text-[#5b584f] mt-1">
            Atravessar uma interrupção prolongada.
          </p>
        </div>

        <KitChecklist storageKey="kit-3-14dias" items={kit3Items} />

        <p className="text-[10.5px] text-muted text-center">
          Seu progresso fica salvo neste aparelho — nada é enviado para
          nenhum servidor.
        </p>
      </div>
    </AppShell>
  );
}
