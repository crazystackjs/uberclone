import { DateTimeFilter } from "../../util/DateTimeFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";

export type ChatWhereInput = {
  createdAt?: DateTimeFilter;
  customerMessenger?: CustomerWhereUniqueInput;
  driverMessenger?: DriverWhereUniqueInput;
  id?: StringFilter;
  messages?: MessageListRelationFilter;
  updatedAt?: DateTimeFilter;
};
