import { Rating } from "../rating/Rating";

export type Tweet = {
  createdAt: Date;
  id: string;
  ratings?: Array<Rating>;
  text: string | null;
  updatedAt: Date;
  userId: string | null;
};
