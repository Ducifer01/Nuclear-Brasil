import EmergencyPhaseFlow from "@/components/EmergencyPhaseFlow";
import { nuclearScenario } from "@/content/emergency/nuclear";

export default function EmergencyNuclearPage() {
  return <EmergencyPhaseFlow scenario={nuclearScenario} />;
}
