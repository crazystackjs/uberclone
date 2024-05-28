import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BudgetWhereUniqueInput } from "../budget/BudgetWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { IntFilter } from "../../util/IntFilter";

export type BudgetItemWhereInput = {
  additionalRequirements?: StringNullableFilter;
  budget?: BudgetWhereUniqueInput;
  category?:
    | "ESTAR_E_JANTAR"
    | "DORMITORIO"
    | "COZINHA_AREA"
    | "VEICULOS"
    | "ESCRITORIO"
    | "DIVERSOS";
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  itemName?: StringFilter;
  needsPacking?: BooleanFilter;
  needsTempControl?: BooleanFilter;
  photoUrl?: StringNullableFilter;
  quantity?: IntFilter;
  updatedAt?: DateTimeFilter;
};
