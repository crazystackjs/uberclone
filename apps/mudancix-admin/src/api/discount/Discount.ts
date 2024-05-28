import { Customer } from "../customer/Customer";

export type Discount = {
  customer?: Customer;
  description: string;
  id: number;
  percentage: number;
  validUntil: Date;
};
