import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HealthServiceService } from "./healthService.service";
import { HealthServiceControllerBase } from "./base/healthService.controller.base";

@swagger.ApiTags("healthServices")
@common.Controller("healthServices")
export class HealthServiceController extends HealthServiceControllerBase {
  constructor(protected readonly service: HealthServiceService) {
    super(service);
  }
}
