import * as graphql from "@nestjs/graphql";
import { RideBookingResolverBase } from "./base/rideBooking.resolver.base";
import { RideBooking } from "./base/RideBooking";
import { RideBookingService } from "./rideBooking.service";

@graphql.Resolver(() => RideBooking)
export class RideBookingResolver extends RideBookingResolverBase {
  constructor(protected readonly service: RideBookingService) {
    super(service);
  }
}
