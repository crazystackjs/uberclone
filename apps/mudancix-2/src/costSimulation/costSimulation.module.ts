import { Module } from "@nestjs/common";
import { CostSimulationModuleBase } from "./base/costSimulation.module.base";
import { CostSimulationService } from "./costSimulation.service";
import { CostSimulationController } from "./costSimulation.controller";
import { CostSimulationResolver } from "./costSimulation.resolver";

@Module({
  imports: [CostSimulationModuleBase],
  controllers: [CostSimulationController],
  providers: [CostSimulationService, CostSimulationResolver],
  exports: [CostSimulationService],
})
export class CostSimulationModule {}
