import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RetweetWhereInput = {
  id?: StringFilter;
  tweetId?: StringNullableFilter;
  userId?: StringNullableFilter;
};
