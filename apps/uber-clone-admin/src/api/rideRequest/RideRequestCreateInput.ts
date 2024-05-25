import { InputJsonValue } from "../../types";
import { RiderWhereUniqueInput } from "../rider/RiderWhereUniqueInput";

export type RideRequestCreateInput = {
  destinationLocation?: InputJsonValue;
  pickupLocation?: InputJsonValue;
  rider?: RiderWhereUniqueInput | null;
  status?: "Option1" | null;
};
