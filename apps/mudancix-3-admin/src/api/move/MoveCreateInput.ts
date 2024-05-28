import { BudgetWhereUniqueInput } from "../budget/BudgetWhereUniqueInput";
import { CostSimulationCreateNestedManyWithoutMovesInput } from "./CostSimulationCreateNestedManyWithoutMovesInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { GpsDatumCreateNestedManyWithoutMovesInput } from "./GpsDatumCreateNestedManyWithoutMovesInput";
import { PaymentCreateNestedManyWithoutMovesInput } from "./PaymentCreateNestedManyWithoutMovesInput";
import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";

export type MoveCreateInput = {
  budget?: BudgetWhereUniqueInput | null;
  completedAt?: Date | null;
  costSimulation?: CostSimulationCreateNestedManyWithoutMovesInput;
  customer: CustomerWhereUniqueInput;
  deliveryLocation: string;
  distance: number;
  driver?: DriverWhereUniqueInput | null;
  gpsData?: GpsDatumCreateNestedManyWithoutMovesInput;
  payments?: PaymentCreateNestedManyWithoutMovesInput;
  pickupLocation: string;
  price: number;
  route?: RouteWhereUniqueInput | null;
  scheduledAt: Date;
  status: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "CANCELED";
  volume: number;
};
