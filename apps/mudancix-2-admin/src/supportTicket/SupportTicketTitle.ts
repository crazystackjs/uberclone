import { SupportTicket as TSupportTicket } from "../api/supportTicket/SupportTicket";

export const SUPPORTTICKET_TITLE_FIELD = "issue";

export const SupportTicketTitle = (record: TSupportTicket): string => {
  return record.issue?.toString() || String(record.id);
};
