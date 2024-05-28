import * as graphql from "@nestjs/graphql";
import { MoveResolverBase } from "./base/move.resolver.base";
import { Move } from "./base/Move";
import { MoveService } from "./move.service";

@graphql.Resolver(() => Move)
export class MoveResolver extends MoveResolverBase {
  constructor(protected readonly service: MoveService) {
    super(service);
  }
}
