import { MoveWhereUniqueInput } from "../move/MoveWhereUniqueInput";

export type StorageUpdateInput = {
  cost?: number;
  endDate?: Date;
  location?: string;
  move?: MoveWhereUniqueInput;
  startDate?: Date;
};
