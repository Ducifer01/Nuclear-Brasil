import type { Metadata } from "next";
import AppShell from "@/components/AppShell";
import KitChecklist from "@/components/KitChecklist";
import { kit0Items } from "@/content/kits/kit0";

export const metadata: Metadata = {
  title: "Kit 0 — No bolso",
  description: "Sobreviver e alcançar um local seguro.",
};

export default function Kit0Page() {
  return (
    <AppShell>
      <div className="max-w-md mx-auto px-5 py-5 flex flex-col gap-5">
        <div>
          <div className="font-mono text-[10px] font-semibold tracking-widest text-amber">
            KIT 0 · NO BOLSO
          </div>
          <h1 className="font-display font-extrabold text-[20px] text-ink mt-1">
            Kit no bolso
          </h1>
          <p className="text-[12px] text-[#5b584f] mt-1">
            Sobreviver e alcançar um local seguro.
          </p>
        </div>

        <KitChecklist storageKey="kit-0-bolso" items={kit0Items} />

        <p className="text-[10.5px] text-muted text-center">
          Seu progresso fica salvo neste aparelho — nada é enviado para
          nenhum servidor.
        </p>
      </div>
    </AppShell>
  );
}
