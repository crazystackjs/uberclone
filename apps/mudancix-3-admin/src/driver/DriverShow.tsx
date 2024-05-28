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

import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { DRIVER_TITLE_FIELD } from "./DriverTitle";
import { BUDGET_TITLE_FIELD } from "../budget/BudgetTitle";
import { ROUTE_TITLE_FIELD } from "../route/RouteTitle";
import { MOVE_TITLE_FIELD } from "../move/MoveTitle";
import { VEHICLE_TITLE_FIELD } from "../vehicle/VehicleTitle";

export const DriverShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Available" source="isAvailable" />
        <TextField label="Name" source="name" />
        <TextField label="Phone Number" source="phoneNumber" />
        <TextField label="Total Earnings" source="totalEarnings" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Vehicle" source="vehicle.id" reference="Vehicle">
          <TextField source={VEHICLE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Chat"
          target="driverMessengerId"
          label="Chats"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Customer Messenger"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Driver Messenger"
              source="driver.id"
              reference="Driver"
            >
              <TextField source={DRIVER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Move" target="driverId" label="Moves">
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
        <ReferenceManyField
          reference="Payment"
          target="driverId"
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
