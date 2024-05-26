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
import { HealthService } from "./HealthService";
import { HealthServiceCountArgs } from "./HealthServiceCountArgs";
import { HealthServiceFindManyArgs } from "./HealthServiceFindManyArgs";
import { HealthServiceFindUniqueArgs } from "./HealthServiceFindUniqueArgs";
import { DeleteHealthServiceArgs } from "./DeleteHealthServiceArgs";
import { HealthServiceService } from "../healthService.service";
@graphql.Resolver(() => HealthService)
export class HealthServiceResolverBase {
  constructor(protected readonly service: HealthServiceService) {}

  async _healthServicesMeta(
    @graphql.Args() args: HealthServiceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [HealthService])
  async healthServices(
    @graphql.Args() args: HealthServiceFindManyArgs
  ): Promise<HealthService[]> {
    return this.service.healthServices(args);
  }

  @graphql.Query(() => HealthService, { nullable: true })
  async healthService(
    @graphql.Args() args: HealthServiceFindUniqueArgs
  ): Promise<HealthService | null> {
    const result = await this.service.healthService(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => HealthService)
  async deleteHealthService(
    @graphql.Args() args: DeleteHealthServiceArgs
  ): Promise<HealthService | null> {
    try {
      return await this.service.deleteHealthService(args);
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
