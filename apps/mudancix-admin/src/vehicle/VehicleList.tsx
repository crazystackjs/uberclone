import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const VehicleList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Vehicles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Capacity M3" source="capacityM3" />
        <TextField label="ID" source="id" />
        <TextField label="License Plate" source="licensePlate" />
        <TextField label="Make" source="make" />
        <TextField label="Model" source="model" />
      </Datagrid>
    </List>
  );
};
