import { SortOrder } from "../../util/SortOrder";

export type FollowerOrderByInput = {
  createdAt?: SortOrder;
  followedUserId?: SortOrder;
  followerUserId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
