import { Module } from "@nestjs/common";
import { GpsDatumModuleBase } from "./base/gpsDatum.module.base";
import { GpsDatumService } from "./gpsDatum.service";
import { GpsDatumController } from "./gpsDatum.controller";
import { GpsDatumResolver } from "./gpsDatum.resolver";

@Module({
  imports: [GpsDatumModuleBase],
  controllers: [GpsDatumController],
  providers: [GpsDatumService, GpsDatumResolver],
  exports: [GpsDatumService],
})
export class GpsDatumModule {}
