import { RideRequest as TRideRequest } from "../api/rideRequest/RideRequest";

export const RIDEREQUEST_TITLE_FIELD = "id";

export const RideRequestTitle = (record: TRideRequest): string => {
  return record.id?.toString() || String(record.id);
};
