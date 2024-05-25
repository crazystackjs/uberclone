import { SortOrder } from "../../util/SortOrder";

export type VehicleOrderByInput = {
  createdAt?: SortOrder;
  driverId?: SortOrder;
  id?: SortOrder;
  make?: SortOrder;
  model?: SortOrder;
  plateNumber?: SortOrder;
  updatedAt?: SortOrder;
};
