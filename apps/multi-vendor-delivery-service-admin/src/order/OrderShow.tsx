import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { DELIVERYAGENT_TITLE_FIELD } from "../deliveryAgent/DeliveryAgentTitle";
import { VENDOR_TITLE_FIELD } from "../vendor/VendorTitle";

export const OrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceField label="Vendor" source="vendor.id" reference="Vendor">
          <TextField source={VENDOR_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
