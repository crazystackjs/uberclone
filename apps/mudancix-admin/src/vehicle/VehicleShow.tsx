import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceManyField,
  Datagrid,
  DateField,
  ReferenceField,
} from "react-admin";

import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { FEEDBACK_TITLE_FIELD } from "../feedback/FeedbackTitle";
import { VEHICLE_TITLE_FIELD } from "./VehicleTitle";

export const VehicleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Capacity M3" source="capacityM3" />
        <TextField label="ID" source="id" />
        <TextField label="License Plate" source="licensePlate" />
        <TextField label="Make" source="make" />
        <TextField label="Model" source="model" />
        <ReferenceManyField reference="Move" target="vehicleId" label="Moves">
          <Datagrid rowClick="show">
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
            <ReferenceField
              label="Vehicle"
              source="vehicle.id"
              reference="Vehicle"
            >
              <TextField source={VEHICLE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Volume M3" source="volumeM3" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
