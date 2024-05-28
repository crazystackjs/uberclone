import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { MoveWhereUniqueInput } from "../move/MoveWhereUniqueInput";

export type MoveEmployeeUpdateInput = {
  employee?: EmployeeWhereUniqueInput;
  move?: MoveWhereUniqueInput;
};
