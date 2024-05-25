import { SortOrder } from "../../util/SortOrder";

export type RideRequestOrderByInput = {
  createdAt?: SortOrder;
  destinationLocation?: SortOrder;
  id?: SortOrder;
  pickupLocation?: SortOrder;
  riderId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
