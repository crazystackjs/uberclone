import { Module } from "@nestjs/common";
import { BudgetItemModuleBase } from "./base/budgetItem.module.base";
import { BudgetItemService } from "./budgetItem.service";
import { BudgetItemController } from "./budgetItem.controller";
import { BudgetItemResolver } from "./budgetItem.resolver";

@Module({
  imports: [BudgetItemModuleBase],
  controllers: [BudgetItemController],
  providers: [BudgetItemService, BudgetItemResolver],
  exports: [BudgetItemService],
})
export class BudgetItemModule {}
