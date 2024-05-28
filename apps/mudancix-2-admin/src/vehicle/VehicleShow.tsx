import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { VEHICLE_TITLE_FIELD } from "./VehicleTitle";

export const VehicleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Make" source="make" />
        <TextField label="Model" source="model" />
        <TextField label="Plate Number" source="plateNumber" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Driver"
          target="vehicleId"
          label="Drivers"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Email" source="email" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Available" source="isAvailable" />
            <TextField label="Name" source="name" />
            <TextField label="Phone Number" source="phoneNumber" />
            <TextField label="Total Earnings" source="totalEarnings" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Vehicle"
              source="vehicle.id"
              reference="Vehicle"
            >
              <TextField source={VEHICLE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
