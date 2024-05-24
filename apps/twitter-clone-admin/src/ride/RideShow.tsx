import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { DRIVER_TITLE_FIELD } from "../driver/DriverTitle";
import { RIDER_TITLE_FIELD } from "../rider/RiderTitle";

export const RideShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="driver" source="driver.id" reference="Driver">
          <TextField source={DRIVER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="dropoffLocation" source="dropoffLocation" />
        <TextField label="endTime" source="endTime" />
        <TextField label="fare" source="fare" />
        <TextField label="ID" source="id" />
        <TextField label="pickupLocation" source="pickupLocation" />
        <ReferenceField label="rider" source="rider.id" reference="Rider">
          <TextField source={RIDER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="startTime" source="startTime" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
