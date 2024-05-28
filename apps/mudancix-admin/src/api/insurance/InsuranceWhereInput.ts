import { FloatFilter } from "../../util/FloatFilter";
import { IntFilter } from "../../util/IntFilter";
import { MoveWhereUniqueInput } from "../move/MoveWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type InsuranceWhereInput = {
  cost?: FloatFilter;
  coverageAmount?: FloatFilter;
  id?: IntFilter;
  move?: MoveWhereUniqueInput;
  policyNumber?: StringFilter;
  provider?: StringFilter;
};
