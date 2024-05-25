import { HeatMapZoneWhereInput } from "./HeatMapZoneWhereInput";
import { HeatMapZoneOrderByInput } from "./HeatMapZoneOrderByInput";

export type HeatMapZoneFindManyArgs = {
  where?: HeatMapZoneWhereInput;
  orderBy?: Array<HeatMapZoneOrderByInput>;
  skip?: number;
  take?: number;
};
