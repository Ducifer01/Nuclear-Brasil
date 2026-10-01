import EmergencyPhaseFlow from "@/components/EmergencyPhaseFlow";
import { incendioScenario } from "@/content/emergency/incendio";

export default function EmergencyIncendioPage() {
  return <EmergencyPhaseFlow scenario={incendioScenario} />;
}
