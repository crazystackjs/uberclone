import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { MoveWhereUniqueInput } from "../move/MoveWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number;
  customer?: CustomerWhereUniqueInput;
  driver?: DriverWhereUniqueInput | null;
  method?: "CREDIT_CARD" | "DEBIT_CARD" | "PAYPAL" | "BANK_TRANSFER";
  move?: MoveWhereUniqueInput;
  status?: "PENDING" | "COMPLETED" | "FAILED";
};
