import { FloatFilter } from "../../util/FloatFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { MoveWhereUniqueInput } from "../move/MoveWhereUniqueInput";

export type StorageWhereInput = {
  cost?: FloatFilter;
  endDate?: DateTimeFilter;
  id?: IntFilter;
  location?: StringFilter;
  move?: MoveWhereUniqueInput;
  startDate?: DateTimeFilter;
};
