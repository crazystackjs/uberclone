import { InputJsonValue } from "../../types";
import { RideUpdateManyWithoutDriversInput } from "./RideUpdateManyWithoutDriversInput";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";
import { VehicleUpdateManyWithoutDriversInput } from "./VehicleUpdateManyWithoutDriversInput";

export type DriverUpdateInput = {
  currentLocation?: InputJsonValue;
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  rides?: RideUpdateManyWithoutDriversInput;
  vehicle?: VehicleWhereUniqueInput | null;
  vehicles?: VehicleUpdateManyWithoutDriversInput;
};
