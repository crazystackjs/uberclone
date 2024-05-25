import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type VehicleWhereInput = {
  id?: StringFilter;
  make?: StringNullableFilter;
  model?: StringNullableFilter;
  year?: IntNullableFilter;
};
