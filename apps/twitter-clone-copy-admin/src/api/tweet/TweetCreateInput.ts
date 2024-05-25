import { RatingCreateNestedManyWithoutTweetsInput } from "./RatingCreateNestedManyWithoutTweetsInput";

export type TweetCreateInput = {
  ratings?: RatingCreateNestedManyWithoutTweetsInput;
  text?: string | null;
  userId?: string | null;
};
