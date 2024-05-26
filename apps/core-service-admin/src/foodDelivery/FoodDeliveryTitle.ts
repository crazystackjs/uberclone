import { FoodDelivery as TFoodDelivery } from "../api/foodDelivery/FoodDelivery";

export const FOODDELIVERY_TITLE_FIELD = "id";

export const FoodDeliveryTitle = (record: TFoodDelivery): string => {
  return record.id?.toString() || String(record.id);
};
