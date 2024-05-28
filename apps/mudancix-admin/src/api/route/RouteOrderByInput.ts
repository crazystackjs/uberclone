import { SortOrder } from "../../util/SortOrder";

export type RouteOrderByInput = {
  destination?: SortOrder;
  estimatedTime?: SortOrder;
  id?: SortOrder;
  moveId?: SortOrder;
  origin?: SortOrder;
};
