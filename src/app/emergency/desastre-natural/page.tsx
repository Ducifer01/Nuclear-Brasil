import EmergencyPhaseFlow from "@/components/EmergencyPhaseFlow";
import { desastreNaturalScenario } from "@/content/emergency/desastre-natural";

export default function EmergencyDesastreNaturalPage() {
  return <EmergencyPhaseFlow scenario={desastreNaturalScenario} />;
}
