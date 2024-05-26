import { OrderCreateNestedManyWithoutVendorsInput } from "./OrderCreateNestedManyWithoutVendorsInput";

export type VendorCreateInput = {
  address?: string | null;
  email?: string | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutVendorsInput;
  phone?: string | null;
};
