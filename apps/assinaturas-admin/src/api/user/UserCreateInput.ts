import { SubscriptionCreateNestedManyWithoutUsersInput } from "./SubscriptionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  name?: string | null;
  password?: string | null;
  subscriptions?: SubscriptionCreateNestedManyWithoutUsersInput;
};
