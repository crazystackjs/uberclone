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
import { Ride } from "./Ride";
import { RideCountArgs } from "./RideCountArgs";
import { RideFindManyArgs } from "./RideFindManyArgs";
import { RideFindUniqueArgs } from "./RideFindUniqueArgs";
import { CreateRideArgs } from "./CreateRideArgs";
import { UpdateRideArgs } from "./UpdateRideArgs";
import { DeleteRideArgs } from "./DeleteRideArgs";
import { Driver } from "../../driver/base/Driver";
import { Rider } from "../../rider/base/Rider";
import { PayRideInput } from "../PayRideInput";
import { PayRideOutput } from "../PayRideOutput";
import { RideService } from "../ride.service";
@graphql.Resolver(() => Ride)
export class RideResolverBase {
  constructor(protected readonly service: RideService) {}

  async _ridesMeta(
    @graphql.Args() args: RideCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Ride])
  async rides(@graphql.Args() args: RideFindManyArgs): Promise<Ride[]> {
    return this.service.rides(args);
  }

  @graphql.Query(() => Ride, { nullable: true })
  async ride(@graphql.Args() args: RideFindUniqueArgs): Promise<Ride | null> {
    const result = await this.service.ride(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Ride)
  async createRide(@graphql.Args() args: CreateRideArgs): Promise<Ride> {
    return await this.service.createRide({
      ...args,
      data: {
        ...args.data,

        driver: args.data.driver
          ? {
              connect: args.data.driver,
            }
          : undefined,

        rider: args.data.rider
          ? {
              connect: args.data.rider,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Ride)
  async updateRide(@graphql.Args() args: UpdateRideArgs): Promise<Ride | null> {
    try {
      return await this.service.updateRide({
        ...args,
        data: {
          ...args.data,

          driver: args.data.driver
            ? {
                connect: args.data.driver,
              }
            : undefined,

          rider: args.data.rider
            ? {
                connect: args.data.rider,
              }
            : undefined,
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

  @graphql.Mutation(() => Ride)
  async deleteRide(@graphql.Args() args: DeleteRideArgs): Promise<Ride | null> {
    try {
      return await this.service.deleteRide(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Driver, {
    nullable: true,
    name: "driver",
  })
  async getDriver(@graphql.Parent() parent: Ride): Promise<Driver | null> {
    const result = await this.service.getDriver(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Rider, {
    nullable: true,
    name: "rider",
  })
  async getRider(@graphql.Parent() parent: Ride): Promise<Rider | null> {
    const result = await this.service.getRider(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PayRideOutput)
  async PayRide(
    @graphql.Args()
    args: PayRideInput
  ): Promise<PayRideOutput> {
    return this.service.PayRide(args);
  }
}
