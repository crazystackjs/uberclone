import { MoveUpdateManyWithoutVehiclesInput } from "./MoveUpdateManyWithoutVehiclesInput";

export type VehicleUpdateInput = {
  capacityM3?: number;
  licensePlate?: string;
  make?: string;
  model?: string;
  moves?: MoveUpdateManyWithoutVehiclesInput;
};
