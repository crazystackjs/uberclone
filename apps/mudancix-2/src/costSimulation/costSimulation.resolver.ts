import * as graphql from "@nestjs/graphql";
import { CostSimulationResolverBase } from "./base/costSimulation.resolver.base";
import { CostSimulation } from "./base/CostSimulation";
import { CostSimulationService } from "./costSimulation.service";

@graphql.Resolver(() => CostSimulation)
export class CostSimulationResolver extends CostSimulationResolverBase {
  constructor(protected readonly service: CostSimulationService) {
    super(service);
  }
}
