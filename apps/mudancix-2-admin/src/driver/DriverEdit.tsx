import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { MoveTitle } from "../move/MoveTitle";
import { VehicleTitle } from "../vehicle/VehicleTitle";

export const DriverEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" />
        <BooleanInput label="Is Available" source="isAvailable" />
        <ReferenceArrayInput
          source="moves"
          reference="Move"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MoveTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <TextInput label="Phone Number" source="phoneNumber" />
        <NumberInput label="Total Earnings" source="totalEarnings" />
        <ReferenceInput source="vehicle.id" reference="Vehicle" label="Vehicle">
          <SelectInput optionText={VehicleTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
