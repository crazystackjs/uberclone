import { Insurance as TInsurance } from "../api/insurance/Insurance";

export const INSURANCE_TITLE_FIELD = "policyNumber";

export const InsuranceTitle = (record: TInsurance): string => {
  return record.policyNumber?.toString() || String(record.id);
};
