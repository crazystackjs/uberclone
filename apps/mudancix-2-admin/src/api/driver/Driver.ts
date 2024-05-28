import { Move } from "../move/Move";
import { Vehicle } from "../vehicle/Vehicle";

export type Driver = {
  createdAt: Date;
  email: string;
  id: string;
  isAvailable: boolean;
  moves?: Array<Move>;
  name: string;
  phoneNumber: string;
  totalEarnings: number;
  updatedAt: Date;
  vehicle?: Vehicle;
};
