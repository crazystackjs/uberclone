import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type NotificationCreateInput = {
  customer: CustomerWhereUniqueInput;
  message: string;
  read: boolean;
};
