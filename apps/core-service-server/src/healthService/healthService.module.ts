import { Module } from "@nestjs/common";
import { HealthServiceModuleBase } from "./base/healthService.module.base";
import { HealthServiceService } from "./healthService.service";
import { HealthServiceController } from "./healthService.controller";
import { HealthServiceResolver } from "./healthService.resolver";

@Module({
  imports: [HealthServiceModuleBase],
  controllers: [HealthServiceController],
  providers: [HealthServiceService, HealthServiceResolver],
  exports: [HealthServiceService],
})
export class HealthServiceModule {}
