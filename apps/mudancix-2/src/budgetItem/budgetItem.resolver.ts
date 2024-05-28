import * as graphql from "@nestjs/graphql";
import { BudgetItemResolverBase } from "./base/budgetItem.resolver.base";
import { BudgetItem } from "./base/BudgetItem";
import { BudgetItemService } from "./budgetItem.service";

@graphql.Resolver(() => BudgetItem)
export class BudgetItemResolver extends BudgetItemResolverBase {
  constructor(protected readonly service: BudgetItemService) {
    super(service);
  }
}
