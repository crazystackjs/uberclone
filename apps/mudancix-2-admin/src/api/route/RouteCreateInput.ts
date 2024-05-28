import { MoveWhereUniqueInput } from "../move/MoveWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type RouteCreateInput = {
  endLocation: string;
  move: MoveWhereUniqueInput;
  optimized: boolean;
  startLocation: string;
  waypoints: InputJsonValue;
};
