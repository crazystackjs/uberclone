import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  phone?: SortOrder;
  role?: SortOrder;
};
