import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { DriverTitle } from "../driver/DriverTitle";

export const VehicleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="driver"
          reference="Driver"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DriverTitle} />
        </ReferenceArrayInput>
        <TextInput label="Make" source="make" />
        <TextInput label="Model" source="model" />
        <TextInput label="Plate Number" source="plateNumber" />
      </SimpleForm>
    </Create>
  );
};
