import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GpsDatumServiceBase } from "./base/gpsDatum.service.base";

@Injectable()
export class GpsDatumService extends GpsDatumServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
