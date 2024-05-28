import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type DiscountUpdateInput = {
  customer?: CustomerWhereUniqueInput;
  description?: string;
  percentage?: number;
  validUntil?: Date;
};
