import { BudgetItemUpdateManyWithoutBudgetsInput } from "./BudgetItemUpdateManyWithoutBudgetsInput";
import { MoveWhereUniqueInput } from "../move/MoveWhereUniqueInput";

export type BudgetUpdateInput = {
  budgetItems?: BudgetItemUpdateManyWithoutBudgetsInput;
  customerEmail?: string;
  customerName?: string;
  customerPhone?: string;
  customerWhatsapp?: string;
  destinationLocationType?: string;
  exclusiveTruck?: boolean;
  flexibleDate?: boolean;
  hoisting?: boolean;
  insurance?: boolean;
  move?: MoveWhereUniqueInput;
  originLocationType?: string;
  specialInstructions?: string | null;
  termsAccepted?: boolean;
};
