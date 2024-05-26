import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  deliveryAgentId?: SortOrder;
  id?: SortOrder;
  orderDate?: SortOrder;
  orderNumber?: SortOrder;
  status?: SortOrder;
  totalAmount?: SortOrder;
  updatedAt?: SortOrder;
  vendorId?: SortOrder;
};
