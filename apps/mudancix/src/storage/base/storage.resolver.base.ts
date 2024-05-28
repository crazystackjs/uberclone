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
import { Storage } from "./Storage";
import { StorageCountArgs } from "./StorageCountArgs";
import { StorageFindManyArgs } from "./StorageFindManyArgs";
import { StorageFindUniqueArgs } from "./StorageFindUniqueArgs";
import { CreateStorageArgs } from "./CreateStorageArgs";
import { UpdateStorageArgs } from "./UpdateStorageArgs";
import { DeleteStorageArgs } from "./DeleteStorageArgs";
import { Move } from "../../move/base/Move";
import { StorageService } from "../storage.service";
@graphql.Resolver(() => Storage)
export class StorageResolverBase {
  constructor(protected readonly service: StorageService) {}

  async _storagesMeta(
    @graphql.Args() args: StorageCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Storage])
  async storages(
    @graphql.Args() args: StorageFindManyArgs
  ): Promise<Storage[]> {
    return this.service.storages(args);
  }

  @graphql.Query(() => Storage, { nullable: true })
  async storage(
    @graphql.Args() args: StorageFindUniqueArgs
  ): Promise<Storage | null> {
    const result = await this.service.storage(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Storage)
  async createStorage(
    @graphql.Args() args: CreateStorageArgs
  ): Promise<Storage> {
    return await this.service.createStorage({
      ...args,
      data: {
        ...args.data,

        move: {
          connect: args.data.move,
        },
      },
    });
  }

  @graphql.Mutation(() => Storage)
  async updateStorage(
    @graphql.Args() args: UpdateStorageArgs
  ): Promise<Storage | null> {
    try {
      return await this.service.updateStorage({
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

  @graphql.Mutation(() => Storage)
  async deleteStorage(
    @graphql.Args() args: DeleteStorageArgs
  ): Promise<Storage | null> {
    try {
      return await this.service.deleteStorage(args);
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
  async getMove(@graphql.Parent() parent: Storage): Promise<Move | null> {
    const result = await this.service.getMove(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
