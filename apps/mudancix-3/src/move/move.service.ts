import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MoveServiceBase } from "./base/move.service.base";

@Injectable()
export class MoveService extends MoveServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
