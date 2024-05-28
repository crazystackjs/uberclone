import { Rating as TRating } from "../api/rating/Rating";

export const RATING_TITLE_FIELD = "comment";

export const RatingTitle = (record: TRating): string => {
  return record.comment?.toString() || String(record.id);
};
