import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type DiscountCreateInput = {
  customer: CustomerWhereUniqueInput;
  description: string;
  percentage: number;
  validUntil: Date;
};
