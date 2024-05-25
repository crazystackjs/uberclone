import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const RetweetEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="tweetId" source="tweetId" />
        <TextInput label="userId" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
