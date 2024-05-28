import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { MOVE_TITLE_FIELD } from "../move/MoveTitle";

export const RouteList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Routes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
