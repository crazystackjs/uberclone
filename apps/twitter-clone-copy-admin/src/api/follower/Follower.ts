export type Follower = {
  createdAt: Date;
  followedUserId: string | null;
  followerUserId: string | null;
  id: string;
  updatedAt: Date;
};
