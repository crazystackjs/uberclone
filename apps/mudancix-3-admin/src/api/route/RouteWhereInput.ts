import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { MoveWhereUniqueInput } from "../move/MoveWhereUniqueInput";
import { BooleanFilter } from "../../util/BooleanFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type RouteWhereInput = {
  createdAt?: DateTimeFilter;
  endLocation?: StringFilter;
  id?: StringFilter;
  move?: MoveWhereUniqueInput;
  optimized?: BooleanFilter;
  startLocation?: StringFilter;
  updatedAt?: DateTimeFilter;
  waypoints?: JsonFilter;
};
