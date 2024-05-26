import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HealthServiceServiceBase } from "./base/healthService.service.base";

@Injectable()
export class HealthServiceService extends HealthServiceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
