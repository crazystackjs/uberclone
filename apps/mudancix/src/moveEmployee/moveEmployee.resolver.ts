import * as graphql from "@nestjs/graphql";
import { MoveEmployeeResolverBase } from "./base/moveEmployee.resolver.base";
import { MoveEmployee } from "./base/MoveEmployee";
import { MoveEmployeeService } from "./moveEmployee.service";

@graphql.Resolver(() => MoveEmployee)
export class MoveEmployeeResolver extends MoveEmployeeResolverBase {
  constructor(protected readonly service: MoveEmployeeService) {
    super(service);
  }
}
