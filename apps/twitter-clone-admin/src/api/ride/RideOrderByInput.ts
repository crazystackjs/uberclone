import { SortOrder } from "../../util/SortOrder";

export type RideOrderByInput = {
  createdAt?: SortOrder;
  driverId?: SortOrder;
  dropoffLocation?: SortOrder;
  endTime?: SortOrder;
  fare?: SortOrder;
  id?: SortOrder;
  pickupLocation?: SortOrder;
  riderId?: SortOrder;
  startTime?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
