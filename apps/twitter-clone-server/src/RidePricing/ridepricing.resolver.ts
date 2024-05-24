import * as graphql from "@nestjs/graphql";
import { CalculateRidePriceInput } from "../ridePricing/CalculateRidePriceInput";
import { CompleteRideInput } from "../ridePricing/CompleteRideInput";
import { RequestRideInput } from "../ridePricing/RequestRideInput";
import { StartRideInput } from "../ridePricing/StartRideInput";
import { UpdateLocationInput } from "../ridePricing/UpdateLocationInput";
import { RidePricingService } from "./ridepricing.service";

export class RidePricingResolver {
  constructor(protected readonly service: RidePricingService) {}

  @graphql.Mutation(() => String)
  async CalculateDynamicPrice(
    @graphql.Args()
    args: CalculateRidePriceInput
  ): Promise<string> {
    return this.service.CalculateDynamicPrice(args);
  }

  @graphql.Query(() => String)
  async CalculateRidePrice(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CalculateRidePrice(args);
  }

  @graphql.Mutation(() => String)
  async CompleteRide(
    @graphql.Args()
    args: CompleteRideInput
  ): Promise<string> {
    return this.service.CompleteRide(args);
  }

  @graphql.Mutation(() => String)
  async RequestRide(
    @graphql.Args()
    args: RequestRideInput
  ): Promise<string> {
    return this.service.RequestRide(args);
  }

  @graphql.Mutation(() => String)
  async StartRide(
    @graphql.Args()
    args: StartRideInput
  ): Promise<string> {
    return this.service.StartRide(args);
  }

  @graphql.Mutation(() => String)
  async UpdateLocation(
    @graphql.Args()
    args: UpdateLocationInput
  ): Promise<string> {
    return this.service.UpdateLocation(args);
  }
}
