import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { DriverCreateNestedManyWithoutVehiclesInput } from "./DriverCreateNestedManyWithoutVehiclesInput";

export type VehicleCreateInput = {
  driver?: DriverWhereUniqueInput | null;
  drivers?: DriverCreateNestedManyWithoutVehiclesInput;
  licensePlate?: string | null;
  make?: string | null;
  model?: string | null;
};
