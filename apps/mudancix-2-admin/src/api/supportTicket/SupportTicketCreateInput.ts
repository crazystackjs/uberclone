import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SupportTicketCreateInput = {
  issue: string;
  status: "PENDING" | "RESOLVED" | "CLOSED";
  user: UserWhereUniqueInput;
};
