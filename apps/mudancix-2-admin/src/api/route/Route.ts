import { Move } from "../move/Move";
import { JsonValue } from "type-fest";

export type Route = {
  createdAt: Date;
  endLocation: string;
  id: string;
  move?: Move;
  optimized: boolean;
  startLocation: string;
  updatedAt: Date;
  waypoints: JsonValue;
};
