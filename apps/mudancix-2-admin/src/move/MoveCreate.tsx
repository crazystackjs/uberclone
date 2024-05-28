import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { BudgetTitle } from "../budget/BudgetTitle";
import { CostSimulationTitle } from "../costSimulation/CostSimulationTitle";
import { CustomerTitle } from "../customer/CustomerTitle";
import { DriverTitle } from "../driver/DriverTitle";
import { GpsDatumTitle } from "../gpsDatum/GpsDatumTitle";
import { RouteTitle } from "../route/RouteTitle";

export const MoveCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="budget.id" reference="Budget" label="Budget">
          <SelectInput optionText={BudgetTitle} />
        </ReferenceInput>
        <DateTimeInput label="Completed At" source="completedAt" />
        <ReferenceArrayInput
          source="costSimulation"
          reference="CostSimulation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CostSimulationTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <TextInput label="Delivery Location" source="deliveryLocation" />
        <NumberInput label="Distance" source="distance" />
        <ReferenceInput source="driver.id" reference="Driver" label="Driver">
          <SelectInput optionText={DriverTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="gpsData"
          reference="GpsDatum"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GpsDatumTitle} />
        </ReferenceArrayInput>
        <TextInput label="Pickup Location" source="pickupLocation" />
        <NumberInput label="Price" source="price" />
        <ReferenceInput source="route.id" reference="Route" label="Route">
          <SelectInput optionText={RouteTitle} />
        </ReferenceInput>
        <DateTimeInput label="Scheduled At" source="scheduledAt" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "PENDING", value: "PENDING" },
            { label: "IN_PROGRESS", value: "IN_PROGRESS" },
            { label: "COMPLETED", value: "COMPLETED" },
            { label: "CANCELED", value: "CANCELED" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput label="Volume" source="volume" />
      </SimpleForm>
    </Create>
  );
};
