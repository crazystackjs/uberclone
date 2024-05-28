import { SortOrder } from "../../util/SortOrder";

export type ServiceOrderByInput = {
  cost?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
};
