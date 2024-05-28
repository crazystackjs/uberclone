import { MoveEmployee as TMoveEmployee } from "../api/moveEmployee/MoveEmployee";

export const MOVEEMPLOYEE_TITLE_FIELD = "id";

export const MoveEmployeeTitle = (record: TMoveEmployee): string => {
  return record.id?.toString() || String(record.id);
};
