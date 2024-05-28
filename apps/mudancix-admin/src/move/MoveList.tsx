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
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { FEEDBACK_TITLE_FIELD } from "../feedback/FeedbackTitle";
import { VEHICLE_TITLE_FIELD } from "../vehicle/VehicleTitle";

export const MoveList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Moves"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Cost Distance" source="costDistance" />
        <TextField label="Cost Volume" source="costVolume" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Customer"
          source="customer.id"
          reference="Customer"
        >
          <TextField source={CUSTOMER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Date" source="date" />
        <TextField label="Distance Km" source="distanceKm" />
        <ReferenceField
          label="Feedback"
          source="feedback.id"
          reference="Feedback"
        >
          <TextField source={FEEDBACK_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Status" source="status" />
        <TextField label="Total Cost" source="totalCost" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Vehicle" source="vehicle.id" reference="Vehicle">
          <TextField source={VEHICLE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Volume M3" source="volumeM3" />
      </Datagrid>
    </List>
  );
};
