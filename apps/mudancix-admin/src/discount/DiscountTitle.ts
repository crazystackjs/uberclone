import { Discount as TDiscount } from "../api/discount/Discount";

export const DISCOUNT_TITLE_FIELD = "description";

export const DiscountTitle = (record: TDiscount): string => {
  return record.description?.toString() || String(record.id);
};
