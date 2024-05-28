import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { MoveTitle } from "../move/MoveTitle";

export const GpsDatumCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <ReferenceInput source="move.id" reference="Move" label="Move">
          <SelectInput optionText={MoveTitle} />
        </ReferenceInput>
        <DateTimeInput label="Timestamp" source="timestamp" />
      </SimpleForm>
    </Create>
  );
};
