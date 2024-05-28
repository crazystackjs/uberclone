import { ChatWhereUniqueInput } from "../chat/ChatWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type MessageWhereInput = {
  chat?: ChatWhereUniqueInput;
  content?: StringFilter;
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  sender?: "CUSTOMER" | "DRIVER";
  updatedAt?: DateTimeFilter;
};
