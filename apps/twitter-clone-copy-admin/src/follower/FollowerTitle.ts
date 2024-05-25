import { Follower as TFollower } from "../api/follower/Follower";

export const FOLLOWER_TITLE_FIELD = "followedUserId";

export const FollowerTitle = (record: TFollower): string => {
  return record.followedUserId?.toString() || String(record.id);
};
