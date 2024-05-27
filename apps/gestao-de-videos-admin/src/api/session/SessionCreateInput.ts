import { VideoWhereUniqueInput } from "../video/VideoWhereUniqueInput";

export type SessionCreateInput = {
  description?: string | null;
  title?: string | null;
  video?: VideoWhereUniqueInput | null;
};
