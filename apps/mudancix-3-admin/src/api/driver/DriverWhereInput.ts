import { ChatListRelationFilter } from "../chat/ChatListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { MoveListRelationFilter } from "../move/MoveListRelationFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type DriverWhereInput = {
  chats?: ChatListRelationFilter;
  createdAt?: DateTimeFilter;
  email?: StringFilter;
  id?: StringFilter;
  isAvailable?: BooleanFilter;
  moves?: MoveListRelationFilter;
  name?: StringFilter;
  payments?: PaymentListRelationFilter;
  phoneNumber?: StringFilter;
  totalEarnings?: FloatFilter;
  updatedAt?: DateTimeFilter;
  vehicle?: VehicleWhereUniqueInput;
};
