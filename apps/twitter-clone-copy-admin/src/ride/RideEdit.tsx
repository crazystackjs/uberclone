import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const RideEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="driverId" source="driverId" />
        <TextInput label="dropoffLocation" source="dropoffLocation" />
        <TextInput label="pickupLocation" source="pickupLocation" />
        <TextInput label="riderId" source="riderId" />
      </SimpleForm>
    </Edit>
  );
};
