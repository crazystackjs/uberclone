import { CostSimulation as TCostSimulation } from "../api/costSimulation/CostSimulation";

export const COSTSIMULATION_TITLE_FIELD = "id";

export const CostSimulationTitle = (record: TCostSimulation): string => {
  return record.id?.toString() || String(record.id);
};
