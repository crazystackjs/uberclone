import { Retweet as TRetweet } from "../api/retweet/Retweet";

export const RETWEET_TITLE_FIELD = "tweetId";

export const RetweetTitle = (record: TRetweet): string => {
  return record.tweetId?.toString() || String(record.id);
};
