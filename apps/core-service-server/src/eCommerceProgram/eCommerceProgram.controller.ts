import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ECommerceProgramService } from "./eCommerceProgram.service";
import { ECommerceProgramControllerBase } from "./base/eCommerceProgram.controller.base";

@swagger.ApiTags("eCommercePrograms")
@common.Controller("eCommercePrograms")
export class ECommerceProgramController extends ECommerceProgramControllerBase {
  constructor(protected readonly service: ECommerceProgramService) {
    super(service);
  }
}
