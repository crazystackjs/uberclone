import { Employee } from "../employee/Employee";
import { Move } from "../move/Move";

export type MoveEmployee = {
  employee?: Employee;
  id: number;
  move?: Move;
};
