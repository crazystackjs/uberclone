import { SortOrder } from "../../util/SortOrder";

export type SupportTicketOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  issue?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
