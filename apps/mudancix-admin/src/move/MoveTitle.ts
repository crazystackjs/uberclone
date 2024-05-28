import { Move as TMove } from "../api/move/Move";

export const MOVE_TITLE_FIELD = "status";

export const MoveTitle = (record: TMove): string => {
  return record.status?.toString() || String(record.id);
};
