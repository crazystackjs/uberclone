import { InputJsonValue } from "../../types";
import { RatingCreateNestedManyWithoutUsersInput } from "./RatingCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  password?: string | null;
  profilePicture?: InputJsonValue;
  ratings?: RatingCreateNestedManyWithoutUsersInput;
  username?: string | null;
};
