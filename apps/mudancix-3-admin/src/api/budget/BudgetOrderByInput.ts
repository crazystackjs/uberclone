import { SortOrder } from "../../util/SortOrder";

export type BudgetOrderByInput = {
  createdAt?: SortOrder;
  customerEmail?: SortOrder;
  customerName?: SortOrder;
  customerPhone?: SortOrder;
  customerWhatsapp?: SortOrder;
  destinationLocationType?: SortOrder;
  exclusiveTruck?: SortOrder;
  flexibleDate?: SortOrder;
  hoisting?: SortOrder;
  id?: SortOrder;
  insurance?: SortOrder;
  moveId?: SortOrder;
  originLocationType?: SortOrder;
  specialInstructions?: SortOrder;
  termsAccepted?: SortOrder;
  updatedAt?: SortOrder;
};
