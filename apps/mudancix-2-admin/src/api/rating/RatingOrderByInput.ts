import { SortOrder } from "../../util/SortOrder";

export type RatingOrderByInput = {
  comment?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  rateeId?: SortOrder;
  raterId?: SortOrder;
  rating?: SortOrder;
  updatedAt?: SortOrder;
};
