import { RideRequest } from "../rideRequest/RideRequest";
import { Ride } from "../ride/Ride";

export type Rider = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phoneNumber: string | null;
  rideRequests?: Array<RideRequest>;
  rides?: Array<Ride>;
  updatedAt: Date;
};
