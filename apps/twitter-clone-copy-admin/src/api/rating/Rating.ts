import { Tweet } from "../tweet/Tweet";
import { User } from "../user/User";

export type Rating = {
  comments: string | null;
  createdAt: Date;
  id: string;
  ratingScore: number | null;
  ratingTweet: string | null;
  ratingUser: string | null;
  ratingValue: number | null;
  relatedTweet: string | null;
  relatedUser: string | null;
  review: string | null;
  reviewText: string | null;
  tweet?: Tweet | null;
  updatedAt: Date;
  user?: User | null;
  value: number | null;
};
