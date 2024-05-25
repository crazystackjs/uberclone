import { StringFilter } from "../../util/StringFilter";
import { RatingListRelationFilter } from "../rating/RatingListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TweetWhereInput = {
  id?: StringFilter;
  ratings?: RatingListRelationFilter;
  text?: StringNullableFilter;
  userId?: StringNullableFilter;
};
