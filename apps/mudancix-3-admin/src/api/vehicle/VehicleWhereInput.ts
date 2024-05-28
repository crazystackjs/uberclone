import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DriverListRelationFilter } from "../driver/DriverListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type VehicleWhereInput = {
  createdAt?: DateTimeFilter;
  driver?: DriverListRelationFilter;
  id?: StringFilter;
  make?: StringFilter;
  model?: StringFilter;
  plateNumber?: StringFilter;
  updatedAt?: DateTimeFilter;
};
