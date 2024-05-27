import { User } from "../user/User";

export type Subscription = {
  createdAt: Date;
  endDate: Date | null;
  id: string;
  plan?: "Option1" | null;
  startDate: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
