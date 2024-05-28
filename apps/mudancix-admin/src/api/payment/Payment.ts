import { Move } from "../move/Move";

export type Payment = {
  amount: number;
  createdAt: Date;
  id: number;
  method: string;
  move?: Move;
  status: string;
};
