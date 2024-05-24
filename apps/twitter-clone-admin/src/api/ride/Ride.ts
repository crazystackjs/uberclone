import { Driver } from "../driver/Driver";
import { Rider } from "../rider/Rider";

export type Ride = {
  createdAt: Date;
  driver?: Driver | null;
  dropoffLocation: string | null;
  endTime: Date | null;
  fare: number | null;
  id: string;
  pickupLocation: string | null;
  rider?: Rider | null;
  startTime: Date | null;
  status: string | null;
  updatedAt: Date;
};
