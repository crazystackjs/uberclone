import { Module } from "@nestjs/common";
import { MoveModuleBase } from "./base/move.module.base";
import { MoveService } from "./move.service";
import { MoveController } from "./move.controller";
import { MoveResolver } from "./move.resolver";

@Module({
  imports: [MoveModuleBase],
  controllers: [MoveController],
  providers: [MoveService, MoveResolver],
  exports: [MoveService],
})
export class MoveModule {}
