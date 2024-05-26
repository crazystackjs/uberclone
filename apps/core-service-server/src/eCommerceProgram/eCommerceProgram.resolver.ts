import * as graphql from "@nestjs/graphql";
import { ECommerceProgramResolverBase } from "./base/eCommerceProgram.resolver.base";
import { ECommerceProgram } from "./base/ECommerceProgram";
import { ECommerceProgramService } from "./eCommerceProgram.service";

@graphql.Resolver(() => ECommerceProgram)
export class ECommerceProgramResolver extends ECommerceProgramResolverBase {
  constructor(protected readonly service: ECommerceProgramService) {
    super(service);
  }
}
