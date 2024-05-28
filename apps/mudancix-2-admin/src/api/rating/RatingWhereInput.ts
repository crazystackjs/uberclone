import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type RatingWhereInput = {
  comment?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  ratee?: UserWhereUniqueInput;
  rater?: UserWhereUniqueInput;
  rating?: IntFilter;
  updatedAt?: DateTimeFilter;
};
