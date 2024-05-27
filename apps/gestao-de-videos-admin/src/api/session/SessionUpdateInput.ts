import { VideoWhereUniqueInput } from "../video/VideoWhereUniqueInput";

export type SessionUpdateInput = {
  description?: string | null;
  title?: string | null;
  video?: VideoWhereUniqueInput | null;
};
