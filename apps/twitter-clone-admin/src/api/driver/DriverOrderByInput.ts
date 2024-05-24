import { SortOrder } from "../../util/SortOrder";

export type DriverOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
  vehicleId?: SortOrder;
};
