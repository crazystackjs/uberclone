import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { DriverUpdateManyWithoutVehiclesInput } from "./DriverUpdateManyWithoutVehiclesInput";

export type VehicleUpdateInput = {
  driver?: DriverWhereUniqueInput | null;
  drivers?: DriverUpdateManyWithoutVehiclesInput;
  licensePlate?: string | null;
  make?: string | null;
  model?: string | null;
};
