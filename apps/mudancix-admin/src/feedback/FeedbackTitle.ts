import { Feedback as TFeedback } from "../api/feedback/Feedback";

export const FEEDBACK_TITLE_FIELD = "comments";

export const FeedbackTitle = (record: TFeedback): string => {
  return record.comments?.toString() || String(record.id);
};
