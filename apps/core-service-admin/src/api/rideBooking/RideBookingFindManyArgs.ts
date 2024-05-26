import { RideBookingWhereInput } from "./RideBookingWhereInput";
import { RideBookingOrderByInput } from "./RideBookingOrderByInput";

export type RideBookingFindManyArgs = {
  where?: RideBookingWhereInput;
  orderBy?: Array<RideBookingOrderByInput>;
  skip?: number;
  take?: number;
};
