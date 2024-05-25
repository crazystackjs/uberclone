import { Rating as TRating } from "../api/rating/Rating";

export const RATING_TITLE_FIELD = "ratingTweet";

export const RatingTitle = (record: TRating): string => {
  return record.ratingTweet?.toString() || String(record.id);
};
