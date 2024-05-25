import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const FollowerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="followedUserId" source="followedUserId" />
        <TextInput label="followerUserId" source="followerUserId" />
      </SimpleForm>
    </Create>
  );
};
