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
class BudgetItemCreateInput {
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
    required: true,
    type: () => BudgetWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BudgetWhereUniqueInput)
  @Field(() => BudgetWhereUniqueInput)
  budget!: BudgetWhereUniqueInput;

  @ApiProperty({
    required: true,
    enum: EnumBudgetItemCategory,
  })
  @IsEnum(EnumBudgetItemCategory)
  @Field(() => EnumBudgetItemCategory)
  category!:
    | "ESTAR_E_JANTAR"
    | "DORMITORIO"
    | "COZINHA_AREA"
    | "VEICULOS"
    | "ESCRITORIO"
    | "DIVERSOS";

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  itemName!: string;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  needsPacking!: boolean;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  needsTempControl!: boolean;

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
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  quantity!: number;
}

export { BudgetItemCreateInput as BudgetItemCreateInput };
