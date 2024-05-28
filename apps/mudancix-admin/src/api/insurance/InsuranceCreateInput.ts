import { MoveWhereUniqueInput } from "../move/MoveWhereUniqueInput";

export type InsuranceCreateInput = {
  cost: number;
  coverageAmount: number;
  move: MoveWhereUniqueInput;
  policyNumber: string;
  provider: string;
};
