import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const HeatMapZoneEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="intensity" source="intensity" />
        <TextInput label="location" source="location" />
        <NumberInput step={1} label="radius" source="radius" />
      </SimpleForm>
    </Edit>
  );
};
