import { Move } from "../move/Move";

export type Storage = {
  cost: number;
  endDate: Date;
  id: number;
  location: string;
  move?: Move;
  startDate: Date;
};
