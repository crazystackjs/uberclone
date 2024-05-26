import { Module } from "@nestjs/common";
import { FoodDeliveryModuleBase } from "./base/foodDelivery.module.base";
import { FoodDeliveryService } from "./foodDelivery.service";
import { FoodDeliveryController } from "./foodDelivery.controller";
import { FoodDeliveryResolver } from "./foodDelivery.resolver";

@Module({
  imports: [FoodDeliveryModuleBase],
  controllers: [FoodDeliveryController],
  providers: [FoodDeliveryService, FoodDeliveryResolver],
  exports: [FoodDeliveryService],
})
export class FoodDeliveryModule {}
