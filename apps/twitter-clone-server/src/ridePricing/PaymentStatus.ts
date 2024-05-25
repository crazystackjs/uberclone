import { registerEnumType } from "@nestjs/graphql";

export enum PaymentStatus {
    Pending = "Pending",
    Paid = "Paid",
    Failed = "Failed"
}

registerEnumType(PaymentStatus, {
    name: "PaymentStatus",
  });