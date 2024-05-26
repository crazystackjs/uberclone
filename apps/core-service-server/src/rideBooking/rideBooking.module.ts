import { Module } from "@nestjs/common";
import { RideBookingModuleBase } from "./base/rideBooking.module.base";
import { RideBookingService } from "./rideBooking.service";
import { RideBookingController } from "./rideBooking.controller";
import { RideBookingResolver } from "./rideBooking.resolver";

@Module({
  imports: [RideBookingModuleBase],
  controllers: [RideBookingController],
  providers: [RideBookingService, RideBookingResolver],
  exports: [RideBookingService],
})
export class RideBookingModule {}
