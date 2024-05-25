import { SortOrder } from "../../util/SortOrder";

export type RideOrderByInput = {
  createdAt?: SortOrder;
  driverId?: SortOrder;
  endLocation?: SortOrder;
  id?: SortOrder;
  riderId?: SortOrder;
  startLocation?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
