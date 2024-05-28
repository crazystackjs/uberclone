import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { MoveWhereUniqueInput } from "../move/MoveWhereUniqueInput";

export type FeedbackCreateInput = {
  comments?: string | null;
  customer: CustomerWhereUniqueInput;
  move: MoveWhereUniqueInput;
  rating: number;
};
