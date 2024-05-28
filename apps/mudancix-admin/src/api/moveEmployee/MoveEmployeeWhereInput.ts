import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { MoveWhereUniqueInput } from "../move/MoveWhereUniqueInput";

export type MoveEmployeeWhereInput = {
  employee?: EmployeeWhereUniqueInput;
  id?: IntFilter;
  move?: MoveWhereUniqueInput;
};
