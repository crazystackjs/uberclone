import { User } from "../user/User";

export type SupportTicket = {
  createdAt: Date;
  id: string;
  issue: string;
  status?: "PENDING" | "RESOLVED" | "CLOSED";
  updatedAt: Date;
  user?: User;
};
