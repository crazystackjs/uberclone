import { Order } from "../order/Order";

export type DeliveryAgent = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  orders?: Array<Order>;
  phone: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
