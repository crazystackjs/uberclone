import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { MOVE_TITLE_FIELD } from "./MoveTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { FEEDBACK_TITLE_FIELD } from "../feedback/FeedbackTitle";
import { VEHICLE_TITLE_FIELD } from "../vehicle/VehicleTitle";

export const MoveShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Cost Distance" source="costDistance" />
        <TextField label="Cost Volume" source="costVolume" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Customer"
          source="customer.id"
          reference="Customer"
        >
          <TextField source={CUSTOMER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Date" source="date" />
        <TextField label="Distance Km" source="distanceKm" />
        <ReferenceField
          label="Feedback"
          source="feedback.id"
          reference="Feedback"
        >
          <TextField source={FEEDBACK_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Status" source="status" />
        <TextField label="Total Cost" source="totalCost" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Vehicle" source="vehicle.id" reference="Vehicle">
          <TextField source={VEHICLE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Volume M3" source="volumeM3" />
        <ReferenceManyField
          reference="MoveEmployee"
          target="moveId"
          label="MoveEmployees"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField label="Move" source="move.id" reference="Move">
              <TextField source={MOVE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Insurance"
          target="moveId"
          label="Insurances"
        >
          <Datagrid rowClick="show">
            <TextField label="Cost" source="cost" />
            <TextField label="Coverage Amount" source="coverageAmount" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Move" source="move.id" reference="Move">
              <TextField source={MOVE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Policy Number" source="policyNumber" />
            <TextField label="Provider" source="provider" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Item" target="moveId" label="Items">
          <Datagrid rowClick="show">
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Move" source="move.id" reference="Move">
              <TextField source={MOVE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Name" source="name" />
            <TextField label="Photo Url" source="photoUrl" />
            <TextField label="Volume M3" source="volumeM3" />
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
            <TextField label="ID" source="id" />
            <TextField label="Method" source="method" />
            <ReferenceField label="Move" source="move.id" reference="Move">
              <TextField source={MOVE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status" source="status" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Route" target="moveId" label="Routes">
          <Datagrid rowClick="show">
            <TextField label="Destination" source="destination" />
            <TextField label="Estimated Time" source="estimatedTime" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Move" source="move.id" reference="Move">
              <TextField source={MOVE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Origin" source="origin" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Storage"
          target="moveId"
          label="Storages"
        >
          <Datagrid rowClick="show">
            <TextField label="Cost" source="cost" />
            <TextField label="End Date" source="endDate" />
            <TextField label="ID" source="id" />
            <TextField label="Location" source="location" />
            <ReferenceField label="Move" source="move.id" reference="Move">
              <TextField source={MOVE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Start Date" source="startDate" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
