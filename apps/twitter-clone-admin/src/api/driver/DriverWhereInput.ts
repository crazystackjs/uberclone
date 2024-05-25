import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RideListRelationFilter } from "../ride/RideListRelationFilter";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";
import { VehicleListRelationFilter } from "../vehicle/VehicleListRelationFilter";

export type DriverWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  rides?: RideListRelationFilter;
  vehicle?: VehicleWhereUniqueInput;
  vehicles?: VehicleListRelationFilter;
};
