import type { Metadata } from "next";
import AppShell from "@/components/AppShell";
import KitChecklist from "@/components/KitChecklist";
import { documentosItems } from "@/content/kits/documentos";
import { PrintIcon } from "@/components/icons";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Checklist de documentos",
  description: "Cópias offline e impressas do que importa.",
};

export default function DocumentosKitPage() {
  return (
    <AppShell>
      <div className="max-w-md mx-auto px-5 py-5 flex flex-col gap-5">
        <div>
          <div className="font-mono text-[10px] font-semibold tracking-widest text-amber">
            PREPARAR · DOCUMENTOS
          </div>
          <h1 className="font-display font-extrabold text-[20px] text-ink mt-1">
            Checklist de documentos
          </h1>
          <p className="text-[12px] text-[#5b584f] mt-1">
            Mantenha cópias offline e impressas do que importa.
          </p>
        </div>

        <KitChecklist storageKey="kit-documentos" items={documentosItems} />

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
