import { BudgetItemWhereInput } from "./BudgetItemWhereInput";
import { BudgetItemOrderByInput } from "./BudgetItemOrderByInput";

export type BudgetItemFindManyArgs = {
  where?: BudgetItemWhereInput;
  orderBy?: Array<BudgetItemOrderByInput>;
  skip?: number;
  take?: number;
};
