import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const HeatMapZoneCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="description" multiline source="description" />
        <TextInput label="zoneName" source="zoneName" />
      </SimpleForm>
    </Create>
  );
};
