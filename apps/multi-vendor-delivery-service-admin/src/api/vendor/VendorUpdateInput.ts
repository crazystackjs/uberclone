import { OrderUpdateManyWithoutVendorsInput } from "./OrderUpdateManyWithoutVendorsInput";

export type VendorUpdateInput = {
  address?: string | null;
  email?: string | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutVendorsInput;
  phone?: string | null;
};
