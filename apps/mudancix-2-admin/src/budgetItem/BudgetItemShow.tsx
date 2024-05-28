import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  BooleanField,
} from "react-admin";

import { BUDGET_TITLE_FIELD } from "../budget/BudgetTitle";

export const BudgetItemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField
          label="Additional Requirements"
          source="additionalRequirements"
        />
        <ReferenceField label="Budget" source="budget.id" reference="Budget">
          <TextField source={BUDGET_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Category" source="category" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Item Name" source="itemName" />
        <BooleanField label="Needs Packing" source="needsPacking" />
        <BooleanField label="Needs Temp Control" source="needsTempControl" />
        <TextField label="Photo Url" source="photoUrl" />
        <TextField label="Quantity" source="quantity" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
