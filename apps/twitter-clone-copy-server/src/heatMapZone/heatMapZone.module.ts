import { Module } from "@nestjs/common";
import { HeatMapZoneModuleBase } from "./base/heatMapZone.module.base";
import { HeatMapZoneService } from "./heatMapZone.service";
import { HeatMapZoneController } from "./heatMapZone.controller";
import { HeatMapZoneResolver } from "./heatMapZone.resolver";

@Module({
  imports: [HeatMapZoneModuleBase],
  controllers: [HeatMapZoneController],
  providers: [HeatMapZoneService, HeatMapZoneResolver],
  exports: [HeatMapZoneService],
})
export class HeatMapZoneModule {}
