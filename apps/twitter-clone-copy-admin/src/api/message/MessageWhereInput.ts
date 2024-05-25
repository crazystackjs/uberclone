import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MessageWhereInput = {
  id?: StringFilter;
  recipientUserId?: StringNullableFilter;
  senderUserId?: StringNullableFilter;
  text?: StringNullableFilter;
};
