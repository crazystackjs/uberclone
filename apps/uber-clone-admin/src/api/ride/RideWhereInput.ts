import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { RiderWhereUniqueInput } from "../rider/RiderWhereUniqueInput";

export type RideWhereInput = {
  driver?: DriverWhereUniqueInput;
  endLocation?: JsonFilter;
  id?: StringFilter;
  rider?: RiderWhereUniqueInput;
  startLocation?: JsonFilter;
  status?: "Option1";
};
