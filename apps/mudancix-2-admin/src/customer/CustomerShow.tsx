import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { BUDGET_TITLE_FIELD } from "../budget/BudgetTitle";
import { CUSTOMER_TITLE_FIELD } from "./CustomerTitle";
import { DRIVER_TITLE_FIELD } from "../driver/DriverTitle";
import { ROUTE_TITLE_FIELD } from "../route/RouteTitle";

export const CustomerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Phone Number" source="phoneNumber" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Move" target="customerId" label="Moves">
          <Datagrid rowClick="show">
            <ReferenceField
              label="Budget"
              source="budget.id"
              reference="Budget"
            >
              <TextField source={BUDGET_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Completed At" source="completedAt" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Customer"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Delivery Location" source="deliveryLocation" />
            <TextField label="Distance" source="distance" />
            <ReferenceField
              label="Driver"
              source="driver.id"
              reference="Driver"
            >
              <TextField source={DRIVER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Pickup Location" source="pickupLocation" />
            <TextField label="Price" source="price" />
            <ReferenceField label="Route" source="route.id" reference="Route">
              <TextField source={ROUTE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Scheduled At" source="scheduledAt" />
            <TextField label="Status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Volume" source="volume" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
