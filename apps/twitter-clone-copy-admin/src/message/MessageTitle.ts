import { Message as TMessage } from "../api/message/Message";

export const MESSAGE_TITLE_FIELD = "recipientUserId";

export const MessageTitle = (record: TMessage): string => {
  return record.recipientUserId?.toString() || String(record.id);
};
