import { ChatUpdateManyWithoutDriversInput } from "./ChatUpdateManyWithoutDriversInput";
import { MoveUpdateManyWithoutDriversInput } from "./MoveUpdateManyWithoutDriversInput";
import { PaymentUpdateManyWithoutDriversInput } from "./PaymentUpdateManyWithoutDriversInput";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type DriverUpdateInput = {
  chats?: ChatUpdateManyWithoutDriversInput;
  email?: string;
  isAvailable?: boolean;
  moves?: MoveUpdateManyWithoutDriversInput;
  name?: string;
  payments?: PaymentUpdateManyWithoutDriversInput;
  phoneNumber?: string;
  totalEarnings?: number;
  vehicle?: VehicleWhereUniqueInput;
};
