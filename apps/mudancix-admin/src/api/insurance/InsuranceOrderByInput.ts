import { SortOrder } from "../../util/SortOrder";

export type InsuranceOrderByInput = {
  cost?: SortOrder;
  coverageAmount?: SortOrder;
  id?: SortOrder;
  moveId?: SortOrder;
  policyNumber?: SortOrder;
  provider?: SortOrder;
};
