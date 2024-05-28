import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { MOVE_TITLE_FIELD } from "../move/MoveTitle";

export const CostSimulationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Additional Services" source="additionalServices" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Distance" source="distance" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Move" source="move.id" reference="Move">
          <TextField source={MOVE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Total Cost" source="totalCost" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Volume" source="volume" />
      </SimpleShowLayout>
    </Show>
  );
};
