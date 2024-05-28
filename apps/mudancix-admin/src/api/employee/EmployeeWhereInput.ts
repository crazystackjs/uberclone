import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { MoveEmployeeListRelationFilter } from "../moveEmployee/MoveEmployeeListRelationFilter";

export type EmployeeWhereInput = {
  email?: StringFilter;
  firstName?: StringFilter;
  id?: IntFilter;
  lastName?: StringFilter;
  moves?: MoveEmployeeListRelationFilter;
  phone?: StringFilter;
  role?: StringFilter;
};
