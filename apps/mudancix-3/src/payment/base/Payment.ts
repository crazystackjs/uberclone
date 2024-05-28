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
import {
  IsNumber,
  IsDate,
  ValidateNested,
  IsOptional,
  IsString,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { Customer } from "../../customer/base/Customer";
import { Driver } from "../../driver/base/Driver";
import { EnumPaymentMethod } from "./EnumPaymentMethod";
import { Move } from "../../move/base/Move";
import { EnumPaymentStatus } from "./EnumPaymentStatus";

@ObjectType()
class Payment {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  amount!: number;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: () => Customer,
  })
  @ValidateNested()
  @Type(() => Customer)
  customer?: Customer;

  @ApiProperty({
    required: false,
    type: () => Driver,
  })
  @ValidateNested()
  @Type(() => Driver)
  @IsOptional()
  driver?: Driver | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    enum: EnumPaymentMethod,
  })
  @IsEnum(EnumPaymentMethod)
  @Field(() => EnumPaymentMethod, {
    nullable: true,
  })
  method?: "CREDIT_CARD" | "DEBIT_CARD" | "PAYPAL" | "BANK_TRANSFER";

  @ApiProperty({
    required: true,
    type: () => Move,
  })
  @ValidateNested()
  @Type(() => Move)
  move?: Move;

  @ApiProperty({
    required: true,
    enum: EnumPaymentStatus,
  })
  @IsEnum(EnumPaymentStatus)
  @Field(() => EnumPaymentStatus, {
    nullable: true,
  })
  status?: "PENDING" | "COMPLETED" | "FAILED";

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Payment as Payment };