import { BudgetWhereUniqueInput } from "../budget/BudgetWhereUniqueInput";
import { CostSimulationUpdateManyWithoutMovesInput } from "./CostSimulationUpdateManyWithoutMovesInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { GpsDatumUpdateManyWithoutMovesInput } from "./GpsDatumUpdateManyWithoutMovesInput";
import { PaymentUpdateManyWithoutMovesInput } from "./PaymentUpdateManyWithoutMovesInput";
import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";

export type MoveUpdateInput = {
  budget?: BudgetWhereUniqueInput | null;
  completedAt?: Date | null;
  costSimulation?: CostSimulationUpdateManyWithoutMovesInput;
  customer?: CustomerWhereUniqueInput;
  deliveryLocation?: string;
  distance?: number;
  driver?: DriverWhereUniqueInput | null;
  gpsData?: GpsDatumUpdateManyWithoutMovesInput;
  payments?: PaymentUpdateManyWithoutMovesInput;
  pickupLocation?: string;
  price?: number;
  route?: RouteWhereUniqueInput | null;
  scheduledAt?: Date;
  status?: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "CANCELED";
  volume?: number;
};
