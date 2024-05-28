import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { MoveWhereUniqueInput } from "../move/MoveWhereUniqueInput";

export type MoveEmployeeCreateInput = {
  employee: EmployeeWhereUniqueInput;
  move: MoveWhereUniqueInput;
};
