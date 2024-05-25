import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { RiderWhereUniqueInput } from "../rider/RiderWhereUniqueInput";

export type RideRequestWhereInput = {
  destinationLocation?: JsonFilter;
  id?: StringFilter;
  pickupLocation?: JsonFilter;
  rider?: RiderWhereUniqueInput;
  status?: "Option1";
};
