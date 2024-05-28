import { SortOrder } from "../../util/SortOrder";

export type VehicleOrderByInput = {
  capacityM3?: SortOrder;
  id?: SortOrder;
  licensePlate?: SortOrder;
  make?: SortOrder;
  model?: SortOrder;
};
