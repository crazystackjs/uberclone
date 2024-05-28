import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RatingUpdateInput = {
  comment?: string | null;
  ratee?: UserWhereUniqueInput;
  rater?: UserWhereUniqueInput;
  rating?: number;
};
