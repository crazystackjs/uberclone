import * as graphql from "@nestjs/graphql";
import { InsuranceResolverBase } from "./base/insurance.resolver.base";
import { Insurance } from "./base/Insurance";
import { InsuranceService } from "./insurance.service";

@graphql.Resolver(() => Insurance)
export class InsuranceResolver extends InsuranceResolverBase {
  constructor(protected readonly service: InsuranceService) {
    super(service);
  }
}
