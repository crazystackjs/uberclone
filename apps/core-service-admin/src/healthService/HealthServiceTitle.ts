import { HealthService as THealthService } from "../api/healthService/HealthService";

export const HEALTHSERVICE_TITLE_FIELD = "id";

export const HealthServiceTitle = (record: THealthService): string => {
  return record.id?.toString() || String(record.id);
};
