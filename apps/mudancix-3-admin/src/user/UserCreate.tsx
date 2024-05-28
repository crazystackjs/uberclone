import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
} from "react-admin";

import { RatingTitle } from "../rating/RatingTitle";
import { SupportTicketTitle } from "../supportTicket/SupportTicketTitle";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" />
        <TextInput label="Name" source="name" />
        <TextInput label="Password" source="password" />
        <TextInput label="Phone Number" source="phoneNumber" />
        <ReferenceArrayInput
          source="ratingsGiven"
          reference="Rating"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RatingTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="ratingsReceived"
          reference="Rating"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RatingTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="role"
          label="Role"
          choices={[
            { label: "ADMIN", value: "ADMIN" },
            { label: "DRIVER", value: "DRIVER" },
            { label: "CUSTOMER", value: "CUSTOMER" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput
          source="supportTicket"
          reference="SupportTicket"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SupportTicketTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
