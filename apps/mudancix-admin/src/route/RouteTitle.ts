import { Route as TRoute } from "../api/route/Route";

export const ROUTE_TITLE_FIELD = "destination";

export const RouteTitle = (record: TRoute): string => {
  return record.destination?.toString() || String(record.id);
};
