import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";

export type VideoWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  publishedAt?: DateTimeNullableFilter;
  sessions?: SessionListRelationFilter;
  title?: StringNullableFilter;
  url?: StringNullableFilter;
};
