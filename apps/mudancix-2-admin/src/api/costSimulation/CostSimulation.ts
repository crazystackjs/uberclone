import { JsonValue } from "type-fest";
import { Move } from "../move/Move";

export type CostSimulation = {
  additionalServices: JsonValue;
  createdAt: Date;
  distance: number;
  id: string;
  move?: Move;
  totalCost: number;
  updatedAt: Date;
  volume: number;
};
