import { Customer } from "../customer/Customer";
import { Driver } from "../driver/Driver";
import { Message } from "../message/Message";

export type Chat = {
  createdAt: Date;
  customerMessenger?: Customer;
  driverMessenger?: Driver;
  id: string;
  messages?: Array<Message>;
  updatedAt: Date;
};
