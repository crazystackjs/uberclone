import { RideRequestUpdateManyWithoutRidersInput } from "./RideRequestUpdateManyWithoutRidersInput";
import { RideUpdateManyWithoutRidersInput } from "./RideUpdateManyWithoutRidersInput";

export type RiderUpdateInput = {
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  rideRequests?: RideRequestUpdateManyWithoutRidersInput;
  rides?: RideUpdateManyWithoutRidersInput;
};
