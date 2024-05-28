import { CostSimulationWhereInput } from "./CostSimulationWhereInput";
import { CostSimulationOrderByInput } from "./CostSimulationOrderByInput";

export type CostSimulationFindManyArgs = {
  where?: CostSimulationWhereInput;
  orderBy?: Array<CostSimulationOrderByInput>;
  skip?: number;
  take?: number;
};
