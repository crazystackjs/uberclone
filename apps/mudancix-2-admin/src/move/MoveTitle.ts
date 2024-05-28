import { Move as TMove } from "../api/move/Move";

export const MOVE_TITLE_FIELD = "deliveryLocation";

export const MoveTitle = (record: TMove): string => {
  return record.deliveryLocation?.toString() || String(record.id);
};
