import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HeatMapZoneServiceBase } from "./base/heatMapZone.service.base";

@Injectable()
export class HeatMapZoneService extends HeatMapZoneServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
