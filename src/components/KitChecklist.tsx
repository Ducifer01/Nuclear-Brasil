"use client";

import { useEffect, useState } from "react";
import { CheckIcon } from "./icons";
import type { KitItem } from "@/content/kits/types";

export default function KitChecklist({
  storageKey,
  items,
  accentClass = "bg-amber",
}: {
  storageKey: string;
  items: KitItem[];
  accentClass?: string;
}) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      // Leitura única, pós-montagem: evita divergência entre o HTML
      // renderizado no servidor (sem acesso a localStorage) e o estado
      // salvo no aparelho do usuário.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (raw) setChecked(JSON.parse(raw));
    } catch {
      // localStorage indisponível (modo privado, etc.) — segue com estado em memória.
    }
    setHydrated(true);
  }, [storageKey]);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(storageKey, JSON.stringify(checked));
    } catch {
      // idem — falha ao salvar não deve quebrar a checklist.
    }
  }, [checked, hydrated, storageKey]);

  const done = items.filter((it) => checked[it.id]).length;
  const pct = Math.round((done / items.length) * 100);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between items-baseline">
          <span className="font-semibold text-[13px] text-ink">
            {done} de {items.length} itens
          </span>
          <span className="font-mono text-[11px] text-amber">{pct}%</span>
        </div>
        <div className="h-2 bg-panel-2 rounded-full overflow-hidden">
          <div
            className={`h-2 rounded-full ${accentClass}`}
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {items.map((item) => {
          const isChecked = !!checked[item.id];
          return (
            <button
              key={item.id}
              type="button"
              onClick={() =>
                setChecked((prev) => ({ ...prev, [item.id]: !prev[item.id] }))
              }
              className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-[3px] text-left"
            >
              <span
                className={`w-[22px] h-[22px] rounded-[4px] border-2 flex items-center justify-center shrink-0 ${
                  isChecked ? `${accentClass} border-transparent` : "border-[#c9c1a8]"
                }`}
              >
                {isChecked && <CheckIcon width={13} height={13} className="text-white" />}
              </span>
              <span className="flex-1">
                <span
                  className={`block font-semibold text-[13px] ${
                    isChecked ? "line-through text-muted" : "text-ink"
                  }`}
                >
                  {item.label}
                </span>
                <span className="block text-[10.5px] text-muted mt-0.5">
                  {item.hint}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
