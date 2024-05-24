import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { DriverListRelationFilter } from "../driver/DriverListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type VehicleWhereInput = {
  driver?: DriverWhereUniqueInput;
  drivers?: DriverListRelationFilter;
  id?: StringFilter;
  licensePlate?: StringNullableFilter;
  make?: StringNullableFilter;
  model?: StringNullableFilter;
};
