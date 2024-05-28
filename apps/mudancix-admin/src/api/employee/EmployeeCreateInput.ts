import { MoveEmployeeCreateNestedManyWithoutEmployeesInput } from "./MoveEmployeeCreateNestedManyWithoutEmployeesInput";

export type EmployeeCreateInput = {
  email: string;
  firstName: string;
  lastName: string;
  moves?: MoveEmployeeCreateNestedManyWithoutEmployeesInput;
  phone: string;
  role: string;
};
