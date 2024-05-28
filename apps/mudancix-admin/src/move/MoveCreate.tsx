import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";
import { MoveEmployeeTitle } from "../moveEmployee/MoveEmployeeTitle";
import { FeedbackTitle } from "../feedback/FeedbackTitle";
import { InsuranceTitle } from "../insurance/InsuranceTitle";
import { ItemTitle } from "../item/ItemTitle";
import { PaymentTitle } from "../payment/PaymentTitle";
import { RouteTitle } from "../route/RouteTitle";
import { StorageTitle } from "../storage/StorageTitle";
import { VehicleTitle } from "../vehicle/VehicleTitle";

export const MoveCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Cost Distance" source="costDistance" />
        <NumberInput label="Cost Volume" source="costVolume" />
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <DateTimeInput label="Date" source="date" />
        <NumberInput label="Distance Km" source="distanceKm" />
        <ReferenceArrayInput
          source="employees"
          reference="MoveEmployee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MoveEmployeeTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="feedback.id"
          reference="Feedback"
          label="Feedback"
        >
          <SelectInput optionText={FeedbackTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="insurance"
          reference="Insurance"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InsuranceTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="items"
          reference="Item"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ItemTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="payment"
          reference="Payment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="route"
          reference="Route"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RouteTitle} />
        </ReferenceArrayInput>
        <TextInput label="Status" source="status" />
        <ReferenceArrayInput
          source="storage"
          reference="Storage"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StorageTitle} />
        </ReferenceArrayInput>
        <NumberInput label="Total Cost" source="totalCost" />
        <ReferenceInput source="vehicle.id" reference="Vehicle" label="Vehicle">
          <SelectInput optionText={VehicleTitle} />
        </ReferenceInput>
        <NumberInput label="Volume M3" source="volumeM3" />
      </SimpleForm>
    </Create>
  );
};
