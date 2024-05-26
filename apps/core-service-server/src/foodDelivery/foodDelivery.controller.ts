import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FoodDeliveryService } from "./foodDelivery.service";
import { FoodDeliveryControllerBase } from "./base/foodDelivery.controller.base";

@swagger.ApiTags("foodDeliveries")
@common.Controller("foodDeliveries")
export class FoodDeliveryController extends FoodDeliveryControllerBase {
  constructor(protected readonly service: FoodDeliveryService) {
    super(service);
  }
}
