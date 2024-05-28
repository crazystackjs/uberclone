import { SortOrder } from "../../util/SortOrder";

export type CostSimulationOrderByInput = {
  additionalServices?: SortOrder;
  createdAt?: SortOrder;
  distance?: SortOrder;
  id?: SortOrder;
  moveId?: SortOrder;
  totalCost?: SortOrder;
  updatedAt?: SortOrder;
  volume?: SortOrder;
};
