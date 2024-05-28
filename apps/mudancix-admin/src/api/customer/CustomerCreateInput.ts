import { DiscountCreateNestedManyWithoutCustomersInput } from "./DiscountCreateNestedManyWithoutCustomersInput";
import { FeedbackCreateNestedManyWithoutCustomersInput } from "./FeedbackCreateNestedManyWithoutCustomersInput";
import { MoveCreateNestedManyWithoutCustomersInput } from "./MoveCreateNestedManyWithoutCustomersInput";
import { NotificationCreateNestedManyWithoutCustomersInput } from "./NotificationCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  discount?: DiscountCreateNestedManyWithoutCustomersInput;
  email: string;
  feedbacks?: FeedbackCreateNestedManyWithoutCustomersInput;
  firstName: string;
  lastName: string;
  moves?: MoveCreateNestedManyWithoutCustomersInput;
  notification?: NotificationCreateNestedManyWithoutCustomersInput;
  password: string;
  phone: string;
};
