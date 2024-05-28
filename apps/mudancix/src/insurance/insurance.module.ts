import { Module } from "@nestjs/common";
import { InsuranceModuleBase } from "./base/insurance.module.base";
import { InsuranceService } from "./insurance.service";
import { InsuranceController } from "./insurance.controller";
import { InsuranceResolver } from "./insurance.resolver";

@Module({
  imports: [InsuranceModuleBase],
  controllers: [InsuranceController],
  providers: [InsuranceService, InsuranceResolver],
  exports: [InsuranceService],
})
export class InsuranceModule {}
