"use client";

import { useMemo, useState } from "react";
import { calculateEnergy, type EnergyAppliance } from "@/lib/calculators";

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[12.5px] font-semibold text-ink">{label}</span>
      {children}
      {hint && <span className="text-[10.5px] text-muted">{hint}</span>}
    </label>
  );
}

const inputClass =
  "w-full px-3 py-2.5 bg-white border border-border rounded-[3px] text-[14px] text-ink font-mono focus:outline-none focus:border-teal";

const DEFAULT_APPLIANCES: EnergyAppliance[] = [
  { id: "celular", name: "Celular", watts: 10, hoursPerDay: 2 },
  { id: "lanterna", name: "Lanterna LED", watts: 3, hoursPerDay: 3 },
  { id: "radio", name: "Rádio", watts: 2, hoursPerDay: 4 },
];

export default function EnergyCalculator() {
  const [batteryWh, setBatteryWh] = useState(300);
  const [appliances, setAppliances] = useState<EnergyAppliance[]>(DEFAULT_APPLIANCES);

  const result = useMemo(() => calculateEnergy({ batteryWh, appliances }), [batteryWh, appliances]);

  function updateAppliance(id: string, field: "watts" | "hoursPerDay", value: number) {
    setAppliances((prev) => prev.map((a) => (a.id === id ? { ...a, [field]: value } : a)));
  }

  return (
    <div className="flex flex-col gap-5">
      <Field label="Capacidade da bateria/estação (Wh)" hint="Ver especificação do equipamento">
        <input
          type="number"
          min={0}
          value={batteryWh}
          onChange={(e) => setBatteryWh(Number(e.target.value))}
          className={inputClass}
        />
      </Field>

      <div className="flex flex-col gap-3">
        <span className="text-[12.5px] font-semibold text-ink">Equipamentos</span>
        {appliances.map((a) => (
          <div key={a.id} className="grid grid-cols-3 gap-2 items-end p-3 bg-panel border border-border rounded-[3px]">
            <div className="col-span-3 text-[11.5px] font-semibold text-ink">{a.name}</div>
            <Field label="Watts">
              <input
                type="number"
                min={0}
                value={a.watts}
                onChange={(e) => updateAppliance(a.id, "watts", Number(e.target.value))}
                className={inputClass}
              />
            </Field>
            <Field label="Horas/dia">
              <input
                type="number"
                min={0}
                value={a.hoursPerDay}
                onChange={(e) => updateAppliance(a.id, "hoursPerDay", Number(e.target.value))}
                className={inputClass}
              />
            </Field>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2 p-4 bg-teal-tint rounded-[3px]">
        <div className="flex justify-between">
          <span className="text-[12px] text-[#164f4c]">Consumo diário</span>
          <span className="font-mono font-semibold text-[13px] text-[#164f4c]">
            {result.dailyWh} Wh
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-[12px] text-[#164f4c]">Autonomia da bateria</span>
          <span className="font-mono font-semibold text-[13px] text-[#164f4c]">
            {result.autonomyDays} dia{result.autonomyDays === 1 ? "" : "s"}
          </span>
        </div>
      </div>

      <p className="text-[10.5px] text-muted leading-relaxed">
        Cálculo local e determinístico (Wh = watts × horas/dia). Nada é
        enviado para nenhum servidor. Consumos reais variam por equipamento —
        consulte a especificação de cada aparelho.
      </p>
    </div>
  );
}
