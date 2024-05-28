import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StorageService } from "./storage.service";
import { StorageControllerBase } from "./base/storage.controller.base";

@swagger.ApiTags("storages")
@common.Controller("storages")
export class StorageController extends StorageControllerBase {
  constructor(protected readonly service: StorageService) {
    super(service);
  }
}
