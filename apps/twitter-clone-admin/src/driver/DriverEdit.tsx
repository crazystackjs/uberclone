import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RideTitle } from "../ride/RideTitle";
import { VehicleTitle } from "../vehicle/VehicleTitle";

export const DriverEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="name" source="name" />
        <TextInput label="phoneNumber" source="phoneNumber" />
        <ReferenceArrayInput
          source="rides"
          reference="Ride"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RideTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="vehicle.id" reference="Vehicle" label="vehicle">
          <SelectInput optionText={VehicleTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="vehicles"
          reference="Vehicle"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VehicleTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
