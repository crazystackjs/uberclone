import { Driver as TDriver } from "../api/driver/Driver";

export const DRIVER_TITLE_FIELD = "firstName";

export const DriverTitle = (record: TDriver): string => {
  return record.firstName?.toString() || String(record.id);
};
