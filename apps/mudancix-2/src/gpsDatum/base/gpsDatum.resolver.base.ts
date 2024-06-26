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
import { GpsDatum } from "./GpsDatum";
import { GpsDatumCountArgs } from "./GpsDatumCountArgs";
import { GpsDatumFindManyArgs } from "./GpsDatumFindManyArgs";
import { GpsDatumFindUniqueArgs } from "./GpsDatumFindUniqueArgs";
import { CreateGpsDatumArgs } from "./CreateGpsDatumArgs";
import { UpdateGpsDatumArgs } from "./UpdateGpsDatumArgs";
import { DeleteGpsDatumArgs } from "./DeleteGpsDatumArgs";
import { Move } from "../../move/base/Move";
import { GpsDatumService } from "../gpsDatum.service";
@graphql.Resolver(() => GpsDatum)
export class GpsDatumResolverBase {
  constructor(protected readonly service: GpsDatumService) {}

  async _gpsDataMeta(
    @graphql.Args() args: GpsDatumCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [GpsDatum])
  async gpsData(
    @graphql.Args() args: GpsDatumFindManyArgs
  ): Promise<GpsDatum[]> {
    return this.service.gpsData(args);
  }

  @graphql.Query(() => GpsDatum, { nullable: true })
  async gpsDatum(
    @graphql.Args() args: GpsDatumFindUniqueArgs
  ): Promise<GpsDatum | null> {
    const result = await this.service.gpsDatum(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => GpsDatum)
  async createGpsDatum(
    @graphql.Args() args: CreateGpsDatumArgs
  ): Promise<GpsDatum> {
    return await this.service.createGpsDatum({
      ...args,
      data: {
        ...args.data,

        move: {
          connect: args.data.move,
        },
      },
    });
  }

  @graphql.Mutation(() => GpsDatum)
  async updateGpsDatum(
    @graphql.Args() args: UpdateGpsDatumArgs
  ): Promise<GpsDatum | null> {
    try {
      return await this.service.updateGpsDatum({
        ...args,
        data: {
          ...args.data,

          move: {
            connect: args.data.move,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => GpsDatum)
  async deleteGpsDatum(
    @graphql.Args() args: DeleteGpsDatumArgs
  ): Promise<GpsDatum | null> {
    try {
      return await this.service.deleteGpsDatum(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Move, {
    nullable: true,
    name: "move",
  })
  async getMove(@graphql.Parent() parent: GpsDatum): Promise<Move | null> {
    const result = await this.service.getMove(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
