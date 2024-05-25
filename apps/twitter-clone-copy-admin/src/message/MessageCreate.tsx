import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const MessageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="recipientUserId" source="recipientUserId" />
        <TextInput label="senderUserId" source="senderUserId" />
        <TextInput label="text" multiline source="text" />
      </SimpleForm>
    </Create>
  );
};
