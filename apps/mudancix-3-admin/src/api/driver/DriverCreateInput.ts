import { ChatCreateNestedManyWithoutDriversInput } from "./ChatCreateNestedManyWithoutDriversInput";
import { MoveCreateNestedManyWithoutDriversInput } from "./MoveCreateNestedManyWithoutDriversInput";
import { PaymentCreateNestedManyWithoutDriversInput } from "./PaymentCreateNestedManyWithoutDriversInput";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type DriverCreateInput = {
  chats?: ChatCreateNestedManyWithoutDriversInput;
  email: string;
  isAvailable: boolean;
  moves?: MoveCreateNestedManyWithoutDriversInput;
  name: string;
  payments?: PaymentCreateNestedManyWithoutDriversInput;
  phoneNumber: string;
  totalEarnings: number;
  vehicle: VehicleWhereUniqueInput;
};
