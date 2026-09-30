import Link from "next/link";
import AppShell from "@/components/AppShell";
import {
  TrefoilIcon,
  BookIcon,
  ToolboxIcon,
  ChevronRightIcon,
  DownloadIcon,
} from "@/components/icons";

const MODES = [
  {
    href: "/emergency",
    title: "EMERGÊNCIA",
    desc: "Ação imediata, passo a passo",
    icon: TrefoilIcon,
    tint: "bg-red-tint text-red",
  },
  {
    href: "/learn",
    title: "APRENDER",
    desc: "Conhecimento aprofundado, com fontes",
    icon: BookIcon,
    tint: "bg-teal-tint text-teal",
  },
  {
    href: "/prepare",
    title: "PREPARAR",
    desc: "Kits, checklists e planejamento",
    icon: ToolboxIcon,
    tint: "bg-amber-tint text-amber",
  },
];

export default function HomePage() {
  return (
    <AppShell>
      <div className="max-w-md mx-auto px-5 py-5 flex flex-col gap-5">
        <div className="bg-red rounded-[3px] p-5 pb-4 flex flex-col gap-3">
          <div>
            <h1 className="font-display font-black text-[19px] leading-tight text-[#faeeec]">
              Isso é uma emergência agora?
            </h1>
            <p className="text-[12px] text-[#f3d3ce] mt-1.5">
              Sem cadastro. Sem internet. Sem espera.
            </p>
          </div>
          <div className="flex gap-2">
            <Link
              href="/emergency"
              className="flex-[1.5] text-center bg-paper text-[#7a1b15] font-semibold text-[12.5px] py-3 px-2 rounded-[2px]"
            >
              SIM — VER O QUE FAZER
            </Link>
            <Link
              href="/learn"
              className="flex-1 text-center text-[#faeeec] font-semibold text-[12px] py-3 px-2 rounded-[2px] border border-[#dd8b85]"
            >
              NÃO, APRENDER
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          {MODES.map(({ href, title, desc, icon: Icon, tint }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-[3px]"
            >
              <div
                className={`w-10 h-10 rounded-[3px] flex items-center justify-center shrink-0 ${tint}`}
              >
                <Icon width={20} height={20} />
              </div>
              <div className="flex-1">
                <div className="font-display font-extrabold text-[13.5px] tracking-wide text-ink">
                  {title}
                </div>
                <div className="text-[11.5px] text-[#5b584f] mt-0.5">{desc}</div>
              </div>
              <ChevronRightIcon className="text-[#b0aa96]" />
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <div className="font-mono text-[10px] font-semibold tracking-widest text-muted">
            CONTINUAR PREPARANDO
          </div>
          <div className="flex gap-2 flex-wrap">
            <Link
              href="/prepare/kits/72h"
              className="px-3 py-1.5 bg-white border border-border rounded-full text-[11.5px] font-semibold text-ink"
            >
              Kit 72h
            </Link>
            <Link
              href="/learn/agua"
              className="px-3 py-1.5 bg-white border border-border rounded-full text-[11.5px] font-semibold text-ink"
            >
              Água
            </Link>
            <Link
              href="/learn/fallout"
              className="px-3 py-1.5 bg-white border border-border rounded-full text-[11.5px] font-semibold text-ink"
            >
              Fallout
            </Link>
          </div>
        </div>
      </div>

      <Link
        href="/offline"
        className="flex items-center gap-3 px-5 py-3.5 bg-ink border-t border-border max-w-md mx-auto md:rounded-[3px] md:mb-5"
      >
        <DownloadIcon className="text-paper" />
        <div className="flex-1">
          <div className="font-semibold text-[12.5px] text-paper">
            Baixar para usar offline
          </div>
          <div className="text-[10.5px] text-[#b7b3a4] mt-0.5">
            Funciona sem internet depois de baixado
          </div>
        </div>
        <ChevronRightIcon className="text-[#b7b3a4]" width={16} height={16} />
      </Link>
    </AppShell>
  );
}
