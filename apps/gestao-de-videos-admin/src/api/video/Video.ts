import { Session } from "../session/Session";

export type Video = {
  createdAt: Date;
  description: string | null;
  id: string;
  publishedAt: Date | null;
  sessions?: Array<Session>;
  title: string | null;
  updatedAt: Date;
  url: string | null;
};
