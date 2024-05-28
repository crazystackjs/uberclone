import { DiscountListRelationFilter } from "../discount/DiscountListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FeedbackListRelationFilter } from "../feedback/FeedbackListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { MoveListRelationFilter } from "../move/MoveListRelationFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";

export type CustomerWhereInput = {
  discount?: DiscountListRelationFilter;
  email?: StringFilter;
  feedbacks?: FeedbackListRelationFilter;
  firstName?: StringFilter;
  id?: IntFilter;
  lastName?: StringFilter;
  moves?: MoveListRelationFilter;
  notification?: NotificationListRelationFilter;
  password?: StringFilter;
  phone?: StringFilter;
};
