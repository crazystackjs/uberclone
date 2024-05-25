import { JsonValue } from "type-fest";
import { Rider } from "../rider/Rider";

export type RideRequest = {
  createdAt: Date;
  destinationLocation: JsonValue;
  id: string;
  pickupLocation: JsonValue;
  rider?: Rider | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
