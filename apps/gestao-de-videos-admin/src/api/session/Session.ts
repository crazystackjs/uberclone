import { Video } from "../video/Video";

export type Session = {
  createdAt: Date;
  description: string | null;
  id: string;
  title: string | null;
  updatedAt: Date;
  video?: Video | null;
};
