import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

import { BudgetTitle } from "../budget/BudgetTitle";

export const BudgetItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput
          label="Additional Requirements"
          source="additionalRequirements"
        />
        <ReferenceInput source="budget.id" reference="Budget" label="Budget">
          <SelectInput optionText={BudgetTitle} />
        </ReferenceInput>
        <SelectInput
          source="category"
          label="Category"
          choices={[
            { label: "ESTAR_E_JANTAR", value: "ESTAR_E_JANTAR" },
            { label: "DORMITORIO", value: "DORMITORIO" },
            { label: "COZINHA_AREA", value: "COZINHA_AREA" },
            { label: "VEICULOS", value: "VEICULOS" },
            { label: "ESCRITORIO", value: "ESCRITORIO" },
            { label: "DIVERSOS", value: "DIVERSOS" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Item Name" source="itemName" />
        <BooleanInput label="Needs Packing" source="needsPacking" />
        <BooleanInput label="Needs Temp Control" source="needsTempControl" />
        <TextInput label="Photo Url" source="photoUrl" />
        <NumberInput step={1} label="Quantity" source="quantity" />
      </SimpleForm>
    </Edit>
  );
};
