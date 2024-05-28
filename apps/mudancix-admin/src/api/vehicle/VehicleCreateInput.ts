import { MoveCreateNestedManyWithoutVehiclesInput } from "./MoveCreateNestedManyWithoutVehiclesInput";

export type VehicleCreateInput = {
  capacityM3: number;
  licensePlate: string;
  make: string;
  model: string;
  moves?: MoveCreateNestedManyWithoutVehiclesInput;
};
