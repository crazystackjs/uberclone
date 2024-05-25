import { InputJsonValue } from "../../types";
import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { RiderWhereUniqueInput } from "../rider/RiderWhereUniqueInput";

export type RideUpdateInput = {
  accepted?: boolean | null;
  attemptedDrivers?: InputJsonValue;
  baseFare?: number | null;
  completedAt?: Date | null;
  creditCardVerified?: boolean | null;
  currentLocation?: InputJsonValue;
  demandMultiplier?: number | null;
  driver?: DriverWhereUniqueInput | null;
  dropoffLocation?: string | null;
  endTime?: Date | null;
  fare?: number | null;
  heatMapZone?: string | null;
  paymentDetails?: InputJsonValue;
  paymentStatus?: "Option1" | null;
  perKmRate?: number | null;
  pickupLocation?: string | null;
  pricingType?: "Option1" | null;
  radius?: number | null;
  requestedAt?: Date | null;
  rider?: RiderWhereUniqueInput | null;
  serviceFee?: number | null;
  startTime?: Date | null;
  status?: string | null;
};
