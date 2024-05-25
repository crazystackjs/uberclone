import { Module } from "@nestjs/common";
import { RideModuleBase } from "./base/ride.module.base";
import { RideService } from "./ride.service";
import { RideController } from "./ride.controller";
import { RideResolver } from "./ride.resolver";

@Module({
  imports: [RideModuleBase],
  controllers: [RideController],
  providers: [RideService, RideResolver],
  exports: [RideService],
})
export class RideModule {}
