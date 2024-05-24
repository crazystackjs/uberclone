import { Vehicle as TVehicle } from "../api/vehicle/Vehicle";

export const VEHICLE_TITLE_FIELD = "licensePlate";

export const VehicleTitle = (record: TVehicle): string => {
  return record.licensePlate?.toString() || String(record.id);
};
