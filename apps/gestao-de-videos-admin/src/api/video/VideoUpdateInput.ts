import { SessionUpdateManyWithoutVideosInput } from "./SessionUpdateManyWithoutVideosInput";

export type VideoUpdateInput = {
  description?: string | null;
  publishedAt?: Date | null;
  sessions?: SessionUpdateManyWithoutVideosInput;
  title?: string | null;
  url?: string | null;
};
