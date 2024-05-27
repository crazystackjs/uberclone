import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubscriptionWhereInput = {
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  plan?: "Option1";
  startDate?: DateTimeNullableFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
