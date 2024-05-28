import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { MoveTitle } from "../move/MoveTitle";

export const InsuranceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Cost" source="cost" />
        <NumberInput label="Coverage Amount" source="coverageAmount" />
        <ReferenceInput source="move.id" reference="Move" label="Move">
          <SelectInput optionText={MoveTitle} />
        </ReferenceInput>
        <TextInput label="Policy Number" source="policyNumber" />
        <TextInput label="Provider" source="provider" />
      </SimpleForm>
    </Create>
  );
};
