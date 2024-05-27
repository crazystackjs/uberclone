import { SortOrder } from "../../util/SortOrder";

export type VideoOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  publishedAt?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
