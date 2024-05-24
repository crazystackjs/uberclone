import { InputJsonValue } from "../../types";

export type HeatMapZoneUpdateInput = {
  coordinates?: InputJsonValue;
  description?: string | null;
  zoneName?: string | null;
};
