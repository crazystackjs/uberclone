import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type HeatMapZoneWhereInput = {
  coordinates?: JsonFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  zoneName?: StringNullableFilter;
};
