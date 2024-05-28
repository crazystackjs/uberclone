import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { MoveEmployeeUpdateManyWithoutMovesInput } from "./MoveEmployeeUpdateManyWithoutMovesInput";
import { FeedbackWhereUniqueInput } from "../feedback/FeedbackWhereUniqueInput";
import { InsuranceUpdateManyWithoutMovesInput } from "./InsuranceUpdateManyWithoutMovesInput";
import { ItemUpdateManyWithoutMovesInput } from "./ItemUpdateManyWithoutMovesInput";
import { PaymentUpdateManyWithoutMovesInput } from "./PaymentUpdateManyWithoutMovesInput";
import { RouteUpdateManyWithoutMovesInput } from "./RouteUpdateManyWithoutMovesInput";
import { StorageUpdateManyWithoutMovesInput } from "./StorageUpdateManyWithoutMovesInput";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type MoveUpdateInput = {
  costDistance?: number;
  costVolume?: number;
  customer?: CustomerWhereUniqueInput;
  date?: Date;
  distanceKm?: number;
  employees?: MoveEmployeeUpdateManyWithoutMovesInput;
  feedback?: FeedbackWhereUniqueInput | null;
  insurance?: InsuranceUpdateManyWithoutMovesInput;
  items?: ItemUpdateManyWithoutMovesInput;
  payment?: PaymentUpdateManyWithoutMovesInput;
  route?: RouteUpdateManyWithoutMovesInput;
  status?: string;
  storage?: StorageUpdateManyWithoutMovesInput;
  totalCost?: number;
  vehicle?: VehicleWhereUniqueInput | null;
  volumeM3?: number;
};
