/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { RideRequestWhereUniqueInput } from "../../rideRequest/base/RideRequestWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class RideRequestUpdateManyWithoutRidersInput {
  @Field(() => [RideRequestWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RideRequestWhereUniqueInput],
  })
  connect?: Array<RideRequestWhereUniqueInput>;

  @Field(() => [RideRequestWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RideRequestWhereUniqueInput],
  })
  disconnect?: Array<RideRequestWhereUniqueInput>;

  @Field(() => [RideRequestWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RideRequestWhereUniqueInput],
  })
  set?: Array<RideRequestWhereUniqueInput>;
}

export { RideRequestUpdateManyWithoutRidersInput as RideRequestUpdateManyWithoutRidersInput };
