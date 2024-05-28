import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { MessageCreateNestedManyWithoutChatsInput } from "./MessageCreateNestedManyWithoutChatsInput";

export type ChatCreateInput = {
  customerMessenger: CustomerWhereUniqueInput;
  driverMessenger: DriverWhereUniqueInput;
  messages?: MessageCreateNestedManyWithoutChatsInput;
};
