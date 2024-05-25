import { SortOrder } from "../../util/SortOrder";

export type RideOrderByInput = {
  createdAt?: SortOrder;
  driverId?: SortOrder;
  dropoffLocation?: SortOrder;
  id?: SortOrder;
  pickupLocation?: SortOrder;
  riderId?: SortOrder;
  updatedAt?: SortOrder;
};
