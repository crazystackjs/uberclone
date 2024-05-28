import { BudgetWhereUniqueInput } from "../budget/BudgetWhereUniqueInput";

export type BudgetItemCreateInput = {
  additionalRequirements?: string | null;
  budget: BudgetWhereUniqueInput;
  category:
    | "ESTAR_E_JANTAR"
    | "DORMITORIO"
    | "COZINHA_AREA"
    | "VEICULOS"
    | "ESCRITORIO"
    | "DIVERSOS";
  itemName: string;
  needsPacking: boolean;
  needsTempControl: boolean;
  photoUrl?: string | null;
  quantity: number;
};
