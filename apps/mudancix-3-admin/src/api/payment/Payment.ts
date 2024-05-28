import { Customer } from "../customer/Customer";
import { Driver } from "../driver/Driver";
import { Move } from "../move/Move";

export type Payment = {
  amount: number;
  createdAt: Date;
  customer?: Customer;
  driver?: Driver | null;
  id: string;
  method?: "CREDIT_CARD" | "DEBIT_CARD" | "PAYPAL" | "BANK_TRANSFER";
  move?: Move;
  status?: "PENDING" | "COMPLETED" | "FAILED";
  updatedAt: Date;
};
