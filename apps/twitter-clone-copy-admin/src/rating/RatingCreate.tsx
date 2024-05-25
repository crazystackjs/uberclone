import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TweetTitle } from "../tweet/TweetTitle";
import { UserTitle } from "../user/UserTitle";

export const RatingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="comments" multiline source="comments" />
        <NumberInput step={1} label="ratingScore" source="ratingScore" />
        <TextInput label="ratingTweet" source="ratingTweet" />
        <TextInput label="ratingUser" source="ratingUser" />
        <NumberInput step={1} label="ratingValue" source="ratingValue" />
        <TextInput label="relatedTweet" source="relatedTweet" />
        <TextInput label="relatedUser" source="relatedUser" />
        <TextInput label="review" multiline source="review" />
        <TextInput label="reviewText" multiline source="reviewText" />
        <ReferenceInput source="tweet.id" reference="Tweet" label="tweet">
          <SelectInput optionText={TweetTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="value" source="value" />
      </SimpleForm>
    </Create>
  );
};
