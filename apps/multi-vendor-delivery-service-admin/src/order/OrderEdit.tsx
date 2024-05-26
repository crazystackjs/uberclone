import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";
import { DeliveryAgentTitle } from "../deliveryAgent/DeliveryAgentTitle";
import { VendorTitle } from "../vendor/VendorTitle";

export const OrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="deliveryAgent.id"
          reference="DeliveryAgent"
          label="DeliveryAgent"
        >
          <SelectInput optionText={DeliveryAgentTitle} />
        </ReferenceInput>
        <DateTimeInput label="OrderDate" source="orderDate" />
        <TextInput label="OrderNumber" source="orderNumber" />
        <SelectInput
          source="status"
          label="Status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="TotalAmount" source="totalAmount" />
        <ReferenceInput source="vendor.id" reference="Vendor" label="Vendor">
          <SelectInput optionText={VendorTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
