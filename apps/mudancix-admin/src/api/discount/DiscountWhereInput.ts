import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type DiscountWhereInput = {
  customer?: CustomerWhereUniqueInput;
  description?: StringFilter;
  id?: IntFilter;
  percentage?: FloatFilter;
  validUntil?: DateTimeFilter;
};
