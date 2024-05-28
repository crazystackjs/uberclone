import { Driver } from "../driver/Driver";

export type Vehicle = {
  createdAt: Date;
  driver?: Array<Driver>;
  id: string;
  make: string;
  model: string;
  plateNumber: string;
  updatedAt: Date;
};
