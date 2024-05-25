import { RatingUpdateManyWithoutTweetsInput } from "./RatingUpdateManyWithoutTweetsInput";

export type TweetUpdateInput = {
  ratings?: RatingUpdateManyWithoutTweetsInput;
  text?: string | null;
  userId?: string | null;
};
