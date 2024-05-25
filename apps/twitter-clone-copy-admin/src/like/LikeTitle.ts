import { Like as TLike } from "../api/like/Like";

export const LIKE_TITLE_FIELD = "tweetId";

export const LikeTitle = (record: TLike): string => {
  return record.tweetId?.toString() || String(record.id);
};
