import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { MoveTitle } from "../move/MoveTitle";

export const CostSimulationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <NumberInput label="Distance" source="distance" />
        <ReferenceInput source="move.id" reference="Move" label="Move">
          <SelectInput optionText={MoveTitle} />
        </ReferenceInput>
        <NumberInput label="Total Cost" source="totalCost" />
        <NumberInput label="Volume" source="volume" />
      </SimpleForm>
    </Create>
  );
};
