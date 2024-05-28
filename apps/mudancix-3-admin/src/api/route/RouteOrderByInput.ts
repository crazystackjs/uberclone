import { SortOrder } from "../../util/SortOrder";

export type RouteOrderByInput = {
  createdAt?: SortOrder;
  endLocation?: SortOrder;
  id?: SortOrder;
  moveId?: SortOrder;
  optimized?: SortOrder;
  startLocation?: SortOrder;
  updatedAt?: SortOrder;
  waypoints?: SortOrder;
};
