import EmergencyPhaseFlow from "@/components/EmergencyPhaseFlow";
import { colapsoEnergiaScenario } from "@/content/emergency/colapso-energia";

export default function EmergencyColapsoEnergiaPage() {
  return <EmergencyPhaseFlow scenario={colapsoEnergiaScenario} />;
}
