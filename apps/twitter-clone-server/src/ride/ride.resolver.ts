import * as graphql from "@nestjs/graphql";
import { RideResolverBase } from "./base/ride.resolver.base";
import { Ride } from "./base/Ride";
import { RideService } from "./ride.service";

@graphql.Resolver(() => Ride)
export class RideResolver extends RideResolverBase {
  constructor(protected readonly service: RideService) {
    super(service);
  }
}
