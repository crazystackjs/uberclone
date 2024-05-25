import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RideRequestListRelationFilter } from "../rideRequest/RideRequestListRelationFilter";
import { RideListRelationFilter } from "../ride/RideListRelationFilter";

export type RiderWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  rideRequests?: RideRequestListRelationFilter;
  rides?: RideListRelationFilter;
};
