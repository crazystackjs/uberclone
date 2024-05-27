import { SessionCreateNestedManyWithoutVideosInput } from "./SessionCreateNestedManyWithoutVideosInput";

export type VideoCreateInput = {
  description?: string | null;
  publishedAt?: Date | null;
  sessions?: SessionCreateNestedManyWithoutVideosInput;
  title?: string | null;
  url?: string | null;
};
