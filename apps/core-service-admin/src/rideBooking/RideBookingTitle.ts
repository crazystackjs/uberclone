import { RideBooking as TRideBooking } from "../api/rideBooking/RideBooking";

export const RIDEBOOKING_TITLE_FIELD = "id";

export const RideBookingTitle = (record: TRideBooking): string => {
  return record.id?.toString() || String(record.id);
};
