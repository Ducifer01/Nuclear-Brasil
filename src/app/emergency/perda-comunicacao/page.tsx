import EmergencyPhaseFlow from "@/components/EmergencyPhaseFlow";
import { perdaComunicacaoScenario } from "@/content/emergency/perda-comunicacao";

export default function EmergencyPerdaComunicacaoPage() {
  return <EmergencyPhaseFlow scenario={perdaComunicacaoScenario} />;
}
