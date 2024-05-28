import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { DriverTitle } from "../driver/DriverTitle";

export const VehicleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
