import { InputJsonValue } from "../../types";
import { MoveWhereUniqueInput } from "../move/MoveWhereUniqueInput";

export type GpsDatumCreateInput = {
  location: InputJsonValue;
  move: MoveWhereUniqueInput;
  timestamp: Date;
};
