import { Subscription } from "../subscription/Subscription";

export type User = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  password: string | null;
  subscriptions?: Array<Subscription>;
  updatedAt: Date;
};
