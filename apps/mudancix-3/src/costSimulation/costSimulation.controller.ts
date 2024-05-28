import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CostSimulationService } from "./costSimulation.service";
import { CostSimulationControllerBase } from "./base/costSimulation.controller.base";

@swagger.ApiTags("costSimulations")
@common.Controller("costSimulations")
export class CostSimulationController extends CostSimulationControllerBase {
  constructor(protected readonly service: CostSimulationService) {
    super(service);
  }
}
