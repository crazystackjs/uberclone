import { Rider as TRider } from "../api/rider/Rider";

export const RIDER_TITLE_FIELD = "firstName";

export const RiderTitle = (record: TRider): string => {
  return record.firstName?.toString() || String(record.id);
};
