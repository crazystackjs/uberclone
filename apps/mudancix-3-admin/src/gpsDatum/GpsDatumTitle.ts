import { GpsDatum as TGpsDatum } from "../api/gpsDatum/GpsDatum";

export const GPSDATUM_TITLE_FIELD = "id";

export const GpsDatumTitle = (record: TGpsDatum): string => {
  return record.id?.toString() || String(record.id);
};
