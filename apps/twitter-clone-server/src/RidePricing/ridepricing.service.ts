import { Injectable } from "@nestjs/common";
import { CalculateRidePriceInput } from "../ridePricing/CalculateRidePriceInput";
import { CompleteRideInput } from "../ridePricing/CompleteRideInput";
import { RequestRideInput } from "../ridePricing/RequestRideInput";
import { StartRideInput } from "../ridePricing/StartRideInput";
import { UpdateLocationInput } from "../ridePricing/UpdateLocationInput";

@Injectable()
export class RidePricingService {
  constructor() {}
  async CalculateDynamicPrice(args: CalculateRidePriceInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async CalculateRidePrice(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async CompleteRide(args: CompleteRideInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async RequestRide(args: RequestRideInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async StartRide(args: StartRideInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async UpdateLocation(args: UpdateLocationInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
