import { RatingCreateNestedManyWithoutUsersInput } from "./RatingCreateNestedManyWithoutUsersInput";
import { SupportTicketCreateNestedManyWithoutUsersInput } from "./SupportTicketCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email: string;
  name: string;
  password: string;
  phoneNumber: string;
  ratingsGiven?: RatingCreateNestedManyWithoutUsersInput;
  ratingsReceived?: RatingCreateNestedManyWithoutUsersInput;
  role: "ADMIN" | "DRIVER" | "CUSTOMER";
  supportTicket?: SupportTicketCreateNestedManyWithoutUsersInput;
};
