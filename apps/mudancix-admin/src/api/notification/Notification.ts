import { Customer } from "../customer/Customer";

export type Notification = {
  createdAt: Date;
  customer?: Customer;
  id: number;
  message: string;
  read: boolean;
};
