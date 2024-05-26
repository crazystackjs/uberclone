import { HealthServiceWhereInput } from "./HealthServiceWhereInput";
import { HealthServiceOrderByInput } from "./HealthServiceOrderByInput";

export type HealthServiceFindManyArgs = {
  where?: HealthServiceWhereInput;
  orderBy?: Array<HealthServiceOrderByInput>;
  skip?: number;
  take?: number;
};
