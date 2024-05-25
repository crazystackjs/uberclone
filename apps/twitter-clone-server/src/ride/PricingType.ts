import { registerEnumType } from "@nestjs/graphql";

export enum PricingType {
    Fixed = "Fixed",
    Dynamic = "Dynamic"
}

registerEnumType(PricingType, {
    name: "PricingType",
  });