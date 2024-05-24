import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { DriverTitle } from "../driver/DriverTitle";
import { RiderTitle } from "../rider/RiderTitle";

export const RideCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="driver.id" reference="Driver" label="driver">
          <SelectInput optionText={DriverTitle} />
        </ReferenceInput>
        <TextInput label="dropoffLocation" source="dropoffLocation" />
        <DateTimeInput label="endTime" source="endTime" />
        <NumberInput label="fare" source="fare" />
        <TextInput label="pickupLocation" source="pickupLocation" />
        <ReferenceInput source="rider.id" reference="Rider" label="rider">
          <SelectInput optionText={RiderTitle} />
        </ReferenceInput>
        <DateTimeInput label="startTime" source="startTime" />
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Create>
  );
};
