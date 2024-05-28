import { Budget as TBudget } from "../api/budget/Budget";

export const BUDGET_TITLE_FIELD = "customerName";

export const BudgetTitle = (record: TBudget): string => {
  return record.customerName?.toString() || String(record.id);
};
