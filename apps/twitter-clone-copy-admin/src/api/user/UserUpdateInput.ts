import { InputJsonValue } from "../../types";
import { RatingUpdateManyWithoutUsersInput } from "./RatingUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  password?: string | null;
  profilePicture?: InputJsonValue;
  ratings?: RatingUpdateManyWithoutUsersInput;
  username?: string | null;
};
