import { Ride as TRide } from "../api/ride/Ride";

export const RIDE_TITLE_FIELD = "driverId";

export const RideTitle = (record: TRide): string => {
  return record.driverId?.toString() || String(record.id);
};
