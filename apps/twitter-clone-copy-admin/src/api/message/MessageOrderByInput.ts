import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  recipientUserId?: SortOrder;
  senderUserId?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
