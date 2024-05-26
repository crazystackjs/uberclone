import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { DELIVERYAGENT_TITLE_FIELD } from "../deliveryAgent/DeliveryAgentTitle";
import { VENDOR_TITLE_FIELD } from "../vendor/VendorTitle";

export const OrderList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Orders"}
      perPage={50}
      pagination={<Pagination />}
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
        <ReferenceField label="Vendor" source="vendor.id" reference="Vendor">
          <TextField source={VENDOR_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
