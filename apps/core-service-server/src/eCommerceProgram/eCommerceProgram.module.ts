import { Module } from "@nestjs/common";
import { ECommerceProgramModuleBase } from "./base/eCommerceProgram.module.base";
import { ECommerceProgramService } from "./eCommerceProgram.service";
import { ECommerceProgramController } from "./eCommerceProgram.controller";
import { ECommerceProgramResolver } from "./eCommerceProgram.resolver";

@Module({
  imports: [ECommerceProgramModuleBase],
  controllers: [ECommerceProgramController],
  providers: [ECommerceProgramService, ECommerceProgramResolver],
  exports: [ECommerceProgramService],
})
export class ECommerceProgramModule {}
