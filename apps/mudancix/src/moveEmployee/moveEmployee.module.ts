import { Module } from "@nestjs/common";
import { MoveEmployeeModuleBase } from "./base/moveEmployee.module.base";
import { MoveEmployeeService } from "./moveEmployee.service";
import { MoveEmployeeController } from "./moveEmployee.controller";
import { MoveEmployeeResolver } from "./moveEmployee.resolver";

@Module({
  imports: [MoveEmployeeModuleBase],
  controllers: [MoveEmployeeController],
  providers: [MoveEmployeeService, MoveEmployeeResolver],
  exports: [MoveEmployeeService],
})
export class MoveEmployeeModule {}
