import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { RatingListRelationFilter } from "../rating/RatingListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  password?: StringNullableFilter;
  profilePicture?: JsonFilter;
  ratings?: RatingListRelationFilter;
  username?: StringNullableFilter;
};
