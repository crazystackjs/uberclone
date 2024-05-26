/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { FoodDelivery } from "./FoodDelivery";
import { FoodDeliveryCountArgs } from "./FoodDeliveryCountArgs";
import { FoodDeliveryFindManyArgs } from "./FoodDeliveryFindManyArgs";
import { FoodDeliveryFindUniqueArgs } from "./FoodDeliveryFindUniqueArgs";
import { DeleteFoodDeliveryArgs } from "./DeleteFoodDeliveryArgs";
import { FoodDeliveryService } from "../foodDelivery.service";
@graphql.Resolver(() => FoodDelivery)
export class FoodDeliveryResolverBase {
  constructor(protected readonly service: FoodDeliveryService) {}

  async _foodDeliveriesMeta(
    @graphql.Args() args: FoodDeliveryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [FoodDelivery])
  async foodDeliveries(
    @graphql.Args() args: FoodDeliveryFindManyArgs
  ): Promise<FoodDelivery[]> {
    return this.service.foodDeliveries(args);
  }

  @graphql.Query(() => FoodDelivery, { nullable: true })
  async foodDelivery(
    @graphql.Args() args: FoodDeliveryFindUniqueArgs
  ): Promise<FoodDelivery | null> {
    const result = await this.service.foodDelivery(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => FoodDelivery)
  async deleteFoodDelivery(
    @graphql.Args() args: DeleteFoodDeliveryArgs
  ): Promise<FoodDelivery | null> {
    try {
      return await this.service.deleteFoodDelivery(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
