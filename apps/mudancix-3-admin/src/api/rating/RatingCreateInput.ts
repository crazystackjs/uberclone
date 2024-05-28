import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RatingCreateInput = {
  comment?: string | null;
  ratee: UserWhereUniqueInput;
  rater: UserWhereUniqueInput;
  rating: number;
};
