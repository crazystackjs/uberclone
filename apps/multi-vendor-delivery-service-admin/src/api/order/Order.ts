import { Customer } from "../customer/Customer";
import { DeliveryAgent } from "../deliveryAgent/DeliveryAgent";
import { Vendor } from "../vendor/Vendor";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  deliveryAgent?: DeliveryAgent | null;
  id: string;
  orderDate: Date | null;
  orderNumber: string | null;
  status?: "Option1" | null;
  totalAmount: number | null;
  updatedAt: Date;
  vendor?: Vendor | null;
};
