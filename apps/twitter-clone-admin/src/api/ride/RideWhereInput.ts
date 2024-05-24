import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RiderWhereUniqueInput } from "../rider/RiderWhereUniqueInput";

export type RideWhereInput = {
  driver?: DriverWhereUniqueInput;
  dropoffLocation?: StringNullableFilter;
  endTime?: DateTimeNullableFilter;
  fare?: FloatNullableFilter;
  id?: StringFilter;
  pickupLocation?: StringNullableFilter;
  rider?: RiderWhereUniqueInput;
  startTime?: DateTimeNullableFilter;
  status?: StringNullableFilter;
};
