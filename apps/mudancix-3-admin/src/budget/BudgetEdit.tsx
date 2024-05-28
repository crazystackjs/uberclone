import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { BudgetItemTitle } from "../budgetItem/BudgetItemTitle";
import { MoveTitle } from "../move/MoveTitle";

export const BudgetEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="budgetItems"
          reference="BudgetItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BudgetItemTitle} />
        </ReferenceArrayInput>
        <TextInput label="Customer Email" source="customerEmail" />
        <TextInput label="Customer Name" source="customerName" />
        <TextInput label="Customer Phone" source="customerPhone" />
        <TextInput label="Customer Whatsapp" source="customerWhatsapp" />
        <TextInput
          label="Destination Location Type"
          source="destinationLocationType"
        />
        <BooleanInput label="Exclusive Truck" source="exclusiveTruck" />
        <BooleanInput label="Flexible Date" source="flexibleDate" />
        <BooleanInput label="Hoisting" source="hoisting" />
        <BooleanInput label="Insurance" source="insurance" />
        <ReferenceInput source="move.id" reference="Move" label="Move">
          <SelectInput optionText={MoveTitle} />
        </ReferenceInput>
        <TextInput label="Origin Location Type" source="originLocationType" />
        <TextInput label="Special Instructions" source="specialInstructions" />
        <BooleanInput label="Terms Accepted" source="termsAccepted" />
      </SimpleForm>
    </Edit>
  );
};
