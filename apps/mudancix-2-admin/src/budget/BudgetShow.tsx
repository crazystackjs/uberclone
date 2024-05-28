import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { BUDGET_TITLE_FIELD } from "./BudgetTitle";
import { MOVE_TITLE_FIELD } from "../move/MoveTitle";

export const BudgetShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Customer Email" source="customerEmail" />
        <TextField label="Customer Name" source="customerName" />
        <TextField label="Customer Phone" source="customerPhone" />
        <TextField label="Customer Whatsapp" source="customerWhatsapp" />
        <TextField
          label="Destination Location Type"
          source="destinationLocationType"
        />
        <BooleanField label="Exclusive Truck" source="exclusiveTruck" />
        <BooleanField label="Flexible Date" source="flexibleDate" />
        <BooleanField label="Hoisting" source="hoisting" />
        <TextField label="ID" source="id" />
        <BooleanField label="Insurance" source="insurance" />
        <ReferenceField label="Move" source="move.id" reference="Move">
          <TextField source={MOVE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Origin Location Type" source="originLocationType" />
        <TextField label="Special Instructions" source="specialInstructions" />
        <BooleanField label="Terms Accepted" source="termsAccepted" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="BudgetItem"
          target="budgetId"
          label="BudgetItems"
        >
          <Datagrid rowClick="show">
            <TextField
              label="Additional Requirements"
              source="additionalRequirements"
            />
            <ReferenceField
              label="Budget"
              source="budget.id"
              reference="Budget"
            >
              <TextField source={BUDGET_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Category" source="category" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Item Name" source="itemName" />
            <BooleanField label="Needs Packing" source="needsPacking" />
            <BooleanField
              label="Needs Temp Control"
              source="needsTempControl"
            />
            <TextField label="Photo Url" source="photoUrl" />
            <TextField label="Quantity" source="quantity" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
