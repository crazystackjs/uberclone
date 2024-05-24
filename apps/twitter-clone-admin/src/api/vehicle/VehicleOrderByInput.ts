import { SortOrder } from "../../util/SortOrder";

export type VehicleOrderByInput = {
  createdAt?: SortOrder;
  driverId?: SortOrder;
  id?: SortOrder;
  licensePlate?: SortOrder;
  make?: SortOrder;
  model?: SortOrder;
  updatedAt?: SortOrder;
};
