import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type HeatMapZoneWhereInput = {
  id?: StringFilter;
  intensity?: IntNullableFilter;
  location?: StringNullableFilter;
  radius?: IntNullableFilter;
};
