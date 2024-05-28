import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { MoveTitle } from "../move/MoveTitle";

export const RouteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="End Location" source="endLocation" />
        <ReferenceInput source="move.id" reference="Move" label="Move">
          <SelectInput optionText={MoveTitle} />
        </ReferenceInput>
        <BooleanInput label="Optimized" source="optimized" />
        <TextInput label="Start Location" source="startLocation" />
        <div />
      </SimpleForm>
    </Create>
  );
};
