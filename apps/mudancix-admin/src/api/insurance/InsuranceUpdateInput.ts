import { MoveWhereUniqueInput } from "../move/MoveWhereUniqueInput";

export type InsuranceUpdateInput = {
  cost?: number;
  coverageAmount?: number;
  move?: MoveWhereUniqueInput;
  policyNumber?: string;
  provider?: string;
};
