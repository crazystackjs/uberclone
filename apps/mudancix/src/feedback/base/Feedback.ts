/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested, IsInt } from "class-validator";
import { Customer } from "../../customer/base/Customer";
import { Type } from "class-transformer";
import { Move } from "../../move/base/Move";

@ObjectType()
class Feedback {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  comments!: string | null;

  @ApiProperty({
    required: true,
    type: () => Customer,
  })
  @ValidateNested()
  @Type(() => Customer)
  customer?: Customer;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  id!: number;

  @ApiProperty({
    required: true,
    type: () => Move,
  })
  @ValidateNested()
  @Type(() => Move)
  move?: Move;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  rating!: number;
}

export { Feedback as Feedback };
