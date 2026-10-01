import ReactMarkdown from "react-markdown";
import { CheckIcon, ClockIcon } from "./icons";
import type { ArticleStatus } from "@/content/learn/types";

/**
 * Corpo de artigo em markdown livre — sem seções fixas. Cada artigo define
 * sua própria estrutura de títulos (##), listas e parágrafos; este
 * componente só estiliza o que vier, não impõe um template.
 */
export function ArticleBody({ children }: { children: string }) {
  return (
    <div
      className="text-[13.5px] leading-[1.65] text-[#2a2823] flex flex-col gap-3.5
        [&_a]:underline [&_strong]:font-semibold
        [&_h2]:font-display [&_h2]:font-extrabold [&_h2]:text-[16px] [&_h2]:text-ink [&_h2]:mt-2
        [&_h3]:font-semibold [&_h3]:text-[14px] [&_h3]:text-ink [&_h3]:mt-1
        [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-1.5
        [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:flex [&_ol]:flex-col [&_ol]:gap-1.5
        [&_li]:leading-[1.55] [&_blockquote]:border-l-2 [&_blockquote]:border-amber
        [&_blockquote]:pl-3 [&_blockquote]:text-[#5b584f] [&_blockquote]:italic"
    >
      <ReactMarkdown>{children}</ReactMarkdown>
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
