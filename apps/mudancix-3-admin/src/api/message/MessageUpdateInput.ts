import { ChatWhereUniqueInput } from "../chat/ChatWhereUniqueInput";

export type MessageUpdateInput = {
  chat?: ChatWhereUniqueInput;
  content?: string;
  sender?: "CUSTOMER" | "DRIVER";
};
