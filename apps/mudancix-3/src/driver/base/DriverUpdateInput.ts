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
import { ChatUpdateManyWithoutDriversInput } from "./ChatUpdateManyWithoutDriversInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsBoolean,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";
import { MoveUpdateManyWithoutDriversInput } from "./MoveUpdateManyWithoutDriversInput";
import { PaymentUpdateManyWithoutDriversInput } from "./PaymentUpdateManyWithoutDriversInput";
import { VehicleWhereUniqueInput } from "../../vehicle/base/VehicleWhereUniqueInput";

@InputType()
class DriverUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ChatUpdateManyWithoutDriversInput,
  })
  @ValidateNested()
  @Type(() => ChatUpdateManyWithoutDriversInput)
  @IsOptional()
  @Field(() => ChatUpdateManyWithoutDriversInput, {
    nullable: true,
  })
  chats?: ChatUpdateManyWithoutDriversInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isAvailable?: boolean;

  @ApiProperty({
    required: false,
    type: () => MoveUpdateManyWithoutDriversInput,
  })
  @ValidateNested()
  @Type(() => MoveUpdateManyWithoutDriversInput)
  @IsOptional()
  @Field(() => MoveUpdateManyWithoutDriversInput, {
    nullable: true,
  })
  moves?: MoveUpdateManyWithoutDriversInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    type: () => PaymentUpdateManyWithoutDriversInput,
  })
  @ValidateNested()
  @Type(() => PaymentUpdateManyWithoutDriversInput)
  @IsOptional()
  @Field(() => PaymentUpdateManyWithoutDriversInput, {
    nullable: true,
  })
  payments?: PaymentUpdateManyWithoutDriversInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phoneNumber?: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  totalEarnings?: number;

  @ApiProperty({
    required: false,
    type: () => VehicleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => VehicleWhereUniqueInput)
  @IsOptional()
  @Field(() => VehicleWhereUniqueInput, {
    nullable: true,
  })
  vehicle?: VehicleWhereUniqueInput;
}

export { DriverUpdateInput as DriverUpdateInput };
