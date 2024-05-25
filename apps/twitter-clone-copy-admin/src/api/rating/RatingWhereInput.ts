import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RatingWhereInput = {
  comments?: StringNullableFilter;
  id?: StringFilter;
  ratingScore?: IntNullableFilter;
  ratingTweet?: StringNullableFilter;
  ratingUser?: StringNullableFilter;
  ratingValue?: IntNullableFilter;
  relatedTweet?: StringNullableFilter;
  relatedUser?: StringNullableFilter;
  review?: StringNullableFilter;
  reviewText?: StringNullableFilter;
  tweet?: TweetWhereUniqueInput;
  user?: UserWhereUniqueInput;
  value?: IntNullableFilter;
};
