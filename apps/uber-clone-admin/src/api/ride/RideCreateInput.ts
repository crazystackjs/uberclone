import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { RiderWhereUniqueInput } from "../rider/RiderWhereUniqueInput";

export type RideCreateInput = {
  driver?: DriverWhereUniqueInput | null;
  endLocation?: InputJsonValue;
  rider?: RiderWhereUniqueInput | null;
  startLocation?: InputJsonValue;
  status?: "Option1" | null;
};
