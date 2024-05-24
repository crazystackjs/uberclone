import { Ride as TRide } from "../api/ride/Ride";

export const RIDE_TITLE_FIELD = "dropoffLocation";

export const RideTitle = (record: TRide): string => {
  return record.dropoffLocation?.toString() || String(record.id);
};
