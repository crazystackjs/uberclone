import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type NotificationUpdateInput = {
  customer?: CustomerWhereUniqueInput;
  message?: string;
  read?: boolean;
};
