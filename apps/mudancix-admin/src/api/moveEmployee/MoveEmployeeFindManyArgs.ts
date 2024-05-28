import { MoveEmployeeWhereInput } from "./MoveEmployeeWhereInput";
import { MoveEmployeeOrderByInput } from "./MoveEmployeeOrderByInput";

export type MoveEmployeeFindManyArgs = {
  where?: MoveEmployeeWhereInput;
  orderBy?: Array<MoveEmployeeOrderByInput>;
  skip?: number;
  take?: number;
};
