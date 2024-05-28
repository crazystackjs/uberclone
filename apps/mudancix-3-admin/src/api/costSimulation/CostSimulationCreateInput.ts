import { InputJsonValue } from "../../types";
import { MoveWhereUniqueInput } from "../move/MoveWhereUniqueInput";

export type CostSimulationCreateInput = {
  additionalServices?: InputJsonValue;
  distance: number;
  move: MoveWhereUniqueInput;
  totalCost: number;
  volume: number;
};
