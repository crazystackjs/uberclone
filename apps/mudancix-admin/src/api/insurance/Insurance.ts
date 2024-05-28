import { Move } from "../move/Move";

export type Insurance = {
  cost: number;
  coverageAmount: number;
  id: number;
  move?: Move;
  policyNumber: string;
  provider: string;
};
