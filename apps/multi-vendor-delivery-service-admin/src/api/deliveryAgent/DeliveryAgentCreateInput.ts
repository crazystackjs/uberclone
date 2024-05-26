import { OrderCreateNestedManyWithoutDeliveryAgentsInput } from "./OrderCreateNestedManyWithoutDeliveryAgentsInput";

export type DeliveryAgentCreateInput = {
  email?: string | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutDeliveryAgentsInput;
  phone?: string | null;
  status?: "Option1" | null;
};
