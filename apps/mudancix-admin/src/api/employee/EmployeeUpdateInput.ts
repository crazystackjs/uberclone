import { MoveEmployeeUpdateManyWithoutEmployeesInput } from "./MoveEmployeeUpdateManyWithoutEmployeesInput";

export type EmployeeUpdateInput = {
  email?: string;
  firstName?: string;
  lastName?: string;
  moves?: MoveEmployeeUpdateManyWithoutEmployeesInput;
  phone?: string;
  role?: string;
};
