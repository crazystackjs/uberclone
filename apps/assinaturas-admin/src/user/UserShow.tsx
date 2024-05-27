import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Password" source="password" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Subscription"
          target="userId"
          label="Subscriptions"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="EndDate" source="endDate" />
            <TextField label="ID" source="id" />
            <TextField label="Plan" source="plan" />
            <TextField label="StartDate" source="startDate" />
            <TextField label="Status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
