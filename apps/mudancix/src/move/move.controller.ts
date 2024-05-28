import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MoveService } from "./move.service";
import { MoveControllerBase } from "./base/move.controller.base";

@swagger.ApiTags("moves")
@common.Controller("moves")
export class MoveController extends MoveControllerBase {
  constructor(protected readonly service: MoveService) {
    super(service);
  }
}
