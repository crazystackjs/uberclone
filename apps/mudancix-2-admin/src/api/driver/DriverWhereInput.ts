import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { MoveListRelationFilter } from "../move/MoveListRelationFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type DriverWhereInput = {
  createdAt?: DateTimeFilter;
  email?: StringFilter;
  id?: StringFilter;
  isAvailable?: BooleanFilter;
  moves?: MoveListRelationFilter;
  name?: StringFilter;
  phoneNumber?: StringFilter;
  totalEarnings?: FloatFilter;
  updatedAt?: DateTimeFilter;
  vehicle?: VehicleWhereUniqueInput;
};
