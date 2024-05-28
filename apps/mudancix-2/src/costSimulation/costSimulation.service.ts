import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CostSimulationServiceBase } from "./base/costSimulation.service.base";

@Injectable()
export class CostSimulationService extends CostSimulationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
