import { ChatUpdateManyWithoutCustomersInput } from "./ChatUpdateManyWithoutCustomersInput";
import { MoveUpdateManyWithoutCustomersInput } from "./MoveUpdateManyWithoutCustomersInput";
import { PaymentUpdateManyWithoutCustomersInput } from "./PaymentUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  address?: string;
  chats?: ChatUpdateManyWithoutCustomersInput;
  email?: string;
  moves?: MoveUpdateManyWithoutCustomersInput;
  name?: string;
  payments?: PaymentUpdateManyWithoutCustomersInput;
  phoneNumber?: string;
};
