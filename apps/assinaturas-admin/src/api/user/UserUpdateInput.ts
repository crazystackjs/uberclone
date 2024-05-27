import { SubscriptionUpdateManyWithoutUsersInput } from "./SubscriptionUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  name?: string | null;
  password?: string | null;
  subscriptions?: SubscriptionUpdateManyWithoutUsersInput;
};
