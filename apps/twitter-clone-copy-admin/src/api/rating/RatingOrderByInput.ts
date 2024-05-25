import { SortOrder } from "../../util/SortOrder";

export type RatingOrderByInput = {
  comments?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  ratingScore?: SortOrder;
  ratingTweet?: SortOrder;
  ratingUser?: SortOrder;
  ratingValue?: SortOrder;
  relatedTweet?: SortOrder;
  relatedUser?: SortOrder;
  review?: SortOrder;
  reviewText?: SortOrder;
  tweetId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  value?: SortOrder;
};
