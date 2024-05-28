import { SortOrder } from "../../util/SortOrder";

export type DiscountOrderByInput = {
  customerId?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  percentage?: SortOrder;
  validUntil?: SortOrder;
};
