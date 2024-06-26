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
import { RideWhereInput } from "./RideWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class RideListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => RideWhereInput,
  })
  @ValidateNested()
  @Type(() => RideWhereInput)
  @IsOptional()
  @Field(() => RideWhereInput, {
    nullable: true,
  })
  every?: RideWhereInput;

  @ApiProperty({
    required: false,
    type: () => RideWhereInput,
  })
  @ValidateNested()
  @Type(() => RideWhereInput)
  @IsOptional()
  @Field(() => RideWhereInput, {
    nullable: true,
  })
  some?: RideWhereInput;

  @ApiProperty({
    required: false,
    type: () => RideWhereInput,
  })
  @ValidateNested()
  @Type(() => RideWhereInput)
  @IsOptional()
  @Field(() => RideWhereInput, {
    nullable: true,
  })
  none?: RideWhereInput;
}
export { RideListRelationFilter as RideListRelationFilter };
