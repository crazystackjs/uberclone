import { MoveWhereUniqueInput } from "../move/MoveWhereUniqueInput";

export type RouteUpdateInput = {
  destination?: string;
  estimatedTime?: number;
  move?: MoveWhereUniqueInput;
  origin?: string;
};
