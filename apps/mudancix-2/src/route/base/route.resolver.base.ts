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
import { Route } from "./Route";
import { RouteCountArgs } from "./RouteCountArgs";
import { RouteFindManyArgs } from "./RouteFindManyArgs";
import { RouteFindUniqueArgs } from "./RouteFindUniqueArgs";
import { CreateRouteArgs } from "./CreateRouteArgs";
import { UpdateRouteArgs } from "./UpdateRouteArgs";
import { DeleteRouteArgs } from "./DeleteRouteArgs";
import { Move } from "../../move/base/Move";
import { RouteService } from "../route.service";
@graphql.Resolver(() => Route)
export class RouteResolverBase {
  constructor(protected readonly service: RouteService) {}

  async _routesMeta(
    @graphql.Args() args: RouteCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Route])
  async routes(@graphql.Args() args: RouteFindManyArgs): Promise<Route[]> {
    return this.service.routes(args);
  }

  @graphql.Query(() => Route, { nullable: true })
  async route(
    @graphql.Args() args: RouteFindUniqueArgs
  ): Promise<Route | null> {
    const result = await this.service.route(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Route)
  async createRoute(@graphql.Args() args: CreateRouteArgs): Promise<Route> {
    return await this.service.createRoute({
      ...args,
      data: {
        ...args.data,

        move: {
          connect: args.data.move,
        },
      },
    });
  }

  @graphql.Mutation(() => Route)
  async updateRoute(
    @graphql.Args() args: UpdateRouteArgs
  ): Promise<Route | null> {
    try {
      return await this.service.updateRoute({
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

  @graphql.Mutation(() => Route)
  async deleteRoute(
    @graphql.Args() args: DeleteRouteArgs
  ): Promise<Route | null> {
    try {
      return await this.service.deleteRoute(args);
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
  async getMove(@graphql.Parent() parent: Route): Promise<Move | null> {
    const result = await this.service.getMove(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}