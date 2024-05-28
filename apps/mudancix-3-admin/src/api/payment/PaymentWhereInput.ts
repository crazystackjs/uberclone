import { FloatFilter } from "../../util/FloatFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { MoveWhereUniqueInput } from "../move/MoveWhereUniqueInput";

export type PaymentWhereInput = {
  amount?: FloatFilter;
  createdAt?: DateTimeFilter;
  customer?: CustomerWhereUniqueInput;
  driver?: DriverWhereUniqueInput;
  id?: StringFilter;
  method?: "CREDIT_CARD" | "DEBIT_CARD" | "PAYPAL" | "BANK_TRANSFER";
  move?: MoveWhereUniqueInput;
  status?: "PENDING" | "COMPLETED" | "FAILED";
  updatedAt?: DateTimeFilter;
};
