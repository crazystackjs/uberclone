import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { StringFilter } from "../../util/StringFilter";
import { MoveWhereUniqueInput } from "../move/MoveWhereUniqueInput";

export type CostSimulationWhereInput = {
  additionalServices?: JsonFilter;
  createdAt?: DateTimeFilter;
  distance?: FloatFilter;
  id?: StringFilter;
  move?: MoveWhereUniqueInput;
  totalCost?: FloatFilter;
  updatedAt?: DateTimeFilter;
  volume?: FloatFilter;
};
