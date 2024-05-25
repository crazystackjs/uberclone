import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const LikeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="tweetId" source="tweetId" />
        <TextInput label="userId" source="userId" />
      </SimpleForm>
    </Create>
  );
};
