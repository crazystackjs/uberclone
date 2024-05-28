import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const RatingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Comment" source="comment" />
        <ReferenceInput source="ratee.id" reference="User" label="Ratee">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="rater.id" reference="User" label="Rater">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Rating" source="rating" />
      </SimpleForm>
    </Create>
  );
};
