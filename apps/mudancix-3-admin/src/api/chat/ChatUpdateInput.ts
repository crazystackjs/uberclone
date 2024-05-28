import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { MessageUpdateManyWithoutChatsInput } from "./MessageUpdateManyWithoutChatsInput";

export type ChatUpdateInput = {
  customerMessenger?: CustomerWhereUniqueInput;
  driverMessenger?: DriverWhereUniqueInput;
  messages?: MessageUpdateManyWithoutChatsInput;
};
