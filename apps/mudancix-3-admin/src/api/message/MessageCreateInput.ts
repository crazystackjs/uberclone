import { ChatWhereUniqueInput } from "../chat/ChatWhereUniqueInput";

export type MessageCreateInput = {
  chat: ChatWhereUniqueInput;
  content: string;
  sender: "CUSTOMER" | "DRIVER";
};
