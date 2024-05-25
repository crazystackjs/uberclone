import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const HeatMapZoneList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"HeatMapZones"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="intensity" source="intensity" />
        <TextField label="location" source="location" />
        <TextField label="radius" source="radius" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
