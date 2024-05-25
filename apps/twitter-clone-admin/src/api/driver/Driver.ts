import { Ride } from "../ride/Ride";
import { Vehicle } from "../vehicle/Vehicle";

export type Driver = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phoneNumber: string | null;
  rides?: Array<Ride>;
  updatedAt: Date;
  vehicle?: Vehicle | null;
  vehicles?: Array<Vehicle>;
};
