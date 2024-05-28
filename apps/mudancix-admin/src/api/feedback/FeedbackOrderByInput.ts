import { SortOrder } from "../../util/SortOrder";

export type FeedbackOrderByInput = {
  comments?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  moveId?: SortOrder;
  rating?: SortOrder;
};
