import { Budget } from "../budget/Budget";
import { CostSimulation } from "../costSimulation/CostSimulation";
import { Customer } from "../customer/Customer";
import { Driver } from "../driver/Driver";
import { GpsDatum } from "../gpsDatum/GpsDatum";
import { Route } from "../route/Route";

export type Move = {
  budget?: Budget | null;
  completedAt: Date | null;
  costSimulation?: Array<CostSimulation>;
  createdAt: Date;
  customer?: Customer;
  deliveryLocation: string;
  distance: number;
  driver?: Driver | null;
  gpsData?: Array<GpsDatum>;
  id: string;
  pickupLocation: string;
  price: number;
  route?: Route | null;
  scheduledAt: Date;
  status?: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "CANCELED";
  updatedAt: Date;
  volume: number;
};
