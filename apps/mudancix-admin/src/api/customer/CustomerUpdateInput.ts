import { DiscountUpdateManyWithoutCustomersInput } from "./DiscountUpdateManyWithoutCustomersInput";
import { FeedbackUpdateManyWithoutCustomersInput } from "./FeedbackUpdateManyWithoutCustomersInput";
import { MoveUpdateManyWithoutCustomersInput } from "./MoveUpdateManyWithoutCustomersInput";
import { NotificationUpdateManyWithoutCustomersInput } from "./NotificationUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  discount?: DiscountUpdateManyWithoutCustomersInput;
  email?: string;
  feedbacks?: FeedbackUpdateManyWithoutCustomersInput;
  firstName?: string;
  lastName?: string;
  moves?: MoveUpdateManyWithoutCustomersInput;
  notification?: NotificationUpdateManyWithoutCustomersInput;
  password?: string;
  phone?: string;
};
