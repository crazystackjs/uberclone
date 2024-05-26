import * as graphql from "@nestjs/graphql";
import { HealthServiceResolverBase } from "./base/healthService.resolver.base";
import { HealthService } from "./base/HealthService";
import { HealthServiceService } from "./healthService.service";

@graphql.Resolver(() => HealthService)
export class HealthServiceResolver extends HealthServiceResolverBase {
  constructor(protected readonly service: HealthServiceService) {
    super(service);
  }
}
