import { Tweet as TTweet } from "../api/tweet/Tweet";

export const TWEET_TITLE_FIELD = "userId";

export const TweetTitle = (record: TTweet): string => {
  return record.userId?.toString() || String(record.id);
};
