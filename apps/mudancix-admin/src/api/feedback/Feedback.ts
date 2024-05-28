import { Customer } from "../customer/Customer";
import { Move } from "../move/Move";

export type Feedback = {
  comments: string | null;
  customer?: Customer;
  id: number;
  move?: Move;
  rating: number;
};
