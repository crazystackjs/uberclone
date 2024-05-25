import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RatingUpdateInput = {
  comments?: string | null;
  ratingScore?: number | null;
  ratingTweet?: string | null;
  ratingUser?: string | null;
  ratingValue?: number | null;
  relatedTweet?: string | null;
  relatedUser?: string | null;
  review?: string | null;
  reviewText?: string | null;
  tweet?: TweetWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
  value?: number | null;
};
