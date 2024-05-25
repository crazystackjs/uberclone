import { InputJsonValue } from "../../types";
import { RideCreateNestedManyWithoutDriversInput } from "./RideCreateNestedManyWithoutDriversInput";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";
import { VehicleCreateNestedManyWithoutDriversInput } from "./VehicleCreateNestedManyWithoutDriversInput";

export type DriverCreateInput = {
  currentLocation?: InputJsonValue;
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  rides?: RideCreateNestedManyWithoutDriversInput;
  vehicle?: VehicleWhereUniqueInput | null;
  vehicles?: VehicleCreateNestedManyWithoutDriversInput;
};
