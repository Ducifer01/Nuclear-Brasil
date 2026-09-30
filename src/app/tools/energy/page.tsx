import type { Metadata } from "next";
import AppShell from "@/components/AppShell";
import EnergyCalculator from "@/components/EnergyCalculator";

export const metadata: Metadata = {
  title: "Calculadora de energia",
  description: "Bateria, equipamentos e consumo → autonomia estimada.",
};

export default function EnergyToolPage() {
  return (
    <AppShell>
      <div className="max-w-md mx-auto px-5 py-5 flex flex-col gap-5">
        <div>
          <h1 className="font-display font-black text-[19px] text-ink">
            Calculadora de energia
          </h1>
          <p className="text-[12px] text-[#5b584f] mt-1">
            Ferramenta determinística — sem IA, sem rede, roda inteira no seu
            aparelho.
          </p>
        </div>
        <EnergyCalculator />
      </div>
    </AppShell>
  );
}
