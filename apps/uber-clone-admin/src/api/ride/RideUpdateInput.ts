import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { RiderWhereUniqueInput } from "../rider/RiderWhereUniqueInput";

export type RideUpdateInput = {
  driver?: DriverWhereUniqueInput | null;
  endLocation?: InputJsonValue;
  rider?: RiderWhereUniqueInput | null;
  startLocation?: InputJsonValue;
  status?: "Option1" | null;
};
