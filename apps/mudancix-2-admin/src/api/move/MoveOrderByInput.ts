import { SortOrder } from "../../util/SortOrder";

export type MoveOrderByInput = {
  budgetId?: SortOrder;
  completedAt?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  deliveryLocation?: SortOrder;
  distance?: SortOrder;
  driverId?: SortOrder;
  id?: SortOrder;
  pickupLocation?: SortOrder;
  price?: SortOrder;
  routeId?: SortOrder;
  scheduledAt?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  volume?: SortOrder;
};
