import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ChatTitle } from "../chat/ChatTitle";

export const MessageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="chat.id" reference="Chat" label="Chat">
          <SelectInput optionText={ChatTitle} />
        </ReferenceInput>
        <TextInput label="Content" source="content" />
        <SelectInput
          source="sender"
          label="Sender"
          choices={[
            { label: "CUSTOMER", value: "CUSTOMER" },
            { label: "DRIVER", value: "DRIVER" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
