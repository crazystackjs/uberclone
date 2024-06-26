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
import {
  IsNumber,
  ValidateNested,
  IsDate,
  IsOptional,
  IsString,
} from "class-validator";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";
import { Type } from "class-transformer";
import { MoveEmployeeCreateNestedManyWithoutMovesInput } from "./MoveEmployeeCreateNestedManyWithoutMovesInput";
import { FeedbackWhereUniqueInput } from "../../feedback/base/FeedbackWhereUniqueInput";
import { InsuranceCreateNestedManyWithoutMovesInput } from "./InsuranceCreateNestedManyWithoutMovesInput";
import { ItemCreateNestedManyWithoutMovesInput } from "./ItemCreateNestedManyWithoutMovesInput";
import { PaymentCreateNestedManyWithoutMovesInput } from "./PaymentCreateNestedManyWithoutMovesInput";
import { RouteCreateNestedManyWithoutMovesInput } from "./RouteCreateNestedManyWithoutMovesInput";
import { StorageCreateNestedManyWithoutMovesInput } from "./StorageCreateNestedManyWithoutMovesInput";
import { VehicleWhereUniqueInput } from "../../vehicle/base/VehicleWhereUniqueInput";

@InputType()
class MoveCreateInput {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  costDistance!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  costVolume!: number;

  @ApiProperty({
    required: true,
    type: () => CustomerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerWhereUniqueInput)
  @Field(() => CustomerWhereUniqueInput)
  customer!: CustomerWhereUniqueInput;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  date!: Date;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  distanceKm!: number;

  @ApiProperty({
    required: false,
    type: () => MoveEmployeeCreateNestedManyWithoutMovesInput,
  })
  @ValidateNested()
  @Type(() => MoveEmployeeCreateNestedManyWithoutMovesInput)
  @IsOptional()
  @Field(() => MoveEmployeeCreateNestedManyWithoutMovesInput, {
    nullable: true,
  })
  employees?: MoveEmployeeCreateNestedManyWithoutMovesInput;

  @ApiProperty({
    required: false,
    type: () => FeedbackWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FeedbackWhereUniqueInput)
  @IsOptional()
  @Field(() => FeedbackWhereUniqueInput, {
    nullable: true,
  })
  feedback?: FeedbackWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => InsuranceCreateNestedManyWithoutMovesInput,
  })
  @ValidateNested()
  @Type(() => InsuranceCreateNestedManyWithoutMovesInput)
  @IsOptional()
  @Field(() => InsuranceCreateNestedManyWithoutMovesInput, {
    nullable: true,
  })
  insurance?: InsuranceCreateNestedManyWithoutMovesInput;

  @ApiProperty({
    required: false,
    type: () => ItemCreateNestedManyWithoutMovesInput,
  })
  @ValidateNested()
  @Type(() => ItemCreateNestedManyWithoutMovesInput)
  @IsOptional()
  @Field(() => ItemCreateNestedManyWithoutMovesInput, {
    nullable: true,
  })
  items?: ItemCreateNestedManyWithoutMovesInput;

  @ApiProperty({
    required: false,
    type: () => PaymentCreateNestedManyWithoutMovesInput,
  })
  @ValidateNested()
  @Type(() => PaymentCreateNestedManyWithoutMovesInput)
  @IsOptional()
  @Field(() => PaymentCreateNestedManyWithoutMovesInput, {
    nullable: true,
  })
  payment?: PaymentCreateNestedManyWithoutMovesInput;

  @ApiProperty({
    required: false,
    type: () => RouteCreateNestedManyWithoutMovesInput,
  })
  @ValidateNested()
  @Type(() => RouteCreateNestedManyWithoutMovesInput)
  @IsOptional()
  @Field(() => RouteCreateNestedManyWithoutMovesInput, {
    nullable: true,
  })
  route?: RouteCreateNestedManyWithoutMovesInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  status!: string;

  @ApiProperty({
    required: false,
    type: () => StorageCreateNestedManyWithoutMovesInput,
  })
  @ValidateNested()
  @Type(() => StorageCreateNestedManyWithoutMovesInput)
  @IsOptional()
  @Field(() => StorageCreateNestedManyWithoutMovesInput, {
    nullable: true,
  })
  storage?: StorageCreateNestedManyWithoutMovesInput;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  totalCost!: number;

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
  vehicle?: VehicleWhereUniqueInput | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  volumeM3!: number;
}

export { MoveCreateInput as MoveCreateInput };
