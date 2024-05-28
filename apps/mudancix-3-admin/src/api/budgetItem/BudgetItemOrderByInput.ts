import { SortOrder } from "../../util/SortOrder";

export type BudgetItemOrderByInput = {
  additionalRequirements?: SortOrder;
  budgetId?: SortOrder;
  category?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  itemName?: SortOrder;
  needsPacking?: SortOrder;
  needsTempControl?: SortOrder;
  photoUrl?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
