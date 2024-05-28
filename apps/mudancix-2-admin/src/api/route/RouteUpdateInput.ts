import { MoveWhereUniqueInput } from "../move/MoveWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type RouteUpdateInput = {
  endLocation?: string;
  move?: MoveWhereUniqueInput;
  optimized?: boolean;
  startLocation?: string;
  waypoints?: InputJsonValue;
};
