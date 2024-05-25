import { Driver } from "../driver/Driver";
import { JsonValue } from "type-fest";
import { Rider } from "../rider/Rider";

export type Ride = {
  createdAt: Date;
  driver?: Driver | null;
  endLocation: JsonValue;
  id: string;
  rider?: Rider | null;
  startLocation: JsonValue;
  status?: "Option1" | null;
  updatedAt: Date;
};
