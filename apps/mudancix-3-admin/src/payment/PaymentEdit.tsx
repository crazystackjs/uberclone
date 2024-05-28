import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CustomerTitle } from "../customer/CustomerTitle";
import { DriverTitle } from "../driver/DriverTitle";
import { MoveTitle } from "../move/MoveTitle";

export const PaymentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <ReferenceInput source="driver.id" reference="Driver" label="Driver">
          <SelectInput optionText={DriverTitle} />
        </ReferenceInput>
        <SelectInput
          source="method"
          label="Method"
          choices={[
            { label: "CREDIT_CARD", value: "CREDIT_CARD" },
            { label: "DEBIT_CARD", value: "DEBIT_CARD" },
            { label: "PAYPAL", value: "PAYPAL" },
            { label: "BANK_TRANSFER", value: "BANK_TRANSFER" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput source="move.id" reference="Move" label="Move">
          <SelectInput optionText={MoveTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "PENDING", value: "PENDING" },
            { label: "COMPLETED", value: "COMPLETED" },
            { label: "FAILED", value: "FAILED" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
