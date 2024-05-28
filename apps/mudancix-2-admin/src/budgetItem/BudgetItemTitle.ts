import { BudgetItem as TBudgetItem } from "../api/budgetItem/BudgetItem";

export const BUDGETITEM_TITLE_FIELD = "itemName";

export const BudgetItemTitle = (record: TBudgetItem): string => {
  return record.itemName?.toString() || String(record.id);
};
