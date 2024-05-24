import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { DriverTitle } from "../driver/DriverTitle";
import { RiderTitle } from "../rider/RiderTitle";

export const RideEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="accepted" source="accepted" />
        <div />
        <NumberInput label="baseFare" source="baseFare" />
        <DateTimeInput label="completedAt" source="completedAt" />
        <BooleanInput label="creditCardVerified" source="creditCardVerified" />
        <div />
        <NumberInput label="demandMultiplier" source="demandMultiplier" />
        <ReferenceInput source="driver.id" reference="Driver" label="driver">
          <SelectInput optionText={DriverTitle} />
        </ReferenceInput>
        <TextInput label="dropoffLocation" source="dropoffLocation" />
        <DateTimeInput label="endTime" source="endTime" />
        <NumberInput label="fare" source="fare" />
        <TextInput label="heatMapZone" source="heatMapZone" />
        <div />
        <SelectInput
          source="paymentStatus"
          label="paymentStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="perKmRate" source="perKmRate" />
        <TextInput label="pickupLocation" source="pickupLocation" />
        <SelectInput
          source="pricingType"
          label="pricingType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="radius" source="radius" />
        <DateTimeInput label="requestedAt" source="requestedAt" />
        <ReferenceInput source="rider.id" reference="Rider" label="rider">
          <SelectInput optionText={RiderTitle} />
        </ReferenceInput>
        <NumberInput label="serviceFee" source="serviceFee" />
        <DateTimeInput label="startTime" source="startTime" />
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Edit>
  );
};
