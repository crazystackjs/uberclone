import { SortOrder } from "../../util/SortOrder";

export type SubscriptionOrderByInput = {
  createdAt?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  plan?: SortOrder;
  startDate?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
