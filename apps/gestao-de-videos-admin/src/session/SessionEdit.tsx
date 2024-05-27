import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { VideoTitle } from "../video/VideoTitle";

export const SessionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Title" source="title" />
        <ReferenceInput source="video.id" reference="Video" label="Video">
          <SelectInput optionText={VideoTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
