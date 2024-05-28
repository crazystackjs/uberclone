import { BudgetItemListRelationFilter } from "../budgetItem/BudgetItemListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { MoveWhereUniqueInput } from "../move/MoveWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type BudgetWhereInput = {
  budgetItems?: BudgetItemListRelationFilter;
  createdAt?: DateTimeFilter;
  customerEmail?: StringFilter;
  customerName?: StringFilter;
  customerPhone?: StringFilter;
  customerWhatsapp?: StringFilter;
  destinationLocationType?: StringFilter;
  exclusiveTruck?: BooleanFilter;
  flexibleDate?: BooleanFilter;
  hoisting?: BooleanFilter;
  id?: StringFilter;
  insurance?: BooleanFilter;
  move?: MoveWhereUniqueInput;
  originLocationType?: StringFilter;
  specialInstructions?: StringNullableFilter;
  termsAccepted?: BooleanFilter;
  updatedAt?: DateTimeFilter;
};
