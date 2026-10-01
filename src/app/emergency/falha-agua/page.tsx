import EmergencyPhaseFlow from "@/components/EmergencyPhaseFlow";
import { falhaAguaScenario } from "@/content/emergency/falha-agua";

export default function EmergencyFalhaAguaPage() {
  return <EmergencyPhaseFlow scenario={falhaAguaScenario} />;
}
