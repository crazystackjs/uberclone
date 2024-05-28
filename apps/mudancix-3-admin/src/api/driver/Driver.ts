import { Chat } from "../chat/Chat";
import { Move } from "../move/Move";
import { Payment } from "../payment/Payment";
import { Vehicle } from "../vehicle/Vehicle";

export type Driver = {
  chats?: Array<Chat>;
  createdAt: Date;
  email: string;
  id: string;
  isAvailable: boolean;
  moves?: Array<Move>;
  name: string;
  payments?: Array<Payment>;
  phoneNumber: string;
  totalEarnings: number;
  updatedAt: Date;
  vehicle?: Vehicle;
};
