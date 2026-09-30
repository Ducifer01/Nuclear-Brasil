import ReactMarkdown from "react-markdown";
import { CheckIcon, ClockIcon, XMarkSmallIcon } from "./icons";
import type { ArticleStatus } from "@/content/learn/types";

const TONE = {
  teal: "bg-teal-tint text-teal",
  neutral: "bg-panel text-[#5b584f]",
  amber: "bg-amber-tint text-amber",
  red: "bg-red-tint text-[#8c2018]",
} as const;

function Prose({ children }: { children: string }) {
  return (
    <div className="text-[13px] leading-[1.55] text-[#2a2823] [&_a]:underline [&_strong]:font-semibold">
      <ReactMarkdown>{children}</ReactMarkdown>
    </div>
  );
}

export function EvidenceSection({
  label,
  tone,
  children,
}: {
  label: string;
  tone: keyof typeof TONE;
  children: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <span
        className={`self-start px-2.5 py-1 font-mono text-[9.5px] font-bold tracking-wide rounded-full ${TONE[tone]}`}
      >
        {label}
      </span>
      <Prose>{children}</Prose>
    </div>
  );
}

export function MythsSection({ items }: { items: string[] }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span
        className={`self-start px-2.5 py-1 font-mono text-[9.5px] font-bold tracking-wide rounded-full ${TONE.red}`}
      >
        MITOS E ERROS COMUNS
      </span>
      <div className="flex flex-col gap-2 mt-0.5">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-2">
            <XMarkSmallIcon className="text-red shrink-0 mt-0.5" />
            <p className="text-[13px] leading-[1.5] text-[#2a2823]">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Selo de status editorial — roadmap §47 "Sistema de alerta de conteúdo
 * desatualizado". Artigos "verified" mostram ✓ VERIFICADO; os demais
 * mostram ⚠ NECESSITA REVISÃO, para não passar mais confiança do que o
 * artigo realmente tem.
 */
export function VerifiedBadge({
  small,
  status = "verified",
}: {
  small?: boolean;
  status?: ArticleStatus;
}) {
  const size = small ? "text-[9px]" : "text-[9.5px]";
  if (status === "verified") {
    return (
      <span
        className={`inline-flex items-center gap-1 px-2.5 py-1 bg-green-tint text-[#1e5c33] font-mono font-bold rounded-full ${size}`}
      >
        <CheckIcon width={9} height={9} />
        VERIFICADO
      </span>
    );
  }
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-1 bg-amber-tint text-amber font-mono font-bold rounded-full ${size}`}
    >
      <ClockIcon width={9} height={9} />
      NECESSITA REVISÃO
    </span>
  );
}
