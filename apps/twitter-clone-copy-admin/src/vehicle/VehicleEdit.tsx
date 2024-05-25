import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const VehicleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="make" source="make" />
        <TextInput label="model" source="model" />
        <NumberInput step={1} label="year" source="year" />
      </SimpleForm>
    </Edit>
  );
};
