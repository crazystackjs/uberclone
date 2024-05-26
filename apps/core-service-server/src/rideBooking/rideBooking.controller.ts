import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RideBookingService } from "./rideBooking.service";
import { RideBookingControllerBase } from "./base/rideBooking.controller.base";

@swagger.ApiTags("rideBookings")
@common.Controller("rideBookings")
export class RideBookingController extends RideBookingControllerBase {
  constructor(protected readonly service: RideBookingService) {
    super(service);
  }
}
