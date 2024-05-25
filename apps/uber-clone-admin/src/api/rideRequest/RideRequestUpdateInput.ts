import { InputJsonValue } from "../../types";
import { RiderWhereUniqueInput } from "../rider/RiderWhereUniqueInput";

export type RideRequestUpdateInput = {
  destinationLocation?: InputJsonValue;
  pickupLocation?: InputJsonValue;
  rider?: RiderWhereUniqueInput | null;
  status?: "Option1" | null;
};
