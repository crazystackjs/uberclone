import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  phone?: SortOrder;
};
