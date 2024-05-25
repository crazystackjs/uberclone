import { Ride as TRide } from "../api/ride/Ride";

export const RIDE_TITLE_FIELD = "id";

export const RideTitle = (record: TRide): string => {
  return record.id?.toString() || String(record.id);
};
