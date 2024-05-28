import { Chat } from "../chat/Chat";

export type Message = {
  chat?: Chat;
  content: string;
  createdAt: Date;
  id: string;
  sender?: "CUSTOMER" | "DRIVER";
  updatedAt: Date;
};
