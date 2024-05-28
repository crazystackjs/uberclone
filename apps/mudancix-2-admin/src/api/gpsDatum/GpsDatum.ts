import { JsonValue } from "type-fest";
import { Move } from "../move/Move";

export type GpsDatum = {
  createdAt: Date;
  id: string;
  location: JsonValue;
  move?: Move;
  timestamp: Date;
};
