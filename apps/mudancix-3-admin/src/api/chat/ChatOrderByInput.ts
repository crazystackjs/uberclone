import { SortOrder } from "../../util/SortOrder";

export type ChatOrderByInput = {
  createdAt?: SortOrder;
  customerMessengerId?: SortOrder;
  driverMessengerId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
