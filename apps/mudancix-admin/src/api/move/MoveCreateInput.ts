import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { MoveEmployeeCreateNestedManyWithoutMovesInput } from "./MoveEmployeeCreateNestedManyWithoutMovesInput";
import { FeedbackWhereUniqueInput } from "../feedback/FeedbackWhereUniqueInput";
import { InsuranceCreateNestedManyWithoutMovesInput } from "./InsuranceCreateNestedManyWithoutMovesInput";
import { ItemCreateNestedManyWithoutMovesInput } from "./ItemCreateNestedManyWithoutMovesInput";
import { PaymentCreateNestedManyWithoutMovesInput } from "./PaymentCreateNestedManyWithoutMovesInput";
import { RouteCreateNestedManyWithoutMovesInput } from "./RouteCreateNestedManyWithoutMovesInput";
import { StorageCreateNestedManyWithoutMovesInput } from "./StorageCreateNestedManyWithoutMovesInput";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type MoveCreateInput = {
  costDistance: number;
  costVolume: number;
  customer: CustomerWhereUniqueInput;
  date: Date;
  distanceKm: number;
  employees?: MoveEmployeeCreateNestedManyWithoutMovesInput;
  feedback?: FeedbackWhereUniqueInput | null;
  insurance?: InsuranceCreateNestedManyWithoutMovesInput;
  items?: ItemCreateNestedManyWithoutMovesInput;
  payment?: PaymentCreateNestedManyWithoutMovesInput;
  route?: RouteCreateNestedManyWithoutMovesInput;
  status: string;
  storage?: StorageCreateNestedManyWithoutMovesInput;
  totalCost: number;
  vehicle?: VehicleWhereUniqueInput | null;
  volumeM3: number;
};
