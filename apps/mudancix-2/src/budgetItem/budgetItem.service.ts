import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BudgetItemServiceBase } from "./base/budgetItem.service.base";

@Injectable()
export class BudgetItemService extends BudgetItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
