import { Session as TSession } from "../api/session/Session";

export const SESSION_TITLE_FIELD = "title";

export const SessionTitle = (record: TSession): string => {
  return record.title?.toString() || String(record.id);
};
