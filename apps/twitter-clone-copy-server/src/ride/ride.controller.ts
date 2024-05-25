import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RideService } from "./ride.service";
import { RideControllerBase } from "./base/ride.controller.base";

@swagger.ApiTags("rides")
@common.Controller("rides")
export class RideController extends RideControllerBase {
  constructor(protected readonly service: RideService) {
    super(service);
  }
}
