import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { MoveTitle } from "../move/MoveTitle";

export const CostSimulationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <NumberInput label="Distance" source="distance" />
        <ReferenceInput source="move.id" reference="Move" label="Move">
          <SelectInput optionText={MoveTitle} />
        </ReferenceInput>
        <NumberInput label="Total Cost" source="totalCost" />
        <NumberInput label="Volume" source="volume" />
      </SimpleForm>
    </Edit>
  );
};
