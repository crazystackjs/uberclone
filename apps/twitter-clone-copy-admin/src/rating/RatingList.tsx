import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { TWEET_TITLE_FIELD } from "../tweet/TweetTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const RatingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Ratings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="comments" source="comments" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="ratingScore" source="ratingScore" />
        <TextField label="ratingTweet" source="ratingTweet" />
        <TextField label="ratingUser" source="ratingUser" />
        <TextField label="ratingValue" source="ratingValue" />
        <TextField label="relatedTweet" source="relatedTweet" />
        <TextField label="relatedUser" source="relatedUser" />
        <TextField label="review" source="review" />
        <TextField label="reviewText" source="reviewText" />
        <ReferenceField label="tweet" source="tweet.id" reference="Tweet">
          <TextField source={TWEET_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="value" source="value" />
      </Datagrid>
    </List>
  );
};
