import { Move } from "../move/Move";

export type Vehicle = {
  capacityM3: number;
  id: number;
  licensePlate: string;
  make: string;
  model: string;
  moves?: Array<Move>;
};
