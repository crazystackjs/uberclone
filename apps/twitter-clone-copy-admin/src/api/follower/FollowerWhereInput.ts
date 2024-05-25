import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FollowerWhereInput = {
  followedUserId?: StringNullableFilter;
  followerUserId?: StringNullableFilter;
  id?: StringFilter;
};
