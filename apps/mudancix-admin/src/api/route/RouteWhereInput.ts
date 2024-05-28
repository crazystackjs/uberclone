import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { IntFilter } from "../../util/IntFilter";
import { MoveWhereUniqueInput } from "../move/MoveWhereUniqueInput";

export type RouteWhereInput = {
  destination?: StringFilter;
  estimatedTime?: FloatFilter;
  id?: IntFilter;
  move?: MoveWhereUniqueInput;
  origin?: StringFilter;
};
