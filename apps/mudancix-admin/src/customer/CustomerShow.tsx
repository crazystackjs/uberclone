import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  DateField,
  BooleanField,
} from "react-admin";

import { CUSTOMER_TITLE_FIELD } from "./CustomerTitle";
import { MOVE_TITLE_FIELD } from "../move/MoveTitle";
import { FEEDBACK_TITLE_FIELD } from "../feedback/FeedbackTitle";
import { VEHICLE_TITLE_FIELD } from "../vehicle/VehicleTitle";

export const CustomerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Password" source="password" />
        <TextField label="Phone" source="phone" />
        <ReferenceManyField
          reference="Discount"
          target="customerId"
          label="Discounts"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Customer"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="Percentage" source="percentage" />
            <TextField label="Valid Until" source="validUntil" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Feedback"
          target="customerId"
          label="Feedbacks"
        >
          <Datagrid rowClick="show">
            <TextField label="Comments" source="comments" />
            <ReferenceField
              label="Customer"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField label="Move" source="move.id" reference="Move">
              <TextField source={MOVE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Rating" source="rating" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Move" target="customerId" label="Moves">
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
            <ReferenceField
              label="Vehicle"
              source="vehicle.id"
              reference="Vehicle"
            >
              <TextField source={VEHICLE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Volume M3" source="volumeM3" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Notification"
          target="customerId"
          label="Notifications"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Customer"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Message" source="message" />
            <BooleanField label="Read" source="read" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
