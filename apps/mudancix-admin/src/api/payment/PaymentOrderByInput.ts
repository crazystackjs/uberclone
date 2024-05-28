import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  method?: SortOrder;
  moveId?: SortOrder;
  status?: SortOrder;
};
