import { Discount } from "../discount/Discount";
import { Feedback } from "../feedback/Feedback";
import { Move } from "../move/Move";
import { Notification } from "../notification/Notification";

export type Customer = {
  discount?: Array<Discount>;
  email: string;
  feedbacks?: Array<Feedback>;
  firstName: string;
  id: number;
  lastName: string;
  moves?: Array<Move>;
  notification?: Array<Notification>;
  password: string;
  phone: string;
};
