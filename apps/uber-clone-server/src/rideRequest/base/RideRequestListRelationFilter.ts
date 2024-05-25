/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RideRequestWhereInput } from "./RideRequestWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class RideRequestListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => RideRequestWhereInput,
  })
  @ValidateNested()
  @Type(() => RideRequestWhereInput)
  @IsOptional()
  @Field(() => RideRequestWhereInput, {
    nullable: true,
  })
  every?: RideRequestWhereInput;

  @ApiProperty({
    required: false,
    type: () => RideRequestWhereInput,
  })
  @ValidateNested()
  @Type(() => RideRequestWhereInput)
  @IsOptional()
  @Field(() => RideRequestWhereInput, {
    nullable: true,
  })
  some?: RideRequestWhereInput;

  @ApiProperty({
    required: false,
    type: () => RideRequestWhereInput,
  })
  @ValidateNested()
  @Type(() => RideRequestWhereInput)
  @IsOptional()
  @Field(() => RideRequestWhereInput, {
    nullable: true,
  })
  none?: RideRequestWhereInput;
}
export { RideRequestListRelationFilter as RideRequestListRelationFilter };
