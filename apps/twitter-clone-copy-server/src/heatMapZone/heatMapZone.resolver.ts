import * as graphql from "@nestjs/graphql";
import { HeatMapZoneResolverBase } from "./base/heatMapZone.resolver.base";
import { HeatMapZone } from "./base/HeatMapZone";
import { HeatMapZoneService } from "./heatMapZone.service";

@graphql.Resolver(() => HeatMapZone)
export class HeatMapZoneResolver extends HeatMapZoneResolverBase {
  constructor(protected readonly service: HeatMapZoneService) {
    super(service);
  }
}
