import { HeatMapZone as THeatMapZone } from "../api/heatMapZone/HeatMapZone";

export const HEATMAPZONE_TITLE_FIELD = "zoneName";

export const HeatMapZoneTitle = (record: THeatMapZone): string => {
  return record.zoneName?.toString() || String(record.id);
};
