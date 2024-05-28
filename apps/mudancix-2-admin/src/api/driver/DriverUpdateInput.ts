import { MoveUpdateManyWithoutDriversInput } from "./MoveUpdateManyWithoutDriversInput";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type DriverUpdateInput = {
  email?: string;
  isAvailable?: boolean;
  moves?: MoveUpdateManyWithoutDriversInput;
  name?: string;
  phoneNumber?: string;
  totalEarnings?: number;
  vehicle?: VehicleWhereUniqueInput;
};
