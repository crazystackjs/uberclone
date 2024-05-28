import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { MoveTitle } from "../move/MoveTitle";

export const RouteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="End Location" source="endLocation" />
        <ReferenceInput source="move.id" reference="Move" label="Move">
          <SelectInput optionText={MoveTitle} />
        </ReferenceInput>
        <BooleanInput label="Optimized" source="optimized" />
        <TextInput label="Start Location" source="startLocation" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
