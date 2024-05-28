import { MoveWhereUniqueInput } from "../move/MoveWhereUniqueInput";

export type StorageCreateInput = {
  cost: number;
  endDate: Date;
  location: string;
  move: MoveWhereUniqueInput;
  startDate: Date;
};
