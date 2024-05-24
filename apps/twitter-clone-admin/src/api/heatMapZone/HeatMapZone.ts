import { JsonValue } from "type-fest";

export type HeatMapZone = {
  coordinates: JsonValue;
  createdAt: Date;
  description: string | null;
  id: string;
  updatedAt: Date;
  zoneName: string | null;
};
