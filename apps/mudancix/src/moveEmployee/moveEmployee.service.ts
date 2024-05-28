import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MoveEmployeeServiceBase } from "./base/moveEmployee.service.base";

@Injectable()
export class MoveEmployeeService extends MoveEmployeeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
