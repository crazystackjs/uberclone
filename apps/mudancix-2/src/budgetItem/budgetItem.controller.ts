import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BudgetItemService } from "./budgetItem.service";
import { BudgetItemControllerBase } from "./base/budgetItem.controller.base";

@swagger.ApiTags("budgetItems")
@common.Controller("budgetItems")
export class BudgetItemController extends BudgetItemControllerBase {
  constructor(protected readonly service: BudgetItemService) {
    super(service);
  }
}
