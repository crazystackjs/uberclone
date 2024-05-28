import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SupportTicketWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  issue?: StringFilter;
  status?: "PENDING" | "RESOLVED" | "CLOSED";
  updatedAt?: DateTimeFilter;
  user?: UserWhereUniqueInput;
};
