import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SupportTicketUpdateInput = {
  issue?: string;
  status?: "PENDING" | "RESOLVED" | "CLOSED";
  user?: UserWhereUniqueInput;
};
