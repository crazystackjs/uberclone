import { DriverUpdateManyWithoutVehiclesInput } from "./DriverUpdateManyWithoutVehiclesInput";

export type VehicleUpdateInput = {
  driver?: DriverUpdateManyWithoutVehiclesInput;
  make?: string;
  model?: string;
  plateNumber?: string;
};
