import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ECommerceProgramServiceBase } from "./base/eCommerceProgram.service.base";

@Injectable()
export class ECommerceProgramService extends ECommerceProgramServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
