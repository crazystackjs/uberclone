import * as graphql from "@nestjs/graphql";
import { FoodDeliveryResolverBase } from "./base/foodDelivery.resolver.base";
import { FoodDelivery } from "./base/FoodDelivery";
import { FoodDeliveryService } from "./foodDelivery.service";

@graphql.Resolver(() => FoodDelivery)
export class FoodDeliveryResolver extends FoodDeliveryResolverBase {
  constructor(protected readonly service: FoodDeliveryService) {
    super(service);
  }
}
