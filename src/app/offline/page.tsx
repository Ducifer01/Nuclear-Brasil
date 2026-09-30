import type { Metadata } from "next";
import Link from "next/link";
import AppShell from "@/components/AppShell";
import {
  CodeIcon,
  PrintIcon,
  TextLinesIcon,
  DocumentIcon,
  ArchiveIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Baixar para usar offline",
  description: "Tudo aqui funciona sem internet depois de baixado uma vez.",
};

function Row({
  icon: Icon,
  title,
  desc,
  action,
}: {
  icon: React.ComponentType<{ width?: number; height?: number; className?: string }>;
  title: string;
  desc: string;
  action: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 p-3.5 border border-border rounded-[3px] bg-white">
      <div className="w-[38px] h-[38px] rounded-[3px] bg-panel flex items-center justify-center shrink-0 text-ink">
        <Icon width={18} height={18} />
      </div>
      <div className="flex-1">
        <div className="font-semibold text-[13px] text-ink">{title}</div>
        <div className="text-[10.5px] text-[#5b584f] mt-0.5">{desc}</div>
      </div>
      {action}
    </div>
  );
}

export default function OfflinePage() {
  return (
    <AppShell>
      <div className="max-w-md mx-auto px-5 py-5 flex flex-col gap-5">
        <div>
          <h1 className="font-display font-black text-[19px] text-ink">
            Baixar para usar offline
          </h1>
          <p className="text-[12px] text-[#5b584f] mt-1">
            Regra do projeto: nunca depender de internet para abrir uma
            página já baixada.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <Row
            icon={CodeIcon}
            title="Instalar como aplicativo"
            desc="Adicione à tela inicial — depois de aberto uma vez, funciona sem internet"
            action={
              <span className="px-2.5 py-1.5 bg-ink rounded-[2px] text-paper font-semibold text-[10px]">
                ATIVO
              </span>
            }
          />
          <Row
            icon={PrintIcon}
            title="Imprimir / salvar como PDF"
            desc="Manual de bolso: emergência, água, abrigo — pronto para impressora"
            action={
              <Link
                href="/print"
                className="px-2.5 py-1.5 bg-ink rounded-[2px] text-paper font-semibold text-[10px]"
              >
                ABRIR
              </Link>
            }
          />
          <Row
            icon={TextLinesIcon}
            title="Versão texto"
            desc="Apenas texto — para conexões e dispositivos limitados"
            action={
              <a
                href="/offline/texto"
                className="px-2.5 py-1.5 bg-ink rounded-[2px] text-paper font-semibold text-[10px]"
              >
                BAIXAR
              </a>
            }
          />
          <Row
            icon={DocumentIcon}
            title="Manual completo (PDF)"
            desc="Todas as seções do manual — chega quando o conteúdo completo existir"
            action={
              <span className="px-2.5 py-1.5 bg-panel-2 rounded-[2px] text-muted font-semibold text-[10px]">
                EM BREVE
              </span>
            }
          />
          <Row
            icon={ArchiveIcon}
            title="Pacote ZIP completo"
            desc="index.html + conteúdo + PDFs + checklists"
            action={
              <span className="px-2.5 py-1.5 bg-panel-2 rounded-[2px] text-muted font-semibold text-[10px]">
                EM BREVE
              </span>
            }
          />
        </div>

        <p className="font-mono text-[9.5px] text-muted text-center leading-relaxed">
          NENHUM DOWNLOAD PASSA POR SERVIDOR EXTERNO. TUDO É GERADO E LIDO NO
          SEU PRÓPRIO APARELHO.
        </p>
      </div>
    </AppShell>
  );
}
