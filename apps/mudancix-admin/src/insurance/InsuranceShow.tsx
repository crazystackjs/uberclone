import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { MOVE_TITLE_FIELD } from "../move/MoveTitle";

export const InsuranceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Cost" source="cost" />
        <TextField label="Coverage Amount" source="coverageAmount" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Move" source="move.id" reference="Move">
          <TextField source={MOVE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Policy Number" source="policyNumber" />
        <TextField label="Provider" source="provider" />
      </SimpleShowLayout>
    </Show>
  );
};
