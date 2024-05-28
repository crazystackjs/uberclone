import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { MoveWhereUniqueInput } from "../move/MoveWhereUniqueInput";

export type FeedbackWhereInput = {
  comments?: StringNullableFilter;
  customer?: CustomerWhereUniqueInput;
  id?: IntFilter;
  move?: MoveWhereUniqueInput;
  rating?: IntFilter;
};
