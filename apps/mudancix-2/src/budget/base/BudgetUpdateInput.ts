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
import { BudgetItemUpdateManyWithoutBudgetsInput } from "./BudgetItemUpdateManyWithoutBudgetsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsBoolean,
} from "class-validator";
import { Type } from "class-transformer";
import { MoveWhereUniqueInput } from "../../move/base/MoveWhereUniqueInput";

@InputType()
class BudgetUpdateInput {
  @ApiProperty({
    required: false,
    type: () => BudgetItemUpdateManyWithoutBudgetsInput,
  })
  @ValidateNested()
  @Type(() => BudgetItemUpdateManyWithoutBudgetsInput)
  @IsOptional()
  @Field(() => BudgetItemUpdateManyWithoutBudgetsInput, {
    nullable: true,
  })
  budgetItems?: BudgetItemUpdateManyWithoutBudgetsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  customerEmail?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  customerName?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  customerPhone?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  customerWhatsapp?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  destinationLocationType?: string;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  exclusiveTruck?: boolean;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  flexibleDate?: boolean;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  hoisting?: boolean;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  insurance?: boolean;

  @ApiProperty({
    required: false,
    type: () => MoveWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MoveWhereUniqueInput)
  @IsOptional()
  @Field(() => MoveWhereUniqueInput, {
    nullable: true,
  })
  move?: MoveWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  originLocationType?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  specialInstructions?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  termsAccepted?: boolean;
}

export { BudgetUpdateInput as BudgetUpdateInput };
