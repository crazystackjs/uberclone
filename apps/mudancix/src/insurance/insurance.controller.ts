import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InsuranceService } from "./insurance.service";
import { InsuranceControllerBase } from "./base/insurance.controller.base";

@swagger.ApiTags("insurances")
@common.Controller("insurances")
export class InsuranceController extends InsuranceControllerBase {
  constructor(protected readonly service: InsuranceService) {
    super(service);
  }
}
