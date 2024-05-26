import { ECommerceProgram as TECommerceProgram } from "../api/eCommerceProgram/ECommerceProgram";

export const ECOMMERCEPROGRAM_TITLE_FIELD = "id";

export const ECommerceProgramTitle = (record: TECommerceProgram): string => {
  return record.id?.toString() || String(record.id);
};
