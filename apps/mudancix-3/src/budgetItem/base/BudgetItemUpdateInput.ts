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
  IsString,
  IsOptional,
  ValidateNested,
  IsEnum,
  IsBoolean,
  IsInt,
} from "class-validator";
import { BudgetWhereUniqueInput } from "../../budget/base/BudgetWhereUniqueInput";
import { Type } from "class-transformer";
import { EnumBudgetItemCategory } from "./EnumBudgetItemCategory";

@InputType()
class BudgetItemUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  additionalRequirements?: string | null;

  @ApiProperty({
    required: false,
    type: () => BudgetWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BudgetWhereUniqueInput)
  @IsOptional()
  @Field(() => BudgetWhereUniqueInput, {
    nullable: true,
  })
  budget?: BudgetWhereUniqueInput;

  @ApiProperty({
    required: false,
    enum: EnumBudgetItemCategory,
  })
  @IsEnum(EnumBudgetItemCategory)
  @IsOptional()
  @Field(() => EnumBudgetItemCategory, {
    nullable: true,
  })
  category?:
    | "ESTAR_E_JANTAR"
    | "DORMITORIO"
    | "COZINHA_AREA"
    | "VEICULOS"
    | "ESCRITORIO"
    | "DIVERSOS";

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  itemName?: string;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  needsPacking?: boolean;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  needsTempControl?: boolean;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  photoUrl?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  quantity?: number;
}

export { BudgetItemUpdateInput as BudgetItemUpdateInput };