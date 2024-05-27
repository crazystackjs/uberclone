import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { VideoTitle } from "../video/VideoTitle";

export const SessionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Title" source="title" />
        <ReferenceInput source="video.id" reference="Video" label="Video">
          <SelectInput optionText={VideoTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
