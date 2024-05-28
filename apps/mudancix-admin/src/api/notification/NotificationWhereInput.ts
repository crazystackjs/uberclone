import { DateTimeFilter } from "../../util/DateTimeFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";

export type NotificationWhereInput = {
  createdAt?: DateTimeFilter;
  customer?: CustomerWhereUniqueInput;
  id?: IntFilter;
  message?: StringFilter;
  read?: BooleanFilter;
};
