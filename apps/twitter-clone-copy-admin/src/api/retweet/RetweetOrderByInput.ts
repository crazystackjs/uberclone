import { SortOrder } from "../../util/SortOrder";

export type RetweetOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  tweetId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
