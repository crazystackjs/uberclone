import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ArgsType()
class UpdateLocationInput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    rideId!: string;

    @Field(() => GraphQLJSON)
    currentLocation!: InputJsonValue;
}

export { UpdateLocationInput as UpdateLocationInput };