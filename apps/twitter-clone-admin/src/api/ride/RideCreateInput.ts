import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { RiderWhereUniqueInput } from "../rider/RiderWhereUniqueInput";

export type RideCreateInput = {
  driver?: DriverWhereUniqueInput | null;
  dropoffLocation?: string | null;
  endTime?: Date | null;
  fare?: number | null;
  pickupLocation?: string | null;
  rider?: RiderWhereUniqueInput | null;
  startTime?: Date | null;
  status?: string | null;
};
