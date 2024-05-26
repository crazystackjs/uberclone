import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DeliveryAgentWhereUniqueInput } from "../deliveryAgent/DeliveryAgentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { VendorWhereUniqueInput } from "../vendor/VendorWhereUniqueInput";

export type OrderWhereInput = {
  customer?: CustomerWhereUniqueInput;
  deliveryAgent?: DeliveryAgentWhereUniqueInput;
  id?: StringFilter;
  orderDate?: DateTimeNullableFilter;
  orderNumber?: StringNullableFilter;
  status?: "Option1";
  totalAmount?: FloatNullableFilter;
  vendor?: VendorWhereUniqueInput;
};
