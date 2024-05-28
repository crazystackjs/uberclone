import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { MOVE_TITLE_FIELD } from "./MoveTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { DRIVER_TITLE_FIELD } from "../driver/DriverTitle";
import { BUDGET_TITLE_FIELD } from "../budget/BudgetTitle";
import { ROUTE_TITLE_FIELD } from "../route/RouteTitle";

export const MoveShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Budget" source="budget.id" reference="Budget">
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
        <ReferenceField label="Driver" source="driver.id" reference="Driver">
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
        <ReferenceManyField
          reference="CostSimulation"
          target="moveId"
          label="CostSimulations"
        >
          <Datagrid rowClick="show">
            <TextField
              label="Additional Services"
              source="additionalServices"
            />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Distance" source="distance" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Move" source="move.id" reference="Move">
              <TextField source={MOVE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Total Cost" source="totalCost" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Volume" source="volume" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="GpsDatum"
          target="moveId"
          label="GpsData"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Location" source="location" />
            <ReferenceField label="Move" source="move.id" reference="Move">
              <TextField source={MOVE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Timestamp" source="timestamp" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Payment"
          target="moveId"
          label="Payments"
        >
          <Datagrid rowClick="show">
            <TextField label="Amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Customer"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Driver"
              source="driver.id"
              reference="Driver"
            >
              <TextField source={DRIVER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Method" source="method" />
            <ReferenceField label="Move" source="move.id" reference="Move">
              <TextField source={MOVE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
