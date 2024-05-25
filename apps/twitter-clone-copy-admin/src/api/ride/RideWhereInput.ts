import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type RideWhereInput = {
  driverId?: StringNullableFilter;
  dropoffLocation?: StringNullableFilter;
  id?: StringFilter;
  pickupLocation?: StringNullableFilter;
  riderId?: StringNullableFilter;
};
