import { SortOrder } from "../../util/SortOrder";

export type DriverOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  isAvailable?: SortOrder;
  name?: SortOrder;
  phoneNumber?: SortOrder;
  totalEarnings?: SortOrder;
  updatedAt?: SortOrder;
  vehicleId?: SortOrder;
};
