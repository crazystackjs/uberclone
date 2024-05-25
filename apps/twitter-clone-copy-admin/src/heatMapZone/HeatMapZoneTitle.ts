import { HeatMapZone as THeatMapZone } from "../api/heatMapZone/HeatMapZone";

export const HEATMAPZONE_TITLE_FIELD = "location";

export const HeatMapZoneTitle = (record: THeatMapZone): string => {
  return record.location?.toString() || String(record.id);
};
