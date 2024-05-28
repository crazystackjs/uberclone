import { DriverCreateNestedManyWithoutVehiclesInput } from "./DriverCreateNestedManyWithoutVehiclesInput";

export type VehicleCreateInput = {
  driver?: DriverCreateNestedManyWithoutVehiclesInput;
  make: string;
  model: string;
  plateNumber: string;
};
