import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { MoveListRelationFilter } from "../move/MoveListRelationFilter";

export type CustomerWhereInput = {
  address?: StringFilter;
  createdAt?: DateTimeFilter;
  email?: StringFilter;
  id?: StringFilter;
  moves?: MoveListRelationFilter;
  name?: StringFilter;
  phoneNumber?: StringFilter;
  updatedAt?: DateTimeFilter;
};
