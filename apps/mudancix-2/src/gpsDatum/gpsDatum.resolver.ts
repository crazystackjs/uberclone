import * as graphql from "@nestjs/graphql";
import { GpsDatumResolverBase } from "./base/gpsDatum.resolver.base";
import { GpsDatum } from "./base/GpsDatum";
import { GpsDatumService } from "./gpsDatum.service";

@graphql.Resolver(() => GpsDatum)
export class GpsDatumResolver extends GpsDatumResolverBase {
  constructor(protected readonly service: GpsDatumService) {
    super(service);
  }
}
