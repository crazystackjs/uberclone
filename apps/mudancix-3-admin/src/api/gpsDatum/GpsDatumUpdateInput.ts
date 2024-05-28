import { InputJsonValue } from "../../types";
import { MoveWhereUniqueInput } from "../move/MoveWhereUniqueInput";

export type GpsDatumUpdateInput = {
  location?: InputJsonValue;
  move?: MoveWhereUniqueInput;
  timestamp?: Date;
};
