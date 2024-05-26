import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DeliveryAgentWhereUniqueInput } from "../deliveryAgent/DeliveryAgentWhereUniqueInput";
import { VendorWhereUniqueInput } from "../vendor/VendorWhereUniqueInput";

export type OrderCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  deliveryAgent?: DeliveryAgentWhereUniqueInput | null;
  orderDate?: Date | null;
  orderNumber?: string | null;
  status?: "Option1" | null;
  totalAmount?: number | null;
  vendor?: VendorWhereUniqueInput | null;
};
