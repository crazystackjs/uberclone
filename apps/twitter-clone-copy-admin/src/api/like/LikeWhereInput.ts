import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LikeWhereInput = {
  id?: StringFilter;
  tweetId?: StringNullableFilter;
  userId?: StringNullableFilter;
};
