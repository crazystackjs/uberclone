import { FoodDeliveryWhereInput } from "./FoodDeliveryWhereInput";
import { FoodDeliveryOrderByInput } from "./FoodDeliveryOrderByInput";

export type FoodDeliveryFindManyArgs = {
  where?: FoodDeliveryWhereInput;
  orderBy?: Array<FoodDeliveryOrderByInput>;
  skip?: number;
  take?: number;
};
