"use client";

import { useEffect, useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import type { LearnArticle } from "@/content/learn/types";
import type { KitItem } from "@/content/kits/types";
import PrintButton from "@/components/PrintButton";
import QuickCardsLayout from "@/components/QuickCardsLayout";
import WallPosterLayout from "@/components/WallPosterLayout";
import { CheckIcon } from "@/components/icons";
import {
  PRESET_MANUALS,
  loadSavedManuals,
  saveManual,
  deleteManual,
  type PrintManual,
  type PrintLayout,
} from "@/lib/printManuals";

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
  const [layout, setLayout] = useState<PrintLayout>("manual");
  const [enabled, setEnabled] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(categories.map((c) => [c, true]))
  );
  const [savedManuals, setSavedManuals] = useState<PrintManual[]>([]);
  const [newManualName, setNewManualName] = useState("");

  useEffect(() => {
    // Leitura única, pós-montagem: evita divergência entre o HTML
    // renderizado no servidor (sem acesso a localStorage) e o estado
    // salvo no aparelho do usuário.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSavedManuals(loadSavedManuals());
  }, []);

  function toggleCategory(c: string) {
    setEnabled((prev) => ({ ...prev, [c]: !prev[c] }));
  }

  function selectAll(value: boolean) {
    setEmergency(value);
    setKitsOn(value);
    setLayout("manual");
    setEnabled(Object.fromEntries(categories.map((c) => [c, value])));
  }

  function applyManual(manual: PrintManual) {
    setEmergency(manual.emergency);
    setKitsOn(manual.kitsOn);
    setLayout(manual.layout);
    setEnabled(
      Object.fromEntries(categories.map((c) => [c, manual.categories.includes(c)]))
    );
  }

  function handleSave() {
    if (!newManualName.trim()) return;
    const selectedCategories = categories.filter((c) => enabled[c]);
    const manual = saveManual({
      name: newManualName.trim(),
      layout,
      emergency,
      kitsOn,
      categories: selectedCategories,
    });
    setSavedManuals((prev) => [...prev, manual]);
    setNewManualName("");
  }

  function handleDelete(id: string) {
    deleteManual(id);
    setSavedManuals((prev) => prev.filter((m) => m.id !== id));
  }

  const selectedArticles = articles.filter((a) => enabled[a.category]);
  let sectionNumber = 0;

  return (
    <>
      <div className="no-print flex flex-col gap-3 pb-6 border-b border-border">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] font-semibold tracking-widest text-muted">
            MANUAIS (ROADMAP §64)
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {PRESET_MANUALS.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => applyManual(m)}
              className="px-2.5 py-1 bg-panel border border-border rounded-full text-[11px] font-semibold text-ink"
            >
              {m.name}
            </button>
          ))}
          {savedManuals.map((m) => (
            <span
              key={m.id}
              className="flex items-center gap-1 px-2.5 py-1 bg-teal-tint border border-teal rounded-full text-[11px] font-semibold text-teal"
            >
              <button type="button" onClick={() => applyManual(m)}>
                {m.name}
              </button>
              <button
                type="button"
                onClick={() => handleDelete(m.id)}
                aria-label={`Remover ${m.name}`}
                className="text-teal/70"
              >
                ×
              </button>
            </span>
          ))}
        </div>

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

        <div className="flex items-center gap-2">
          <input
            type="text"
            value={newManualName}
            onChange={(e) => setNewManualName(e.target.value)}
            placeholder="Nome para salvar esta seleção"
            className="flex-1 px-2.5 py-1.5 bg-white border border-border rounded-[3px] text-[12px]"
          />
          <button
            type="button"
            onClick={handleSave}
            disabled={!newManualName.trim()}
            className="px-3 py-1.5 bg-ink text-paper rounded-[3px] text-[11px] font-semibold disabled:opacity-40"
          >
            Salvar
          </button>
        </div>

        <p className="text-[10.5px] text-muted">
          A seleção afeta o que é impresso/salvo em PDF. Manuais salvos ficam
          apenas neste aparelho — nada é enviado para nenhum servidor.
        </p>
        <div>
          <PrintButton />
        </div>
      </div>

      {layout === "cards" && <QuickCardsLayout nuclearSteps={nuclearSteps} kits={kits} />}
      {layout === "poster" && <WallPosterLayout articles={selectedArticles} />}

      {layout === "manual" && (
        <>
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

          {selectedArticles.map((a) => (
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
      )}
    </>
  );
}
