import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GpsDatumService } from "./gpsDatum.service";
import { GpsDatumControllerBase } from "./base/gpsDatum.controller.base";

@swagger.ApiTags("gpsData")
@common.Controller("gpsData")
export class GpsDatumController extends GpsDatumControllerBase {
  constructor(protected readonly service: GpsDatumService) {
    super(service);
  }
}
