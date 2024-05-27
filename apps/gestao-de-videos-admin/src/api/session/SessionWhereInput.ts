import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { VideoWhereUniqueInput } from "../video/VideoWhereUniqueInput";

export type SessionWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
  video?: VideoWhereUniqueInput;
};
