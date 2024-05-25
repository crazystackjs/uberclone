import { Ride } from "../ride/Ride";

export type Rider = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phoneNumber: string | null;
  rides?: Array<Ride>;
  updatedAt: Date;
};
