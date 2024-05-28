import { Rating } from "../rating/Rating";
import { SupportTicket } from "../supportTicket/SupportTicket";

export type User = {
  createdAt: Date;
  email: string;
  id: string;
  name: string;
  password: string;
  phoneNumber: string;
  ratingsGiven?: Array<Rating>;
  ratingsReceived?: Array<Rating>;
  role?: "ADMIN" | "DRIVER" | "CUSTOMER";
  supportTicket?: Array<SupportTicket>;
  updatedAt: Date;
};
