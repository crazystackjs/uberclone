import { RatingUpdateManyWithoutUsersInput } from "./RatingUpdateManyWithoutUsersInput";
import { SupportTicketUpdateManyWithoutUsersInput } from "./SupportTicketUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string;
  name?: string;
  password?: string;
  phoneNumber?: string;
  ratingsGiven?: RatingUpdateManyWithoutUsersInput;
  ratingsReceived?: RatingUpdateManyWithoutUsersInput;
  role?: "ADMIN" | "DRIVER" | "CUSTOMER";
  supportTicket?: SupportTicketUpdateManyWithoutUsersInput;
};
