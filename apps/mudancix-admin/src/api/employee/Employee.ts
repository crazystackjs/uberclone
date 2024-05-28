import { MoveEmployee } from "../moveEmployee/MoveEmployee";

export type Employee = {
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  moves?: Array<MoveEmployee>;
  phone: string;
  role: string;
};
