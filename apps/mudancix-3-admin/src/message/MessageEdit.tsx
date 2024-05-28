import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ChatTitle } from "../chat/ChatTitle";

export const MessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
