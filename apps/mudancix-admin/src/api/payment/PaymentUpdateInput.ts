import { MoveWhereUniqueInput } from "../move/MoveWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number;
  method?: string;
  move?: MoveWhereUniqueInput;
  status?: string;
};
