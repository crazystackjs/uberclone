import { ChatCreateNestedManyWithoutCustomersInput } from "./ChatCreateNestedManyWithoutCustomersInput";
import { MoveCreateNestedManyWithoutCustomersInput } from "./MoveCreateNestedManyWithoutCustomersInput";
import { PaymentCreateNestedManyWithoutCustomersInput } from "./PaymentCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  address: string;
  chats?: ChatCreateNestedManyWithoutCustomersInput;
  email: string;
  moves?: MoveCreateNestedManyWithoutCustomersInput;
  name: string;
  payments?: PaymentCreateNestedManyWithoutCustomersInput;
  phoneNumber: string;
};
