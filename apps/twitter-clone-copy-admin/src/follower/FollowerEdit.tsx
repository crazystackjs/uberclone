import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const FollowerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="followedUserId" source="followedUserId" />
        <TextInput label="followerUserId" source="followerUserId" />
      </SimpleForm>
    </Edit>
  );
};
