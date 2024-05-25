import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const HeatMapZoneCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="intensity" source="intensity" />
        <TextInput label="location" source="location" />
        <NumberInput step={1} label="radius" source="radius" />
      </SimpleForm>
    </Create>
  );
};
