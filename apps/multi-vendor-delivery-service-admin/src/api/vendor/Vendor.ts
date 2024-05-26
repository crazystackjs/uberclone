import { Order } from "../order/Order";

export type Vendor = {
  address: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  orders?: Array<Order>;
  phone: string | null;
  updatedAt: Date;
};
