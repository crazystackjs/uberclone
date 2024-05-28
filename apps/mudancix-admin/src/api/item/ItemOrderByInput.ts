import { SortOrder } from "../../util/SortOrder";

export type ItemOrderByInput = {
  description?: SortOrder;
  id?: SortOrder;
  moveId?: SortOrder;
  name?: SortOrder;
  photoUrl?: SortOrder;
  volumeM3?: SortOrder;
};
