import { BudgetItem } from "../budgetItem/BudgetItem";
import { Move } from "../move/Move";

export type Budget = {
  budgetItems?: Array<BudgetItem>;
  createdAt: Date;
  customerEmail: string;
  customerName: string;
  customerPhone: string;
  customerWhatsapp: string;
  destinationLocationType: string;
  exclusiveTruck: boolean;
  flexibleDate: boolean;
  hoisting: boolean;
  id: string;
  insurance: boolean;
  move?: Move;
  originLocationType: string;
  specialInstructions: string | null;
  termsAccepted: boolean;
  updatedAt: Date;
};
