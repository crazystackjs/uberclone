import { Move } from "../move/Move";

export type Customer = {
  address: string;
  createdAt: Date;
  email: string;
  id: string;
  moves?: Array<Move>;
  name: string;
  phoneNumber: string;
  updatedAt: Date;
};
