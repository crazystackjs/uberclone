import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { MoveWhereUniqueInput } from "../move/MoveWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";

export type ItemWhereInput = {
  description?: StringNullableFilter;
  id?: IntFilter;
  move?: MoveWhereUniqueInput;
  name?: StringFilter;
  photoUrl?: StringNullableFilter;
  volumeM3?: FloatFilter;
};
