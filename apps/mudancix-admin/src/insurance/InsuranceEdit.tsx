import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { MoveTitle } from "../move/MoveTitle";

export const InsuranceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Cost" source="cost" />
        <NumberInput label="Coverage Amount" source="coverageAmount" />
        <ReferenceInput source="move.id" reference="Move" label="Move">
          <SelectInput optionText={MoveTitle} />
        </ReferenceInput>
        <TextInput label="Policy Number" source="policyNumber" />
        <TextInput label="Provider" source="provider" />
      </SimpleForm>
    </Edit>
  );
};
