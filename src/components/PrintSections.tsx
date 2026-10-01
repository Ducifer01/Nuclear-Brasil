"use client";

import { useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import type { LearnArticle } from "@/content/learn/types";
import type { KitItem } from "@/content/kits/types";
import PrintButton from "@/components/PrintButton";
import { CheckIcon } from "@/components/icons";

type KitGroup = { title: string; items: KitItem[] };

function Checkbox({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onChange}
      className="flex items-center gap-2 py-1.5 text-left"
    >
      <span
        className={`w-[18px] h-[18px] rounded-[3px] border-2 flex items-center justify-center shrink-0 ${
          checked ? "bg-teal border-teal" : "border-[#c9c1a8]"
        }`}
      >
        {checked && <CheckIcon width={11} height={11} className="text-white" />}
      </span>
      <span className="text-[12px] text-ink">{label}</span>
    </button>
  );
}

export default function PrintSections({
  nuclearSteps,
  kits,
  articles,
}: {
  nuclearSteps: string[];
  kits: KitGroup[];
  articles: LearnArticle[];
}) {
  const categories = useMemo(
    () => Array.from(new Set(articles.map((a) => a.category))),
    [articles]
  );

  const [emergency, setEmergency] = useState(true);
  const [kitsOn, setKitsOn] = useState(true);
  const [enabled, setEnabled] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(categories.map((c) => [c, true]))
  );

  function toggleCategory(c: string) {
    setEnabled((prev) => ({ ...prev, [c]: !prev[c] }));
  }

  function selectAll(value: boolean) {
    setEmergency(value);
    setKitsOn(value);
    setEnabled(Object.fromEntries(categories.map((c) => [c, value])));
  }

  let sectionNumber = 0;

  return (
    <>
      <div className="no-print flex flex-col gap-3 pb-6 border-b border-border">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] font-semibold tracking-widest text-muted">
            ESCOLHER SEÇÕES (ROADMAP §37)
          </span>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => selectAll(true)}
              className="text-[11px] font-semibold text-teal underline"
            >
              Marcar tudo
            </button>
            <button
              type="button"
              onClick={() => selectAll(false)}
              className="text-[11px] font-semibold text-muted underline"
            >
              Desmarcar tudo
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4">
          <Checkbox checked={emergency} onChange={() => setEmergency((v) => !v)} label="Guia de emergência" />
          <Checkbox checked={kitsOn} onChange={() => setKitsOn((v) => !v)} label="Kits de preparação" />
          {categories.map((c) => (
            <Checkbox key={c} checked={enabled[c]} onChange={() => toggleCategory(c)} label={c} />
          ))}
        </div>
        <p className="text-[10.5px] text-muted">
          A seleção afeta o que é impresso/salvo em PDF. Nada é enviado para nenhum servidor.
        </p>
        <div>
          <PrintButton />
        </div>
      </div>

      {emergency && (
        <section>
          <h2 className="font-display font-extrabold text-base mb-2">
            {String(++sectionNumber).padStart(2, "0")} — Explosão nuclear: AGORA
          </h2>
          <ol className="list-decimal list-inside flex flex-col gap-1 text-[13px]">
            {nuclearSteps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
          <p className="text-[10.5px] text-neutral-600 mt-1.5">
            Fonte: CDC — Radiation Emergencies (cdc.gov/radiation-emergencies)
          </p>
        </section>
      )}

      {kitsOn && (
        <section className="break-inside-avoid">
          <h2 className="font-display font-extrabold text-base mb-3">
            {String(++sectionNumber).padStart(2, "0")} — Kits de preparação
          </h2>
          <div className="flex flex-col gap-4">
            {kits.map((kit) => (
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
      )}

      {articles
        .filter((a) => enabled[a.category])
        .map((a) => (
          <section key={a.slug} className="break-inside-avoid">
            <h2 className="font-display font-extrabold text-base mb-2">
              {String(++sectionNumber).padStart(2, "0")} — {a.title}
            </h2>
            <div className="flex flex-col gap-1.5 text-[12.5px] [&_h2]:font-bold [&_h2]:mt-2 [&_ul]:pl-4 [&_ul]:list-disc [&_ol]:pl-4 [&_ol]:list-decimal">
              <ReactMarkdown>{a.body}</ReactMarkdown>
            </div>
            <p className="text-[10.5px] text-neutral-600 mt-1.5">
              Fontes: {a.sources.map((s) => s.label).join(" · ")} · revisado em{" "}
              {a.lastReview}
            </p>
          </section>
        ))}
    </>
  );
}
