import { InputJsonValue } from "../../types";

export type HeatMapZoneCreateInput = {
  coordinates?: InputJsonValue;
  description?: string | null;
  zoneName?: string | null;
};
