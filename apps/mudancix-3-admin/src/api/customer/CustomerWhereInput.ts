import { StringFilter } from "../../util/StringFilter";
import { ChatListRelationFilter } from "../chat/ChatListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { MoveListRelationFilter } from "../move/MoveListRelationFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";

export type CustomerWhereInput = {
  address?: StringFilter;
  chats?: ChatListRelationFilter;
  createdAt?: DateTimeFilter;
  email?: StringFilter;
  id?: StringFilter;
  moves?: MoveListRelationFilter;
  name?: StringFilter;
  payments?: PaymentListRelationFilter;
  phoneNumber?: StringFilter;
  updatedAt?: DateTimeFilter;
};
