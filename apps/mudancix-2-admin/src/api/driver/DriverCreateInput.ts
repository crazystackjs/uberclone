import { MoveCreateNestedManyWithoutDriversInput } from "./MoveCreateNestedManyWithoutDriversInput";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type DriverCreateInput = {
  email: string;
  isAvailable: boolean;
  moves?: MoveCreateNestedManyWithoutDriversInput;
  name: string;
  phoneNumber: string;
  totalEarnings: number;
  vehicle: VehicleWhereUniqueInput;
};
