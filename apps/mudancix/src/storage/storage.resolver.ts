import * as graphql from "@nestjs/graphql";
import { StorageResolverBase } from "./base/storage.resolver.base";
import { Storage } from "./base/Storage";
import { StorageService } from "./storage.service";

@graphql.Resolver(() => Storage)
export class StorageResolver extends StorageResolverBase {
  constructor(protected readonly service: StorageService) {
    super(service);
  }
}
