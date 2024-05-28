import { Budget } from "../budget/Budget";

export type BudgetItem = {
  additionalRequirements: string | null;
  budget?: Budget;
  category?:
    | "ESTAR_E_JANTAR"
    | "DORMITORIO"
    | "COZINHA_AREA"
    | "VEICULOS"
    | "ESCRITORIO"
    | "DIVERSOS";
  createdAt: Date;
  id: string;
  itemName: string;
  needsPacking: boolean;
  needsTempControl: boolean;
  photoUrl: string | null;
  quantity: number;
  updatedAt: Date;
};
