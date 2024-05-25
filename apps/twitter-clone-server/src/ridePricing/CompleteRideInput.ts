import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";
import { PaymentStatus } from "./PaymentStatus";

@ArgsType()
class CompleteRideInput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    rideId!: string;

    @Field(() => GraphQLJSON)
    paymentDetails!: InputJsonValue;

    @Field(() => PaymentStatus)
    @ApiProperty({
        required: true,
        enum: PaymentStatus
    })
    paymentStatus!: "Pending" | "Paid" | "Failed";
}

export { CompleteRideInput as CompleteRideInput };