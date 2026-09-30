import type { Metadata } from "next";
import AppShell from "@/components/AppShell";
import WaterCalculator from "@/components/WaterCalculator";

export const metadata: Metadata = {
  title: "Calculadora de água",
  description: "Pessoas, dias e clima → volume necessário e autonomia do estoque.",
};

export default function WaterToolPage() {
  return (
    <AppShell>
      <div className="max-w-md mx-auto px-5 py-5 flex flex-col gap-5">
        <div>
          <h1 className="font-display font-black text-[19px] text-ink">
            Calculadora de água
          </h1>
          <p className="text-[12px] text-[#5b584f] mt-1">
            Ferramenta determinística — sem IA, sem rede, roda inteira no seu
            aparelho.
          </p>
        </div>
        <WaterCalculator />
      </div>
    </AppShell>
  );
}
