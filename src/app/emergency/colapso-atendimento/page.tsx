import EmergencyPhaseFlow from "@/components/EmergencyPhaseFlow";
import { colapsoAtendimentoScenario } from "@/content/emergency/colapso-atendimento";

export default function EmergencyColapsoAtendimentoPage() {
  return <EmergencyPhaseFlow scenario={colapsoAtendimentoScenario} />;
}
