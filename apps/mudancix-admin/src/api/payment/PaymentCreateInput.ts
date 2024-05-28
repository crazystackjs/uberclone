import { MoveWhereUniqueInput } from "../move/MoveWhereUniqueInput";

export type PaymentCreateInput = {
  amount: number;
  method: string;
  move: MoveWhereUniqueInput;
  status: string;
};
