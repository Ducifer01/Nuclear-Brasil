import { kit0Items } from "@/content/kits/kit0";
import { kit1Items } from "@/content/kits/kit1";
import { kit72hItems } from "@/content/kits/kit72h";
import { kit3Items } from "@/content/kits/kit3";
import { kit4Items } from "@/content/kits/kit4";
import { kit5Items } from "@/content/kits/kit5";
import { kit6Items } from "@/content/kits/kit6";
import type { KitItem } from "@/content/kits/types";
import { calculateWater } from "./calculators";

export type KitTier = {
  id: string;
  label: string;
  maxDays: number | null;
  items: KitItem[];
  href: string;
};

/** Camadas de kit por duração — ver roadmap §24. maxDays=null significa "sem limite superior". */
export const KIT_TIERS: KitTier[] = [
  { id: "kit1", label: "Kit 1 — 10 minutos", maxDays: 0, items: kit1Items, href: "/prepare/kits/10min" },
  { id: "kit2", label: "Kit 2 — 72 horas", maxDays: 3, items: kit72hItems, href: "/prepare/kits/72h" },
  { id: "kit3", label: "Kit 3 — 14 dias", maxDays: 14, items: kit3Items, href: "/prepare/kits/14dias" },
  { id: "kit4", label: "Kit 4 — 30 dias", maxDays: 30, items: kit4Items, href: "/prepare/kits/30dias" },
  { id: "kit5", label: "Kit 5 — 90 dias", maxDays: 90, items: kit5Items, href: "/prepare/kits/90dias" },
  { id: "kit6", label: "Kit 6 — Longo prazo", maxDays: null, items: kit6Items, href: "/prepare/kits/longo-prazo" },
];

/** Sempre incluído como base, independente da duração — ver roadmap §24 "Kit 0". */
export const BASE_TIER: KitTier = {
  id: "kit0",
  label: "Kit 0 — No bolso",
  maxDays: 0,
  items: kit0Items,
  href: "/prepare/kits/bolso",
};

export type KitPlanInput = {
  people: number;
  days: number;
  hasPets: boolean;
  climate: "normal" | "quente";
};

export type KitPlanResult = {
  tier: KitTier;
  waterLiters: number;
};

/** Seleciona a camada de kit adequada à duração informada — determinístico, sem IA. */
export function planKit(input: KitPlanInput): KitPlanResult {
  const days = Math.max(0, input.days);
  const tier =
    KIT_TIERS.find((t) => t.maxDays !== null && days <= t.maxDays) ??
    KIT_TIERS[KIT_TIERS.length - 1];

  const water = calculateWater({
    people: input.people,
    days: Math.max(1, days),
    petsLitersPerDay: input.hasPets ? Math.max(1, input.people) : 0,
    climate: input.climate,
    storedLiters: 0,
  });

  return { tier, waterLiters: water.neededLiters };
}
