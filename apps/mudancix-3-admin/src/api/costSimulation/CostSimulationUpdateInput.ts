import { InputJsonValue } from "../../types";
import { MoveWhereUniqueInput } from "../move/MoveWhereUniqueInput";

export type CostSimulationUpdateInput = {
  additionalServices?: InputJsonValue;
  distance?: number;
  move?: MoveWhereUniqueInput;
  totalCost?: number;
  volume?: number;
};
