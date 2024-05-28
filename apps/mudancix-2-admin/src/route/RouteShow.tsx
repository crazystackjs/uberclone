import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { MOVE_TITLE_FIELD } from "../move/MoveTitle";

export const RouteShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="End Location" source="endLocation" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Move" source="move.id" reference="Move">
          <TextField source={MOVE_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField label="Optimized" source="optimized" />
        <TextField label="Start Location" source="startLocation" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Waypoints" source="waypoints" />
      </SimpleShowLayout>
    </Show>
  );
};
