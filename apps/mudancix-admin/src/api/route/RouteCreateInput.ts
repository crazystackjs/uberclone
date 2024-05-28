import { MoveWhereUniqueInput } from "../move/MoveWhereUniqueInput";

export type RouteCreateInput = {
  destination: string;
  estimatedTime: number;
  move: MoveWhereUniqueInput;
  origin: string;
};
