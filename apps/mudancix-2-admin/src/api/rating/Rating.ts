import { User } from "../user/User";

export type Rating = {
  comment: string | null;
  createdAt: Date;
  id: string;
  ratee?: User;
  rater?: User;
  rating: number;
  updatedAt: Date;
};
