import { JsonValue } from "type-fest";
import { Rating } from "../rating/Rating";

export type User = {
  createdAt: Date;
  email: string | null;
  id: string;
  password: string | null;
  profilePicture: JsonValue;
  ratings?: Array<Rating>;
  updatedAt: Date;
  username: string | null;
};
