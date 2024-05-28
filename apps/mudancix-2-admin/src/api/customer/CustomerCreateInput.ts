import { MoveCreateNestedManyWithoutCustomersInput } from "./MoveCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  address: string;
  email: string;
  moves?: MoveCreateNestedManyWithoutCustomersInput;
  name: string;
  phoneNumber: string;
};
