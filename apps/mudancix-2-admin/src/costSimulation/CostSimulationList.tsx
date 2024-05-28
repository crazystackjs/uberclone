import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MOVE_TITLE_FIELD } from "../move/MoveTitle";

export const CostSimulationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CostSimulations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
