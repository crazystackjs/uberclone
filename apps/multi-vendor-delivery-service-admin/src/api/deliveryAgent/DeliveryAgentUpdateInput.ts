import { OrderUpdateManyWithoutDeliveryAgentsInput } from "./OrderUpdateManyWithoutDeliveryAgentsInput";

export type DeliveryAgentUpdateInput = {
  email?: string | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutDeliveryAgentsInput;
  phone?: string | null;
  status?: "Option1" | null;
};
