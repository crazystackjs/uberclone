import { Module } from "@nestjs/common";
import { RidePricingService } from "./ridepricing.service";
import { RidePricingController } from "./ridepricing.controller";
import { RidePricingResolver } from "./ridepricing.resolver";

@Module({
  controllers: [RidePricingController],
  providers: [RidePricingService, RidePricingResolver],
  exports: [RidePricingService],
})
export class RidePricingModule {}
