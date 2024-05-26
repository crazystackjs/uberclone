import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CUSTOMER_TITLE_FIELD } from "./CustomerTitle";
import { DELIVERYAGENT_TITLE_FIELD } from "../deliveryAgent/DeliveryAgentTitle";
import { VENDOR_TITLE_FIELD } from "../vendor/VendorTitle";

export const CustomerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Phone" source="phone" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Order"
          target="customerId"
          label="Orders"
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
            <ReferenceField
              label="DeliveryAgent"
              source="deliveryagent.id"
              reference="DeliveryAgent"
            >
              <TextField source={DELIVERYAGENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="OrderDate" source="orderDate" />
            <TextField label="OrderNumber" source="orderNumber" />
            <TextField label="Status" source="status" />
            <TextField label="TotalAmount" source="totalAmount" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Vendor"
              source="vendor.id"
              reference="Vendor"
            >
              <TextField source={VENDOR_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
