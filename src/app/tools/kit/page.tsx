import type { Metadata } from "next";
import AppShell from "@/components/AppShell";
import KitPlanner from "@/components/KitPlanner";

export const metadata: Metadata = {
  title: "Planejador de kit",
  description: "Pessoas, dias, clima e animais → checklist personalizada.",
};

export default function KitPlannerPage() {
  return (
    <AppShell>
      <div className="max-w-md mx-auto px-5 py-5 flex flex-col gap-5">
        <div>
          <h1 className="font-display font-black text-[19px] text-ink">
            Planejador de kit
          </h1>
          <p className="text-[12px] text-[#5b584f] mt-1">
            Ferramenta determinística — sem IA, sem rede, roda inteira no seu
            aparelho.
          </p>
        </div>
        <KitPlanner />
      </div>
    </AppShell>
  );
}
