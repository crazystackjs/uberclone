import { Chat } from "../chat/Chat";
import { Move } from "../move/Move";
import { Payment } from "../payment/Payment";

export type Customer = {
  address: string;
  chats?: Array<Chat>;
  createdAt: Date;
  email: string;
  id: string;
  moves?: Array<Move>;
  name: string;
  payments?: Array<Payment>;
  phoneNumber: string;
  updatedAt: Date;
};
