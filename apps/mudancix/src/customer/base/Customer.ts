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
import { Discount } from "../../discount/base/Discount";
import { ValidateNested, IsOptional, IsString, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { Feedback } from "../../feedback/base/Feedback";
import { Move } from "../../move/base/Move";
import { Notification } from "../../notification/base/Notification";

@ObjectType()
class Customer {
  @ApiProperty({
    required: false,
    type: () => [Discount],
  })
  @ValidateNested()
  @Type(() => Discount)
  @IsOptional()
  discount?: Array<Discount>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  email!: string;

  @ApiProperty({
    required: false,
    type: () => [Feedback],
  })
  @ValidateNested()
  @Type(() => Feedback)
  @IsOptional()
  feedbacks?: Array<Feedback>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  firstName!: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  id!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  lastName!: string;

  @ApiProperty({
    required: false,
    type: () => [Move],
  })
  @ValidateNested()
  @Type(() => Move)
  @IsOptional()
  moves?: Array<Move>;

  @ApiProperty({
    required: false,
    type: () => [Notification],
  })
  @ValidateNested()
  @Type(() => Notification)
  @IsOptional()
  notification?: Array<Notification>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  phone!: string;
}

export { Customer as Customer };
