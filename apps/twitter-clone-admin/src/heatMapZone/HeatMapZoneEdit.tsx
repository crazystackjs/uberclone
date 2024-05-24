import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const HeatMapZoneEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="description" multiline source="description" />
        <TextInput label="zoneName" source="zoneName" />
      </SimpleForm>
    </Edit>
  );
};
