import { SortOrder } from "../../util/SortOrder";

export type MoveOrderByInput = {
  costDistance?: SortOrder;
  costVolume?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  date?: SortOrder;
  distanceKm?: SortOrder;
  feedbackId?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  totalCost?: SortOrder;
  updatedAt?: SortOrder;
  vehicleId?: SortOrder;
  volumeM3?: SortOrder;
};
