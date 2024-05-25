import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const RideCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="driverId" source="driverId" />
        <TextInput label="dropoffLocation" source="dropoffLocation" />
        <TextInput label="pickupLocation" source="pickupLocation" />
        <TextInput label="riderId" source="riderId" />
      </SimpleForm>
    </Create>
  );
};
