import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { MOVE_TITLE_FIELD } from "../move/MoveTitle";

export const BudgetList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Budgets"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Customer Email" source="customerEmail" />
        <TextField label="Customer Name" source="customerName" />
        <TextField label="Customer Phone" source="customerPhone" />
        <TextField label="Customer Whatsapp" source="customerWhatsapp" />
        <TextField
          label="Destination Location Type"
          source="destinationLocationType"
        />
        <BooleanField label="Exclusive Truck" source="exclusiveTruck" />
        <BooleanField label="Flexible Date" source="flexibleDate" />
        <BooleanField label="Hoisting" source="hoisting" />
        <TextField label="ID" source="id" />
        <BooleanField label="Insurance" source="insurance" />
        <ReferenceField label="Move" source="move.id" reference="Move">
          <TextField source={MOVE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Origin Location Type" source="originLocationType" />
        <TextField label="Special Instructions" source="specialInstructions" />
        <BooleanField label="Terms Accepted" source="termsAccepted" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
