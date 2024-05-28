import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MoveEmployeeService } from "./moveEmployee.service";
import { MoveEmployeeControllerBase } from "./base/moveEmployee.controller.base";

@swagger.ApiTags("moveEmployees")
@common.Controller("moveEmployees")
export class MoveEmployeeController extends MoveEmployeeControllerBase {
  constructor(protected readonly service: MoveEmployeeService) {
    super(service);
  }
}
