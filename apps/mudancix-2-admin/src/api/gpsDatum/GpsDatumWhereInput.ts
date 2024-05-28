import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { MoveWhereUniqueInput } from "../move/MoveWhereUniqueInput";

export type GpsDatumWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  location?: JsonFilter;
  move?: MoveWhereUniqueInput;
  timestamp?: DateTimeFilter;
};
