import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { RatingListRelationFilter } from "../rating/RatingListRelationFilter";
import { SupportTicketListRelationFilter } from "../supportTicket/SupportTicketListRelationFilter";

export type UserWhereInput = {
  createdAt?: DateTimeFilter;
  email?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  password?: StringFilter;
  phoneNumber?: StringFilter;
  ratingsGiven?: RatingListRelationFilter;
  ratingsReceived?: RatingListRelationFilter;
  role?: "ADMIN" | "DRIVER" | "CUSTOMER";
  supportTicket?: SupportTicketListRelationFilter;
  updatedAt?: DateTimeFilter;
};
