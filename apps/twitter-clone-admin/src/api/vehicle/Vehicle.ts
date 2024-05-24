import { Driver } from "../driver/Driver";

export type Vehicle = {
  createdAt: Date;
  driver?: Driver | null;
  drivers?: Array<Driver>;
  id: string;
  licensePlate: string | null;
  make: string | null;
  model: string | null;
  updatedAt: Date;
};
