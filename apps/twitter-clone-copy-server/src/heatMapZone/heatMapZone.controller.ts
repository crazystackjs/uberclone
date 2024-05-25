import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HeatMapZoneService } from "./heatMapZone.service";
import { HeatMapZoneControllerBase } from "./base/heatMapZone.controller.base";

@swagger.ApiTags("heatMapZones")
@common.Controller("heatMapZones")
export class HeatMapZoneController extends HeatMapZoneControllerBase {
  constructor(protected readonly service: HeatMapZoneService) {
    super(service);
  }
}
