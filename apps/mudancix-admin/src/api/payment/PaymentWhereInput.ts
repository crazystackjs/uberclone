import { FloatFilter } from "../../util/FloatFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { MoveWhereUniqueInput } from "../move/MoveWhereUniqueInput";

export type PaymentWhereInput = {
  amount?: FloatFilter;
  createdAt?: DateTimeFilter;
  id?: IntFilter;
  method?: StringFilter;
  move?: MoveWhereUniqueInput;
  status?: StringFilter;
};
