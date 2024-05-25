import { RideCreateNestedManyWithoutRidersInput } from "./RideCreateNestedManyWithoutRidersInput";

export type RiderCreateInput = {
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  rides?: RideCreateNestedManyWithoutRidersInput;
};
