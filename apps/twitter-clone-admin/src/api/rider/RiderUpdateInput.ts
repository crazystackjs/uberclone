import { RideUpdateManyWithoutRidersInput } from "./RideUpdateManyWithoutRidersInput";

export type RiderUpdateInput = {
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  rides?: RideUpdateManyWithoutRidersInput;
};
