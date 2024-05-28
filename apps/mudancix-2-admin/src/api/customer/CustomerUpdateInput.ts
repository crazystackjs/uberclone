import { MoveUpdateManyWithoutCustomersInput } from "./MoveUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  address?: string;
  email?: string;
  moves?: MoveUpdateManyWithoutCustomersInput;
  name?: string;
  phoneNumber?: string;
};
